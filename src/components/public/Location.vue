<script setup>
  import { ref } from 'vue'
  import '@/assets/fonts.css'
  import Labinium from '@/components/public/labinium.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faBus, faTrainSubway, faCarRear } from '@fortawesome/free-solid-svg-icons'
  import { faCopy } from '@fortawesome/free-regular-svg-icons'

  library.add(faBus, faTrainSubway, faCarRear, faCopy)

  const copyAddress = async (address) => {
    try {
      await navigator.clipboard.writeText(address)
      alert('주소가 복사되었습니다!')
    } catch {
      alert('복사 실패 😢')
    }
  }

  const address = '서울특별시 송파구 천호대로 996'
</script>
<template>
  <section class="info-section">
    <p>라비니움 웨딩홀</p>
    <p>
      {{ address }}
      <button class="copy-btn" @click="copyAddress(address)">
        <FontAwesomeIcon icon="fa-regular fa-copy" />
      </button>
    </p>
  </section>
  <div class="map-tabs">
    <div class="map-content">
      <Labinium />
    </div>
    <div class="location_text_body">
      <table class="info-table">
        <tr>
          <td>지하철</td>
          <td colspan="2" class="b_t">천호역 10번 출구 바로 앞</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <FontAwesomeIcon icon="fa-solid fa-train-subway" class="icon" style="color: #833edb" />
          </td>
          <td>5호선</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <FontAwesomeIcon icon="fa-solid fa-train-subway" class="icon" style="color: #e41e6e" />
          </td>
          <td>8호선</td>
        </tr>
        <tr>
          <td>버스</td>
          <td colspan="2" class="b_t">천호역 또는 천호사거리 하차</td>
        </tr>
        <tr>
          <td></td>
          <td><FontAwesomeIcon icon="fa-solid fa-bus" class="icon" style="color: #386de8" /></td>
          <td>130, 340, 341, 370</td>
        </tr>
        <tr>
          <td></td>
          <td><FontAwesomeIcon icon="fa-solid fa-bus" class="icon" style="color: #3dc444" /></td>
          <td>3214, 3316, 3321, 3411, 4318</td>
        </tr>
        <tr>
          <td></td>
          <td><FontAwesomeIcon icon="fa-solid fa-bus" class="icon" style="color: #87c800" /></td>
          <td>강동 05, 1-4, 13, 13-2, 16, 23, 30, 30-3, 112-1, 112-5</td>
        </tr>
        <tr>
          <td></td>
          <td><FontAwesomeIcon icon="fa-solid fa-bus" class="icon" style="color: #fc5852" /></td>
          <td>1113, 1113-1, 1113-2, 1113-10, 1113-11</td>
        </tr>
        <tr>
          <td></td>
          <td><FontAwesomeIcon icon="fa-solid fa-bus" class="icon" style="color: #65a7d2" /></td>
          <td>공항버스6200</td>
        </tr>
        <tr>
          <td>자차</td>
          <td colspan="2" class="b_t">서울시 강동구 천호대로 1026-1</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <FontAwesomeIcon icon="fa-solid fa-car-rear" class="icon" style="color: #5d5d5d" />
          </td>
          <td>
            천호역 6번출구 앞 천호 입구 공영주차장 지하1,2층 <br />
            공영주차장 주차 후 현대백화점 방향<br />
            직진하여 천호역 10번출구 이용
          </td>
        </tr>
      </table>
      <div class="parking-notice-classic">
        <p class="parking-caption">
          <span>Parking Notice</span><br />
          주차 공간이 협소하여 인근 공영주차장 이용을 부탁드립니다.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .copy-btn {
    background: none;
    border: none;
    cursor: pointer;
  }
  .info-section {
    padding: 16px;
    border-radius: 12px;
    margin-top: 24px;
    text-align: center;
    font-family: 'ko_r', sans-serif;
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
  .map-content span {
    font-family: 'ko_r', sans-serif;
  }

  .icon {
    color: grey;
    size: 30px;
    margin-right: 10px;
  }
  .info-table {
    table-layout: fixed;
    padding: 0 10px;
    font-size: 13px;
  }
  .info-table td {
    vertical-align: top;
    height: 25px;
    line-height: 1.6;
  }
  .info-table .b_t {
    font-weight: bold;
  }
  .info-table td:nth-child(1) {
    width: 50px;
    font-weight: bold;
  }
  .info-table td:nth-child(2) {
    width: 20px;
  }
  .info-table td:nth-child(3) {
    width: auto;
  }

  .parking-caption {
    margin-top: 50px;
    text-align: center;

    font-size: 13px;
    line-height: 1.8;
    color: #6f625b;
  }

  .parking-caption span {
    display: block;
    margin-bottom: 4px;

    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #b0a39c;
  }

  .bolder_text {
    font-weight: bold;
  }
  .location_text_body {
    padding: 20px;
  }
</style>
