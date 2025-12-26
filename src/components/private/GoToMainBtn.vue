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
    padding: 12px 24px;
    width: 100%;

    font-size: 16px;
    font-weight: 600;
    font-family: 'modu', sans-serif;

    border-radius: 14px;
    cursor: pointer;

    background-color: #ffffff; /* 배경보다 살짝 밝은 화이트 */
    color: #444444;

    border: 1.5px solid #dcdcdc;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);

    transition: all 0.25s ease;
  }

  button:hover {
    background-color: #f1f1f1;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  }
</style>
