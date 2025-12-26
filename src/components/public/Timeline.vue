<script setup>
  import TimelineItem from '@/components/public/TimelineItem.vue'
  import Img1 from '@/assets/photo/wedding/timeline/1.jpeg'
  import Img2 from '@/assets/photo/wedding/timeline/2.jpeg'
  import Img3 from '@/assets/photo/wedding/timeline/3.jpeg'
  import Img4 from '@/assets/photo/wedding/timeline/4.jpeg'

  const timeline = [
    {
      image: Img1,
      title: '설레는 첫 만남',
      desc: '2016년, 새내기 시절 시작된 이야기',
    },
    {
      image: Img2,
      title: '기다림의 시간',
      desc: '길면 길고 짧으면 짧았던 633일',
    },
    {
      image: Img3,
      title: '함께한 소중한 날들',
      desc: '웃음과 추억이 일상이 된 순간들',
    },
    {
      image: Img4,
      title: '드디어 결혼',
      desc: '2026년 4월 25일, 이제는 가족이 됩니다',
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
    padding: 20px 0 0;
  }
</style>
