<script setup>
import { onMounted, ref } from 'vue'

const mapElement = ref(null)

onMounted(() => {
  if (window.kakao && mapElement.value) {
    const map = new window.kakao.maps.Map(mapElement.value, {
      center: new window.kakao.maps.LatLng(37.53848034341464, 127.12242579865845),
      level: 3
    })
    // 마커 예시
    new window.kakao.maps.Marker({
      position: map.getCenter(),
      map: map,
    })
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
