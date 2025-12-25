<script setup>
  import { ref } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCopy } from '@fortawesome/free-regular-svg-icons'
  import GroomImg from '@/assets/photo/wedding/groom.png'
  import BrideImg from '@/assets/photo/wedding/bride.png'

  library.add(faCopy)

  const familyData = [
    {
      type: '신랑측',
      color: '#cfe2ff',
      sub_color: '#D9E5FF',
      members: [
        {
          role: '아버지',
          name: '박승준',
          bank: '농협',
          account: '352-1733-2958-23',
          img: GroomImg,
        },
        {
          role: '어머니',
          name: '김미자',
          bank: '농협',
          account: '957-12-375313',
          img: GroomImg,
        },
        {
          role: '신랑',
          name: '박준영',
          bank: '농협',
          account: '901044-56-072991',
          img: GroomImg,
        },
      ],
    },
    {
      type: '신부측',
      color: '#f6dce3',
      sub_color: '#FFEBFE',
      members: [
        {
          role: '아버지',
          name: '이승준',
          bank: '국민',
          account: '038701-04-577887',
          img: BrideImg,
        },
        {
          role: '어머니',
          name: '강미숙',
          bank: '농협',
          account: '018-12-180860',
          img: BrideImg,
        },
        {
          role: '신부',
          name: '이명은',
          bank: '국민',
          account: '038701-04-476922',
          img: BrideImg,
        },
      ],
    },
  ]

  const openGroup = ref(null)
  const toggleGroup = (type) => {
    openGroup.value = openGroup.value === type ? null : type
  }

  const copyAccount = async (bank, account) => {
    try {
      await navigator.clipboard.writeText(`${bank} ${account}`)
      alert('계좌번호가 복사되었습니다!')
    } catch {
      alert('복사 실패 😢')
    }
  }
</script>

<template>
  <div class="family-section">
    <div v-for="group in familyData" :key="group.type" class="family-group">
      <!-- 토글 버튼 -->
      <button
        class="group-btn"
        :style="{ background: group.color }"
        :class="{ active: openGroup === group.type }"
        @click="toggleGroup(group.type)"
      >
        {{ group.type }}
        <span>{{ openGroup === group.type ? '▲' : '▼' }}</span>
      </button>

      <!-- 열린 그룹 영역 -->
      <transition name="slide">
        <div
          v-if="openGroup === group.type"
          class="group-content"
          :style="{ background: group.color }"
        >
          <div v-for="member in group.members" :key="member.name" class="member-card">
            <div class="member-img">
              <img :src="member.img" alt="" />
            </div>
            <div class="member-info">
              <div class="role-name">
                <strong>{{ member.role }}</strong> . {{ member.name }}
              </div>
              <div class="account">
                {{ member.bank }} {{ member.account }}
                <button class="copy-btn" @click="copyAccount(member.bank, member.account)">
                  <FontAwesomeIcon icon="fa-regular fa-copy" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
  .family-section {
    max-width: 400px;
    margin: 0 auto;
    font-family: 'KoPubWorld', sans-serif;
  }

  .family-group {
    margin-bottom: 16px; /* 신랑/신부 그룹 간격 */
  }

  /* 토글 버튼 */
  .group-btn {
    width: 100%;
    padding: 12px 16px;
    border: none;
    border-radius: 8px; /* 닫혀 있을 때 둥글게 */
    text-align: left;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #3f3530;
    margin-bottom: 0;
    transition: border-radius 0.2s;
  }

  /* 클릭된 상태 */
  .group-btn.active {
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid #8c8c8c; /* 열린 토글 밑에 선 추가 */
  }

  /* 열린 그룹 영역 */
  .group-content {
    border-radius: 0 0 10px 10px;
    padding: 16px;
  }

  /* 인물 카드 */
  .member-card {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }

  .member-card:last-child {
    margin-bottom: 0;
  }

  .member-img img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 12px;
  }

  .member-info {
    flex: 1;
  }

  .role-name {
    font-weight: 600;
    margin-bottom: 6px;
  }

  .account {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
  }

  .copy-btn {
    background: none;
    border: none;
    cursor: pointer;
  }

  /* 슬라이드 애니메이션 */
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease;
  }
  .slide-enter-from,
  .slide-leave-to {
    max-height: 0;
    opacity: 0;
    padding: 0 16px;
  }
  .slide-enter-to,
  .slide-leave-from {
    max-height: 500px;
    opacity: 1;
    padding: 16px;
  }
</style>
