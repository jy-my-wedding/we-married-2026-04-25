<script setup>
  import { onMounted, ref } from 'vue'

  const mapContainer = ref(null)

  onMounted(() => {
    // 카카오가 로드되었는지 확인
    if (!window.kakao || !window.kakao.maps) {
      console.error('카카오 지도 SDK가 로드되지 않았습니다.')
      return
    }
    const options = {
      center: new kakao.maps.LatLng(37.538497, 127.122412),
      level: 3, // 확대 레벨
    }

    const map = new kakao.maps.Map(mapContainer.value, options)

    // 마커 추가 예시
    const markerPosition = new kakao.maps.LatLng(37.538497, 127.122412)
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    })
    marker.setMap(map)
  })
</script>

<template>
  <div class="map-container" ref="mapContainer"></div>
</template>

<style scoped>
  .map-container {
    width: 100%;
    height: 300px; /* 원하는 높이로 설정 */
    border-radius: 12px;
  }
</style>
