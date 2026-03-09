<script setup>
  import { onMounted, ref } from 'vue'

  const mapContainer = ref(null)

  // ======= 예식장 정보 =======
  const PLACE_NAME = '라비니움'
  const ADDRESS = '서울특별시 송파구 천호대로 996'
  const LAT = 37.538497
  const LNG = 127.122412
  // ===========================

  onMounted(() => {
    if (!window.kakao) return

    window.kakao.maps.load(() => {
      const kakao = window.kakao
      const center = new kakao.maps.LatLng(LAT, LNG)

      const map = new kakao.maps.Map(mapContainer.value, {
        center,
        level: 3,
        draggable: true,
        scrollwheel: true,
      })
      map.setZoomable(true)

      const marker = new kakao.maps.Marker({
        position: center,
        title: PLACE_NAME,
      })
      marker.setMap(map)
    })
  })

  // ===== 길찾기 =====
  const goToKakaoMap = () => {
    const url = `https://map.kakao.com/link/map/${encodeURIComponent(PLACE_NAME)},${LAT},${LNG}`
    window.open(url, '_blank')
  }

  const goToNaverMap = () => {
    const url = `https://map.naver.com/v5/search/${encodeURIComponent(ADDRESS)}`
    window.open(url, '_blank')
  }
</script>

<template>
  <div class="map-wrapper">
    <div class="map-container" ref="mapContainer"></div>
    <!--
    <div class="place-info">
      <div class="place-name">{{ PLACE_NAME }}</div>
      <div class="place-address">{{ ADDRESS }}</div>
    </div>
  -->
    <div class="map-actions">
      <button class="map-action kakao" @click="goToKakaoMap">
        <img src="@/assets/icons/kakao.png" class="logo" alt="kakao" />
        <span class="text">
          <strong>카카오맵 길찾기</strong>
        </span>
      </button>

      <button class="map-action naver" @click="goToNaverMap">
        <img src="@/assets/icons/naver.png" class="logo" alt="naver" />
        <span class="text">
          <strong>네이버지도 길찾기</strong>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .map-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .map-container {
    width: 100%;
    height: 280px;
    border-radius: 12px;
  }

  .place-info {
    text-align: center;
    font-size: 14px;
    line-height: 1.4;
  }

  .place-name {
    font-weight: 600;
  }

  .place-address {
    color: #666;
    font-size: 13px;
  }

  .map-actions {
    display: flex;
    gap: 10px;
    margin-top: 8px;

    padding: 0 10px; /* ⭐ 좌우 바깥 여백 추가 */
    box-sizing: border-box;
  }

  .map-action {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px;
    border-radius: 14px;
    border: 1px solid #e5e5e5;
    cursor: pointer;
    transition: all 0.15s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  /* 로고 */
  .map-action .logo {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }

  .map-action .text strong {
    font-size: 14px;
    color: #222;
    font-weight: 600;
  }

  .map-action:active {
    transform: scale(0.97);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  /* 카카오 */
  .map-action.kakao {
    background: #fff9cc;
    border-color: #f0e17a;
  }

  /* 네이버 */
  .map-action.naver {
    background: #eaf8f1;
    border-color: #bfe8d2;
  }
</style>
