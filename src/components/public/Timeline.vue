<script setup>
  import TimelineItem from '@/components/public/TimelineItem.vue'
  import Img1 from '@/assets/photo/wedding/timeline/1.jpeg'
  import Img2 from '@/assets/photo/wedding/timeline/2.jpeg'
  import Img3 from '@/assets/photo/wedding/timeline/3.jpeg'
  import Img4 from '@/assets/photo/wedding/timeline/4.jpeg'

  const timeline = [
    {
      image: Img1,
      title: '2016년 3월 첫만남',
      desc: '대학교 입학',
    },
    {
      image: Img2,
      title: '고무신',
      desc: '길면 길고 짧으면 짧았던 633일',
    },
    {
      image: Img3,
      title: '25년 1월 약속 지키기',
      desc: '20살에 했던 10년뒤 결혼 진행',
    },
    {
      image: Img4,
      title: '26년 4월 25일',
      desc: '이제 가족이 됩니다',
    },
  ]
</script>

<template>
  <section class="timeline">
    <TimelineItem
      v-for="(item, index) in timeline"
      :key="index"
      :item="item"
      :reverse="index % 2 === 1"
    />
  </section>
</template>

<style scoped>
  .timeline {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
</style>
