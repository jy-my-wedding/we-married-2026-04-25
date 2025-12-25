<template>
  <div>
    <button @click="goToPrivate">공식 모바일 청첩장으로 가기</button>
  </div>
</template>

<script setup>
  import '@/assets/fonts.css'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goToPrivate = () => {
    router.push('/')
  }
</script>

<style scoped>
  button {
    margin: 20px 0;
    padding: 12px 24px; /* 클릭 영역 확보 */
    font-size: 16px;
    font-weight: 600;
    font-family: 'modu', sans-serif;
    cursor: pointer;
    width: 100%;
    border-radius: 12px;

    /* 배경: 연한 크림색, 글자 진한 초콜릿 */
    background-color: #fff9f0;
    color: #3f3530;
    border: 2px solid #ffffff; /* 테두리 살짝 유지 */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* 살짝 떠있는 느낌 */

    /* 부드러운 전환 */
    transition:
      background 0.2s,
      transform 0.2s,
      box-shadow 0.2s;
  }

  button:hover {
    background-color: #fff4e0; /* 호버 시 조금 더 진한 크림색 */
    transform: translateY(-2px); /* 살짝 떠 있는 느낌 */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
</style>
