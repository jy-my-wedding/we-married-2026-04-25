<script setup>
  import ourimg from '@/assets/photo/wedding/cover.jpeg'
</script>

<template>
  <div class="cover_box">
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
    display: block;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
  }
  .c_img {
    width: 100%;
  }
</style>
