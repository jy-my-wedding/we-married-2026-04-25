<script setup>
  import { ref } from 'vue'
  import '@/assets/fonts.css'
  import Chungwoo from '@/components/public/Chungwoo.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  const copyAddress = async (address) => {
    try {
      await navigator.clipboard.writeText(`address`)
      alert('주소가 복사되었습니다!')
    } catch {
      alert('복사 실패 😢')
    }
  }

  const address = '제주 제주시 조천읍 일주동로 792'
</script>

<template>
  <section class="info-section">
    <p>2026년 4월 11일 토요일 11:00 ~ 18:00</p>
    <p>청우 가든</p>
    <p>
      {{ address }}
      <button class="copy-btn" @click="copyAddress(address)">
        <FontAwesomeIcon icon="fa-regular fa-copy" />
      </button>
    </p>
  </section>
  <div class="map-tabs">
    <div class="map-content">
      <Chungwoo />
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
