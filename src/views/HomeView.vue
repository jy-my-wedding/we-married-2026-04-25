<script setup>
import Cover from '@/components/Cover.vue'
import Gallery from '@/components/Gallery.vue'
import Info from '@/components/Info.vue';
import Location from '@/components/Location.vue';
import Calendar from '@/components/Calendar.vue';
import Countdown from '@/components/Countdown.vue';
import '@/assets/fonts.css'

</script>

<template>
  <div class="invitation-wrapper">
    <Cover />
    <div class="title">Invitation</div>
    <Info />
    <Calendar />
    <Countdown />
    <div class="title">Location</div>
    <Location />
    <div class="title">Gallery</div>
    <Gallery />
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
.title {
  font-family: 'eng', sans-serif;
  text-align: center;
  margin:80px 0px 20px 0px;
  font-size: 40px;
}

</style>

