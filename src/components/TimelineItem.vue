<template>
  <div class="timeline-item" :class="{ reverse }">
    <!-- 중앙 라인 -->
    <div class="center-line">
      <span class="dot"></span>
    </div>

    <!-- 카드 -->
    <div class="card">
      <div class="image-wrap">
        <img :src="item.image" alt="" />
      </div>

      <div class="text">
        <h4>{{ item.title }}</h4>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    item: Object,
    reverse: Boolean,
  })
</script>

<style scoped>
  .timeline-item {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 32px 0;
  }

  /* 중앙 세로 라인 */
  .center-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: white;
  }

  .dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7px;
    height: 7px;
    background: #3f3530;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  /* 카드 */
  .card {
    width: 300px;
    background: #fff;
    border-radius: 14px;
    padding: 14px 16px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 2;
  }

  /* 중앙에서 살짝만 이동 */
  .timeline-item:not(.reverse) .card {
    transform: translateX(24px);
  }

  .timeline-item.reverse .card {
    transform: translateX(-24px);
  }

  /* 이미지 */
  .image-wrap {
    width: 64px;
    aspect-ratio: 1 / 1;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 텍스트 */
  .text h4 {
    font-size: 13.5px;
    font-weight: 600;
    margin-bottom: 4px;
    color: #3f3530;
  }

  .text p {
    font-size: 12px;
    line-height: 1.5;
    color: #7a6f68;
  }
</style>
