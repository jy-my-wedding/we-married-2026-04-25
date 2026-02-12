<script setup>
  import { ref, defineEmits, nextTick, watch } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'

  /* 라이브러리에 아이콘 등록 */
  library.add(faChevronLeft, faChevronRight, faXmark)

  /* =====================
   3. 뷰어 상태
===================== */
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
    fullImages: {
      type: Array,
      required: true,
    },
  })

  /* =====================
   4. 뷰어 열기 / 닫기
===================== */
  const emit = defineEmits(['close-viewer', 'current-index-update'])

  const closeViewer = () => {
    resetZoom()
    emit('close-viewer')
  }

  /* =====================
   5. 이미지 이동
===================== */
  const prevImage = () => {
    if (props.currentIndex > 0) emit('current-index-update', -1)
  }

  const nextImage = () => {
    if (props.currentIndex < props.fullImages.length - 1) emit('current-index-update', 1)
  }

  /* =====================
   6. 확대/이동 (핀치 줌 + 패닝)
   - 최대 줌: 5
   - 화면 밖으로 과도하게 나가지 않도록 클램프
   - scale !== 1 이면 스와이프(페이지 넘김) 비활성
   - scale !== 1 이면 더블탭으로 1배 리셋
===================== */
  const MIN_SCALE = 1
  const MAX_SCALE = 5

  const scale = ref(1)
  const translateX = ref(0)
  const translateY = ref(0)
  const isGesturing = ref(false)

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v))

  const imageWrapRef = ref(null)
  const imageRef = ref(null)
  const baseWidth = ref(0)
  const baseHeight = ref(0)

  const activePointers = new Map()
  let isPinching = false
  let panPointerId = null
  let lastPanPos = null
  let movedDuringGesture = false

  let pinchStartDistance = 0
  let pinchStartScale = 1
  let pinchStartMid = { x: 0, y: 0 } // wrapper local
  let pinchStartTranslate = { x: 0, y: 0 }

  let lastTapAt = 0
  const DOUBLE_TAP_MS = 300

  const toLocal = (clientX, clientY) => {
    const wrap = imageWrapRef.value
    if (!wrap) return { x: clientX, y: clientY }
    const r = wrap.getBoundingClientRect()
    return { x: clientX - r.left, y: clientY - r.top }
  }

  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y)
  const midpoint = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 })

  const clampTranslation = () => {
    if (!baseWidth.value || !baseHeight.value) return

    const scaledW = baseWidth.value * scale.value
    const scaledH = baseHeight.value * scale.value

    const minX = Math.min(0, baseWidth.value - scaledW)
    const maxX = 0
    const minY = Math.min(0, baseHeight.value - scaledH)
    const maxY = 0

    translateX.value = clamp(translateX.value, minX, maxX)
    translateY.value = clamp(translateY.value, minY, maxY)
  }

  const resetZoom = () => {
    scale.value = 1
    translateX.value = 0
    translateY.value = 0
    isGesturing.value = false
    activePointers.clear()
    isPinching = false
    panPointerId = null
    lastPanPos = null
    movedDuringGesture = false
    lastTapAt = 0
  }

  const ensureBaseSize = async () => {
    await nextTick()
    const img = imageRef.value
    if (!img) return

    // scale=1, translate=0 기준으로 측정
    const prevS = scale.value
    const prevX = translateX.value
    const prevY = translateY.value
    scale.value = 1
    translateX.value = 0
    translateY.value = 0

    await nextTick()
    const rect = img.getBoundingClientRect()
    if (rect.width > 0 && rect.height > 0) {
      baseWidth.value = rect.width
      baseHeight.value = rect.height
    }

    scale.value = prevS
    translateX.value = prevX
    translateY.value = prevY
  }

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return

    e.currentTarget?.setPointerCapture?.(e.pointerId)
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY })

    movedDuringGesture = false
    isGesturing.value = true

    if (activePointers.size === 1) {
      if (scale.value !== 1) {
        panPointerId = e.pointerId
        lastPanPos = toLocal(e.clientX, e.clientY)
      }
    }

    if (activePointers.size === 2) {
      const pts = Array.from(activePointers.values()).map((p) => toLocal(p.x, p.y))
      isPinching = true
      panPointerId = null
      lastPanPos = null

      pinchStartDistance = dist(pts[0], pts[1])
      pinchStartScale = scale.value
      pinchStartMid = midpoint(pts[0], pts[1])
      pinchStartTranslate = { x: translateX.value, y: translateY.value }
    }
  }

  const onPointerMove = (e) => {
    if (!activePointers.has(e.pointerId)) return
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY })

    // 핀치 줌
    if (activePointers.size === 2 && isPinching) {
      const pts = Array.from(activePointers.values()).map((p) => toLocal(p.x, p.y))
      const d = dist(pts[0], pts[1])
      const mid = midpoint(pts[0], pts[1])

      const nextScale = clamp(pinchStartScale * (d / (pinchStartDistance || 1)), MIN_SCALE, MAX_SCALE)
      scale.value = nextScale

      // (1) 기본: 핀치 시작 중점에서 현재 중점 이동만 반영
      translateX.value = pinchStartTranslate.x + (mid.x - pinchStartMid.x)
      translateY.value = pinchStartTranslate.y + (mid.y - pinchStartMid.y)

      // (2) 살짝만 포커스 보정 (하이브리드)
      // - 완전한 중심 고정이 아니라, "중앙에서 얼마나 벗어나 있는지"를
      //   scale 변화량에 비례해서 약하게 반영해 줌
      if (baseWidth.value && baseHeight.value) {
        const centerX = baseWidth.value / 2
        const centerY = baseHeight.value / 2
        const focusStrength = 0.35 // 0에 가까울수록 영향 적음, 1이면 강함

        // scale 변화 비율 (0~1 근처)
        const scaleDelta = Math.min(1, Math.max(0, Math.abs(nextScale - pinchStartScale) / (MAX_SCALE - MIN_SCALE)))

        const offsetFromCenterX = mid.x - centerX
        const offsetFromCenterY = mid.y - centerY

        translateX.value += offsetFromCenterX * focusStrength * scaleDelta
        translateY.value += offsetFromCenterY * focusStrength * scaleDelta
      }

      movedDuringGesture = true
      clampTranslation()
      return
    }

    // 패닝(확대 중)
    if (activePointers.size === 1 && scale.value !== 1 && panPointerId === e.pointerId) {
      const prev = lastPanPos
      const cur = toLocal(e.clientX, e.clientY)
      if (prev && cur) {
        const dx = cur.x - prev.x
        const dy = cur.y - prev.y
        translateX.value += dx
        translateY.value += dy
        if (Math.abs(dx) + Math.abs(dy) > 1) movedDuringGesture = true
        clampTranslation()
      }
      lastPanPos = cur
    }
  }

  const onPointerUpOrCancel = (e) => {
    if (activePointers.has(e.pointerId)) activePointers.delete(e.pointerId)

    if (panPointerId === e.pointerId) {
      panPointerId = null
      lastPanPos = null
    }
    if (activePointers.size < 2) isPinching = false

    if (activePointers.size === 0) {
      isGesturing.value = false

      // scale이 거의 1이면 1로 스냅 + 리셋
      if (scale.value <= 1.01) {
        resetZoom()
        return
      }

      // 더블탭(리셋만): scale !== 1 인 상태에서만 동작
      if (e.pointerType === 'touch' && scale.value !== 1 && !movedDuringGesture) {
        const now = Date.now()
        if (now - lastTapAt < DOUBLE_TAP_MS) resetZoom()
        lastTapAt = now
      } else {
        lastTapAt = 0
      }
    }
  }

  /* =====================
   7. 스와이프 제스처
===================== */
  let startX = 0

  const onTouchStart = (e) => {
    // 줌 상태(scale !== 1)에서는 페이지 넘김 스와이프 비활성
    if (scale.value !== 1) return
    startX = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (scale.value !== 1) return
    const endX = e.changedTouches[0].clientX
    const diff = startX - endX

    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage()
    }
  }

  // 뷰어 열림/이미지 변경 시: 줌 리셋 + base size 재측정
  watch(
    () => [props.isOpen, props.currentIndex],
    async ([open]) => {
      if (!open) return
      resetZoom()
      await ensureBaseSize()
    }
  )
