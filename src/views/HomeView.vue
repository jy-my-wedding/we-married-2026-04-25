<script setup>
  import Cover from '@/components/Cover.vue'
  import Gallery from '@/components/Gallery.vue'
  import Info from '@/components/Info.vue'
  import Location from '@/components/Location.vue'
  import Calendar from '@/components/Calendar.vue'
  import Countdown from '@/components/Countdown.vue'
  import '@/assets/fonts.css'
  import AccountCard from '@/components/AccountCard.vue'
  import Copyright from '@/components/Copyright.vue'
  import AboutUs from '@/components/AboutUs.vue'
  import Timeline from '@/components/Timeline.vue'
</script>

<template>
  <Cover />
  <div class="invitation-wrapper bg_white">
    <div class="c_text">박준영 · 이명은</div>
    <div class="c_box">
      <div class="c_title">2026년 4월 25일 토요일 오후 5시</div>
      <div class="csub_title">라비니움 1층 리츄얼홀</div>
    </div>
    <div class="title">Invitation</div>
    <Info />
  </div>
  <div class="size_box invitation-wrapper">
    <div class="title">About Us</div>
    <AboutUs />
  </div>
  <div class="invitation-wrapper bg_green size_box">
    <div class="title">Our Timeline</div>
    <Timeline />
  </div>
  <div class="invitation-wrapper size_box bg_white">
    <div class="title">Wedding Day</div>
    <Calendar />
    <Countdown />
  </div>
  <div class="size_box invitation-wrapper">
    <div class="title">Location</div>
    <Location />
  </div>
  <div class="size_box invitation-wrapper bg_white">
    <div class="title">Gallery</div>
    <Gallery />
  </div>
  <div class="size_box bg_white invitation-wrapper">
    <div class="title">For Your Kind Wishes</div>
    <AccountCard />
  </div>

  <Copyright />
</template>

<style scoped>
  .invitation-wrapper {
    display: block;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    font-family: 'Pretendard', sans-serif;
    color: #333;
  }
  .title {
    font-family: 'eng', sans-serif;
    text-align: center;
    margin: 20px 0px 20px 0px;
    font-size: 60px;
  }
  .c_box {
    margin: 30px 0;
  }
  .c_text {
    padding-top: 30px;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.5em;
    font-size: 23px;
    font-family: 'ko_r', sans-serif;
  }
  .c_title {
    text-align: center;
    font-size: 20px;
    font-family: 'ko_r', sans-serif;
  }
  .csub_title {
    text-align: center;
    font-size: 21px;
    margin: 5px 0 10px;
    padding-bottom: 50px;
    font-family: 'ko_r', sans-serif;
  }
  .bg_white {
    background-color: white;
  }
  .bg_green {
    background-color: #e6e6cd;
  }
  .size_box {
    padding: 30px 0;
  }
</style>
