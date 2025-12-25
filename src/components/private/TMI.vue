<script setup lang="ts">
  import '@/assets/fonts.css'
  import Title from '@/components/private/Title.vue'
  import { computed } from 'vue'

  const startDate = '2016-03-26'

  const daysTogether = computed(() => {
    const start = new Date(startDate)
    const today = new Date()

    start.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)

    const diffTime = today.getTime() - start.getTime()
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1
  })
</script>

<template>
  <Title>TMI 💬</Title>
  <div class="m_box">
    <div class="t1">우리가 만난 날은?</div>
    <div class="dday">{{ startDate }}</div>
    <div>무려.</div>
    <p class="dday">D+{{ daysTogether }}</p>
  </div>
  <div class="m_box">
    <div class="t1">우리가 만난 곳은?</div>
    <div>대학교 CC</div>
    <div>심지어 같은과</div>
  </div>
</template>

<style>
  .dday {
    font-size: 28px;
    font-weight: 700;
  }

  .m_box {
    text-align: center;
    margin-bottom: 30px;
  }

  .t1 {
    font-family: 'modu', sans-serif;
  }
</style>
