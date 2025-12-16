<script setup>
  import { ref } from 'vue'

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

const images = Object.values(
  import.meta.glob('/src/assets/photo/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
)

const isOpen = ref(false)
const currentIndex = ref(0)

// ===== open / close =====
const openViewer = (index) => {
  currentIndex.value = index
  isOpen.value = true
}

// 닫을 때 확대 초기화
const closeViewer = () => {
  scale.value = 1
  isOpen.value = false
}

// ===== navigation =====
const prevImage = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

const nextImage = () => {
  if (currentIndex.value < images.length - 1) currentIndex.value++
}

// ===== swipe =====
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
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        class="gallery-img"
        @click="openViewer(index)"
      />
    </div>
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
    <div class="counter">
      {{ currentIndex + 1 }} / {{ images.length }}
    </div>

    <!-- left -->
    <button class="nav left" @click="prevImage" :disabled="currentIndex === 0">
      ‹
    </button>

    <!-- image -->
    <img :src="images[currentIndex]" class="viewer-image" />

    <!-- right -->
    <button
      class="nav right"
      @click="nextImage"
      :disabled="currentIndex === images.length - 1"
    >
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
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.gallery-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  cursor: pointer;
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
}

.viewer-image {
  max-width: 90%;
  max-height: 85%;
  border-radius: 12px;
  transition: transform 0.25s ease;
}

/* 닫기 버튼 */
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

/* 좌우 버튼 */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.nav.left {
  left: 10px;
}

.nav.right {
  right: 10px;
}

.nav:disabled {
  opacity: 0.3;
  cursor: default;
}
/* 사진 번호 */
.counter {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 14px;
  opacity: 0.8;
}

/* 스와이프 중 스크롤 방지 */
.viewer {
  touch-action: pan-y;
}

.viewer-image {
  max-width: 90%;
  max-height: 85%;
  border-radius: 12px;
  transition: transform 0.25s ease;
}

</style>