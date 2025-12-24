<script setup>
  import { ref } from 'vue'
  import '@/assets/fonts.css'
  const weddingDate = ref(new Date('2026-04-25'))
</script>

<template>
  <div class="calendar">
    <v-calendar
      :attributes="[
        { key: 'wedding', highlight: true, dates: weddingDate, contentClass: 'wedding-day' },
      ]"
      :show-nav="false"
      :min-date="weddingDate"
      :max-date="weddingDate"
    />
  </div>
</template>

<style scoped>
  .calendar {
    padding: 16px;
    text-align: center;
    width: 100%;
  }

  .wedding-day {
    background-color: #ffdada !important; /* 연한 핑크 */
    color: #ff4d4d !important; /* 진한 핑크 글자 */
    border-radius: 50% !important; /* 원형 강조 */
    font-weight: 600;
    box-shadow: 0 2px 6px rgba(255, 77, 77, 0.3);
  }

  /* 요일 헤더 스타일 */
  .vc-weekday {
    color: #ff7f7f;
    font-weight: 600;
    font-size: 14px;
  }

  /* 개별 날짜 스타일 */
  .vc-day {
    border-radius: 12px;
    transition: background 0.3s;
  }

  /* hover 효과 */
  .vc-day:hover {
    background-color: #ffeaea;
  }

  /* 오늘 날짜 강조 */
  .vc-today {
    border: 2px solid #ffb3b3;
    border-radius: 12px;
  }
</style>
