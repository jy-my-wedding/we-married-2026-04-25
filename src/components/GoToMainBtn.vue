<template>
  <div>
    <button @click="goToPrivate">
      공식 모바일 청첩장으로 가기
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToPrivate = () => {
  router.push('/')
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>