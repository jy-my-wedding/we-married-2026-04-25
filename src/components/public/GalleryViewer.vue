<script setup>
  import { ref, computed, defineEmits } from 'vue'
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
    scale.value = 1
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
   6. 확대 (더블탭)
===================== */
  const scale = ref(1)
  let lastTap = 0

  const onDoubleTap = () => {
    scale.value = scale.value === 1 ? 2 : 1
  }

  const handleTap = () => {
    const now = Date.now()
    if (now - lastTap < 300) {
      onDoubleTap()
    }
    lastTap = now
  }

  /* =====================
   7. 스와이프 제스처
===================== */
  let startX = 0

  const onTouchStart = (e) => {
    startX = e.touches[0].clientX
  }

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX
    const diff = startX - endX

    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage()
    }
  }
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
    <img
      :src="fullImages[currentIndex]"
      class="viewer-image"
      :style="{ transform: `scale(${scale})` }"
      @click="handleTap"
    />

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
    max-width: 90%;
    max-height: 85%;
    border-radius: 12px;
    transition: transform 0.25s ease;
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
