<script setup>
  import { ref } from 'vue'
  import '@/assets/fonts.css'
  const weddingDate = ref(new Date('2026-04-25'))
</script>

<template>
  <div class="month">4</div>
  <div class="calendar-wrap">
    <v-calendar
      :attributes="[{ key: 'wedding', dates: weddingDate, highlight: false }]"
      :show-nav="false"
      :min-date="weddingDate"
      :max-date="weddingDate"
    />
  </div>
</template>

<style scoped>
  .month {
    text-align: center;
    font-size: 20px;
    margin: 70px 0 20px;
    color: #94a3b8;
  }
  .calendar-wrap {
    display: flex;
    justify-content: center;
  }

  /* 전체 테두리 제거 */
  :deep(.vc-container) {
    border: none;
    box-shadow: none;
    background: transparent;
  }

  /* 요일 헤더 */
  :deep(.vc-weekday) {
    font-size: 11px;
    letter-spacing: 0.12em;
    color: #b0a39c;
    font-weight: 400;
  }

  /* 날짜 셀 */
  :deep(.vc-day-content) {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: auto;
    font-size: 14px;
    color: #9b8f88;
  }

  /* 오늘, 선택 제거 */
  :deep(.vc-day.is-today .vc-day-content),
  :deep(.vc-day.is-selected .vc-day-content) {
    background: none;
  }

  /* 결혼식 날짜 강조 */
  :deep(.vc-day.has-attr .vc-day-content) {
    background: #3f3530;
    color: #ffffff;
    font-weight: 500;
  }
  /* 월 + 이동 버튼 전체 영역 */
  :deep(.vc-header) {
    display: none;
  }
  :deep(.vc-day.has-attr .vc-day-content) {
    background: #7a8f86;
    color: #ffffff;
  }
</style>
