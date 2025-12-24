<script setup>
  import '@/assets/fonts.css'
  import IntroCard from '@/components/IntroCard.vue'
  import groomImg from '@/assets/photo/wedding/groom.png'
  import brideImg from '@/assets/photo/wedding/bride.png'
</script>
<template>
  <div class="ab_text">저희 커플을 소개합니다!</div>
  <div class="ab_box">
    <IntroCard type="groom" name="박준영" :profileImg="groomImg">
      1997년 7월생<br />
      요즘은 신부의 말을 잘 듣는 연습 중입니다.
    </IntroCard>
    <IntroCard type="bride" name="이명은" :profileImg="brideImg">
      1998년 1월생<br />
      요즘은 신랑을 이해하는 연습 중입니다.
    </IntroCard>
  </div>
</template>

<style>
  .ab_text {
    font-family: 'ko_r', sans-serif;
    text-align: center;
    margin: 40px 0;
  }
  .ab_box {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
