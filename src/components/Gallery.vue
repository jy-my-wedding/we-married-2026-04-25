<script setup>
  import { ref, computed } from 'vue'

  /* =====================
   1. 이미지 로드
===================== */
  // 썸네일
  const thumbs = Object.values(
    import.meta.glob('/src/assets/photo/wedding/thumbnail/*.{jpg,jpeg,png,webp}', {
      eager: true,
      import: 'default',
    })
  )

  // 원본
  const fullImages = Object.values(
    import.meta.glob('/src/assets/photo/wedding/thumbnail/*.{jpg,jpeg,png,webp}', {
      eager: true,
      import: 'default',
    })
  )

  /* =====================
   2. 갤러리 토글 (더보기)
===================== */
  const DEFAULT_COUNT = 6
  const isExpanded = ref(false)

  const visibleImages = computed(() => (isExpanded.value ? thumbs : thumbs.slice(0, DEFAULT_COUNT)))

  const toggleGallery = () => {
    isExpanded.value = !isExpanded.value
  }

  /* =====================
   3. 뷰어 상태
===================== */
  const isOpen = ref(false)
  const currentIndex = ref(0)

  /* =====================
   4. 뷰어 열기 / 닫기
===================== */
  const openViewer = (index) => {
    currentIndex.value = index
    isOpen.value = true

    // preload (현재 + 다음)
    const img = new Image()
    img.src = fullImages[index]

    if (fullImages[index + 1]) {
      const next = new Image()
      next.src = fullImages[index + 1]
    }
  }

  const closeViewer = () => {
    scale.value = 1
    isOpen.value = false
  }

  /* =====================
   5. 이미지 이동
===================== */
  const prevImage = () => {
    if (currentIndex.value > 0) currentIndex.value--
  }

  const nextImage = () => {
    if (currentIndex.value < fullImages.length - 1) currentIndex.value++
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
  <!-- gallery -->
  <section class="gallery-section">
    <div class="gallery">
      <img
        v-for="(img, index) in visibleImages"
        :key="index"
        :src="img"
        class="gallery-img"
        loading="lazy"
        @click="openViewer(index)"
      />
    </div>

    <!-- 토글 버튼 -->
    <button v-if="thumbs.length > DEFAULT_COUNT" class="toggle-btn" @click="toggleGallery">
      {{ isExpanded ? '접기' : `더보기 (${thumbs.length - DEFAULT_COUNT}장)` }}
    </button>
  </section>

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
    <button class="nav left" @click="prevImage" :disabled="currentIndex === 0">‹</button>

    <!-- image -->
    <img
      :src="fullImages[currentIndex]"
      class="viewer-image"
      :style="{ transform: `scale(${scale})` }"
      @click="handleTap"
    />

    <!-- right -->
    <button class="nav right" @click="nextImage" :disabled="currentIndex === fullImages.length - 1">
      ›
    </button>
  </div>
</template>

<style>
  @media (max-width: 480px) {
    .gallery {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .gallery-section {
    margin-top: 24px;
    text-align: center;
    padding: 0 20px;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }

  .gallery-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    content-visibility: auto;
  }

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
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 32px;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
  }

  /* 좌우 */
  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 40px;
    background: none;
    color: white;
    border: none;
    cursor: pointer;
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