</script>

<template>
  <!-- viewer -->
  <div
    v-if="isOpen"
    class="viewer"
    @click.self="closeViewer"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- close -->
    <button class="close" @click="closeViewer">×</button>

    <!-- index -->
    <div class="counter">{{ currentIndex + 1 }} / {{ fullImages.length }}</div>

    <!-- left -->
    <button class="nav left" @click="prevImage" :disabled="currentIndex === 0">
      <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
    </button>

    <!-- image -->
    <div
      ref="imageWrapRef"
      class="viewer-image-wrap"
      :style="baseWidth && baseHeight ? { width: `${baseWidth}px`, height: `${baseHeight}px` } : undefined"
    >
      <img
        ref="imageRef"
        :src="fullImages[currentIndex]"
        class="viewer-image"
        :style="{
          transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
          transition: isGesturing ? 'none' : 'transform 0.25s ease',
        }"
        @load="ensureBaseSize"
        @pointerdown.prevent="onPointerDown"
        @pointermove.prevent="onPointerMove"
        @pointerup.prevent="onPointerUpOrCancel"
        @pointercancel.prevent="onPointerUpOrCancel"
        @dblclick.prevent="scale !== 1 ? resetZoom() : undefined"
      />
    </div>

    <!-- right -->
    <button class="nav right" @click="nextImage" :disabled="currentIndex === fullImages.length - 1">
      <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
    </button>
  </div>
</template>

<style>
  /* ===== Viewer ===== */
  .viewer {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    touch-action: none;
  }

  .viewer-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
    transition: transform 0.25s ease;
    transform-origin: 0 0;
  }

  .viewer-image-wrap {
    max-width: 90%;
    max-height: 85%;
    overflow: hidden;
    border-radius: 12px;
    touch-action: none;
  }

  /* 닫기 */
  .viewer .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 32px;
    background: none;
    color: white !important;
    border: none;
    cursor: pointer;
    z-index: 9999;
  }

  /* 좌우 */
  .nav {
    width: 48px;
    height: 48px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px; /* 아이콘 크기 조정 */
    background: rgba(0, 0, 0, 0.3);
    color: white !important;
    border: none;
    cursor: pointer;
    z-index: 9999;
    border-radius: 50%;

    display: flex; /* 아이콘 중앙 정렬 */
    align-items: center;
    justify-content: center;

    /* padding 제거 */
    padding: 0;

    transition:
      background 0.2s,
      transform 0.2s;
  }

  .nav:hover {
    background: rgba(0, 0, 0, 0.5);
    transform: translateY(-50%) scale(1.1);
  }

  .nav.left {
    left: 10px;
  }

  .nav.right {
    right: 10px;
  }

  .nav:disabled {
    opacity: 0.3;
  }

  /* 인덱스 */
  .counter {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    font-size: 14px;
    opacity: 0.8;
  }

  .toggle-btn {
    margin-top: 16px;
    padding: 10px 26px;
    border-radius: 20px;
    border: 1px solid #ddd;
    background: white;
    font-size: 14px;
    cursor: pointer;
  }

  .toggle-btn:hover {
    background: #f5f5f5;
  }
</style>
