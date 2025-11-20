<script setup>
import { onMounted, ref } from 'vue'

const mapElement = ref(null)
const mapOptions = {
  center: new window.naver.maps.LatLng(37.5665, 126.9780), // 예: 서울시청
  zoom: 15,
}
onMounted(() => {
  if (window.naver && mapElement.value) {
    new window.naver.maps.Map(mapElement.value, mapOptions)
  }
})
</script>

<template>
  <div class="map-container" ref="mapElement"></div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  margin-top: 16px;
}
</style>
