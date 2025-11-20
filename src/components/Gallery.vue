<script setup>
import testImg from '@/assets/test.png'
</script>


<template>
  <section class="gallery-section">
      <div class="gallery">
        <img :src="testImg" alt="test" />
        <img :src="testImg" alt="test" />
        <img :src="testImg" alt="test" />
        <img :src="testImg" alt="test" />
        <img :src="testImg" alt="test" />
        <img :src="testImg" alt="test" />
        <img :src="testImg" alt="test" />
        <img :src="testImg" alt="test" />
        <img :src="testImg" alt="test" />
      </div>
    </section>
</template>

<style>
.gallery-section {
  margin-top: 24px;
}
.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
}
.gallery img {
  width: 100%;
  border-radius: 8px;
}
</style>
