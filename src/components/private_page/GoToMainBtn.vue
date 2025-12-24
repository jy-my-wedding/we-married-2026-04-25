<template>
  <div>
    <button @click="goToPrivate">
      공식 모바일 청첩장으로 가기
    </button>
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
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  background-color: white;
  font-weight: bold;
  font-family: 'modu', sans-serif;
}
</style>