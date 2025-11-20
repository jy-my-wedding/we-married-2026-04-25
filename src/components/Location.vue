<script setup>
import { ref } from 'vue'
import NaverMap from '@/views/map/NaverMap.vue'
import KakaoMap from '@/views/map/KakaoMap.vue'

const activeTab = ref('kakao') // 초기값 'kakao'

const setTab = (tab) => {
  activeTab.value = tab
}
</script>

<template>
  <section class="info-section">
      <h2>서울특별시 송파구 천호대로 996</h2>
      <p>라비니움 웨딩홀 1층 리츄얼홀 PM 17:00</p>
  </section>
  <div class="map-tabs">
    <div class="tab-header">
      <button
        :class="{ active: activeTab === 'kakao' }"
        @click="setTab('kakao')"
      >카카오 지도</button>
      <button
        :class="{ active: activeTab === 'naver' }"
        @click="setTab('naver')"
      >네이버 지도</button>
    </div>

    <div class="map-content">
      <KakaoMap v-if="activeTab === 'kakao'" />
      <NaverMap v-else />
    </div>
    <div class="l_title">대중교통 이용시</div>
        <div>   
            <span>지하철</span>
            <span>5호선, 8호선 천호역 10번 출구 바로 앞</span>
        </div>
        <div>   
            <span>버스</span>
            <span>천호역 또는 천호사거리 하차
                130, 340, 341, 370, 3214, 3316, 3321, 3411, 4318, 1-4, 13, 13-2, 16, 23, 30, 30-3, 112-1, 112-5, 1113, 1113-1, 1113-2, 1113-10, 1113-11, 3500, 강동 05, 공항버스6200
            </span>
            
        </div>
        
    <div class="l_title">자가 이용시</div>
        <div>
            <span>주소</span>
            <span>
            서울시 강동구 천호대로 1026-1
            천호역 6번출구 앞 천호 입구 공영주차장 지하1,2층
            </span>
        </div>
        <div>
            <span>도보</span>
            <span>공영주차장 주차 후 현대백화점 방향 직진하여 천호역 10번출구 이용</span>
        </div>

웨딩홀 주차공간이 매우 협소하오니 가급적 대중교통이나 공영주차장 이용 부탁드립니다.
    <div>
        
    </div>
  </div>
</template>

<style scoped>
.info-section {
  background: #ffffffaa;
  padding: 16px;
  border-radius: 12px;
  margin-top: 24px;
  text-align: center;
}

.tab-header {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 12px;
}

.tab-header button {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #f7f7f7;
  cursor: pointer;
  font-weight: 500;
}

.tab-header button.active {
  background: #ffeded;
  border-color: #ffb3b3;
}

.map-content {
  width: 100%;
}

.l_title {
    padding: 5px;
    font-size: 20px;
    margin: 20px 0;
    background-color: beige;
}

</style>
