<script setup>
  const props = defineProps({
    type: { type: String, required: true },
    role: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    bank: { type: String, required: true },
    account: { type: String, required: true },
    profile_img: { type: String, required: true },
    bgColor: { type: String, required: true },
  })

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${props.bank} ${props.account}`)
      alert('계좌번호가 복사되었습니다')
    } catch {
      alert('복사에 실패했어요 😢')
    }
  }
</script>

<template>
  <div class="account-card" :style="{ backgroundColor: bgColor }">
    <div class="info">
      <div class="profile">
        <img :src="profile_img" alt="" class="profile_image" />
      </div>
      <div class="text_info">
        <span v-if="type == ''" class="role">{{ role }}</span>
        <span v-else class="role">{{ type }} · {{ role }}</span>
        <span class="name">{{ name }}</span>
        <div class="account">
          {{ bank }} · {{ account }}
          <button class="copy-icon" @click="copyToClipboard" aria-label="계좌 복사">📋</button>
        </div>
      </div>
    </div>

    <div class="actions">
      <a :href="`tel:${phone}`" class="btn call"> 📞 전화 </a>
    </div>
  </div>
</template>

<style scoped>
  .account-card {
    background: white;
    border-radius: 18px;
    padding: 18px 16px;
    margin: 14px auto;
    max-width: 360px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }

  /* 이름 영역 */
  .info {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
  .profile {
    text-align: center;
  }

  .profile_image {
    width: 60px;
  }

  .text_info {
    padding-left: 20px;
  }

  .role {
    display: block;
    font-size: 13px;
    color: #888;
    margin-bottom: 2px;
  }

  .name {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.2px;
  }

  /* 계좌 */
  .account {
    font-size: 14px;
    color: #444;
  }

  /* 버튼 */
  .actions {
    display: flex;
    gap: 10px;
  }

  .btn {
    flex: 1;
    height: 42px;
    border-radius: 24px;
    font-size: 13px;
    border: none;
    cursor: pointer;
  }

  /* 전화 */
  .call {
    background: white;
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 복사 */
  .copy {
    background: #333;
    color: white;
  }

  /* 터치 피드백 */
  .btn:active {
    transform: scale(0.97);
  }

  /* 계좌 줄 */
  .account-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .account-text {
    font-size: 15px;
    word-break: break-all;
  }

  /* 복사 아이콘 버튼 */
  .copy-icon {
    background: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
  }

  .copy-icon:active {
    transform: scale(0.9);
  }
</style>
