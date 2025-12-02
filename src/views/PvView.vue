<script setup>
import '@/assets/fonts.css'
import GoToMainBtn from '@/components/GoToMainBtn.vue';
</script>

<template>
  <div class="invitation-wrapper">
    <div>안녕하세요</div>
    <GoToMainBtn />
  </div>
</template>

<style scoped>
.invitation-wrapper {
  display: block; 
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Pretendard', sans-serif;
  background: #fff7f0;
  color: #333;
}

</style>

