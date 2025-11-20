<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 결혼식 날짜
const weddingDate = new Date('2026-04-25T14:00:00')
const remaining = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })

let intervalId

const updateRemaining = () => {
  const now = new Date()
  const diff = weddingDate - now
  if (diff > 0) {
    remaining.value.days = Math.floor(diff / (1000 * 60 * 60 * 24))
    remaining.value.hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    remaining.value.minutes = Math.floor((diff / (1000 * 60)) % 60)
    remaining.value.seconds = Math.floor((diff / 1000) % 60)
  } else {
    remaining.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    clearInterval(intervalId)
  }
}

onMounted(() => {
  updateRemaining()
  intervalId = setInterval(updateRemaining, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
    <div class="t_area">
        <table class="info-table">
        <thead>
        <tr>
            <th>DAYS</th>
            <th> </th>
            <th>HOUR</th>
            <th> </th>
            <th>MIN</th>
            <th> </th>
            <th>SEC</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>{{ remaining.days }}</td>
            <td> : </td>
            <td>{{ remaining.hours }}</td>
            <td> : </td>
            <td>{{ remaining.minutes }}</td>
            <td> : </td>
            <td>{{ remaining.seconds }}</td>
        </tr>
        </tbody>
        </table>
    </div>
  <div class="i_text">
    준영, 명은 결혼식이 {{ remaining.days +1 }}일 남았습니다
  </div>
</template>

<style scoped>
.t_area {
    display: flex;
    justify-content: center; /* 가로 중앙 */
    align-items: center;     /* 세로 중앙 */
    height: 80px;           /* 부모 높이 필요 */
}
.info-table {
  text-align: center;
  margin: 16px 0;
  padding: 12px;
  border-radius: 12px;
  font-weight: 500;
}
.info-table th {
    font-size: 10px;
    color: gray;
}
.info-table td {
    font-size: 24px;
}
.i_text {
    font-family: 'ko_r', sans-serif;
    text-align: center;
    font-size: 14px;
}
</style>
