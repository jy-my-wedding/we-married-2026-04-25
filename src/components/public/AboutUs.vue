<script setup>
  import '@/assets/fonts.css'
  import IntroCard from '@/components/public/IntroCard.vue'
  import groomImg from '@/assets/photo/wedding/groom.png'
  import brideImg from '@/assets/photo/wedding/bride.png'
</script>
<template>
  <div class="ab_text">저희 커플을 소개합니다!</div>
  <div class="ab_box">
    <IntroCard type="groom" name="박준영" :profileImg="groomImg">
      1997년 7월생<br />
      게임을 좋아하는 ISTP <br />
      말투에 영혼이 없어보이지만 항상 진심입니다<br />
      오늘부터 평생의 파티원이 생겼습니다<br />
    </IntroCard>
    <IntroCard type="bride" name="이명은" :profileImg="brideImg">
      1998년 1월생<br />
      친구 만나기를 좋아하는 ENFP<br />
      에너지가 넘치는 체력짱입니다<br />
      앞으로 평생 놀 친구가 생겼습니다<br />
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
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
