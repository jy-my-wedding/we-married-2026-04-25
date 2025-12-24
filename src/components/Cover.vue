<script setup>
  import ourimg from '@/assets/photo/wedding/cover.jpeg'
</script>

<template>
  <div class="cover_box">
    <div class="cover_title">We are getting married</div>
    <img :src="ourimg" class="c_img" />
  </div>
</template>

<script>
  export default {
    name: 'WeddingInvitation',
  }
</script>

<style scoped>
  .cover_box {
    position: relative;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
  }
  .c_img {
    width: 100%;
    height: auto; /* ⭐ 핵심 */
    display: block;
  }
  .cover_title {
    position: absolute;
    color: white;
    z-index: 1;
    font-size: 50px;
    font-weight: bold;
    right: 9%;
    top: 7%;
    font-family: 'cover', sans-serif;
    text-align: right;
    opacity: 0;
    transform: translateY(12px);
    animation: fadeInUp 0.8s ease-out forwards;
  }
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
