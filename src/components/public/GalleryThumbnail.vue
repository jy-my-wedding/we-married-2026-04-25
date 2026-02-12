<script setup>
  import { ref, computed, defineEmits } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'

  /* 라이브러리에 아이콘 등록 */
  library.add(faChevronLeft, faChevronRight, faXmark)

  const props = defineProps({
    thumbs: { // 썸네일
      type: Array,
      required: true,
    },
    fullImages: { // 원본
      type: Array,
      required: true,
    },
    isOpen: { // 뷰어 상태
      type: Boolean,
      required: true,
    },
    currentIndex: { // 사진 인덱스
      type: Number,
      required: true,
    },
  })

  /* =====================
   2. 갤러리 토글 (더보기)
===================== */
  const DEFAULT_COUNT = 6
  const isExpanded = ref(false)

  const visibleImages = computed(() => (isExpanded.value ? props.thumbs : props.thumbs.slice(0, DEFAULT_COUNT)))

  const toggleGallery = () => {
    isExpanded.value = !isExpanded.value
  }

  /* =====================
   4. 뷰어 열기 / 닫기
===================== */

  const emit = defineEmits(['open-viewer'])
  // 부모 컴포넌트(HomeView 등)에서 openViewer 이벤트를 받아서,
  // isOpen과 currentIndex 상태를 직접 변경해줘야 함.
  // (즉, 이 컴포넌트에서는 emit만 하고, 상태 변화는 부모가 담당)
  const openViewer = (index) => {
    // props의 값을 직접 수정하지 않고, 이벤트로 부모에게 알림
    emit('open-viewer', index)

    // preload (현재 + 다음)
    const img = new Image()
    img.src = props.fullImages[index]
    if (props.fullImages[index + 1]) {
      const next = new Image()
      next.src = props.fullImages[index + 1]
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
</style>
