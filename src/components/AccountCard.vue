<script setup>
  import { ref } from 'vue'
  import '@/assets/fonts.css'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faCopy } from '@fortawesome/free-regular-svg-icons'

  library.add(faCopy)

  const familyData = [
    {
      type: '신랑측',
      color: '#cfe2ff',
      members: [
        {
          role: '아버지',
          name: '박승준',
          phone: '010-4536-3025',
          bank: '농협',
          account: '352-1733-2958-23',
        },
        {
          role: '어머니',
          name: '김미자',
          phone: '010-5493-3025',
          bank: '농협',
          account: '957-12-375313',
        },
        {
          role: '신랑',
          name: '박준영',
          phone: '010-4094-3541',
          bank: '농협',
          account: '901044-56-072991',
        },
      ],
    },
    {
      type: '신부측',
      color: '#f6dce3',
      members: [
        {
          role: '아버지',
          name: '이승준',
          phone: '010-3399-7908',
          bank: '국민',
          account: '038701-04-577887',
        },
        {
          role: '어머니',
          name: '강미숙',
          phone: '010-8982-9234',
          bank: '농협',
          account: '018-12-180860',
        },
        {
          role: '신부',
          name: '이명은',
          phone: '010-9908-9234',
          bank: '국민',
          account: '038701-04-476922',
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
      alert('복사에 실패했습니다 😢')
    }
  }
</script>
<template>
  <div class="ac_text">
    참석이 어려우신 분들을 위해 기재했습니다<br />
    너그러운 마음으로 양해 부탁드립니다
  </div>
  <div class="family-section">
    <div v-for="group in familyData" :key="group.type" class="family-group">
      <!-- 그룹 토글 버튼 -->
      <button
        class="group-btn"
        :style="{ background: group.color }"
        @click="toggleGroup(group.type)"
      >
        {{ group.type }}
        <span>{{ openGroup === group.type ? '▲' : '▼' }}</span>
      </button>

      <!-- 그룹 내용, 스르륵 애니메이션 -->
      <transition name="slide">
        <div
          v-if="openGroup === group.type"
          class="group-content"
          :style="{ background: group.color }"
        >
          <div v-for="member in group.members" :key="member.name" class="member-card">
            <div class="member-info">
              <div class="role_box">
                <strong>{{ member.role }}</strong>
              </div>
              <div class="mem_info_box">
                <div>{{ member.name }}</div>
                <div class="member-account">
                  {{ member.bank }} {{ member.account }}
                  <button class="copy-btn" @click="copyAccount(member.bank, member.account)">
                    <FontAwesomeIcon icon="fa-regular fa-copy" class="copy_icon" />
                  </button>
                </div>
              </div>
            </div>
            <!-- <div class="member-phone">{{ member.phone }}</div> -->
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

  .group-btn {
    width: 100%;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    text-align: left;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  .group-content {
    padding: 8px 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    background: #fff8f0;
    overflow: hidden;
  }

  .member-card {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
  }

  .member-card:last-child {
    border-bottom: none;
  }

  .member-info {
    font-weight: 500;
    margin-bottom: 4px;
    display: flex;
  }
  .role_box {
    width: 20%;
    text-align: center;
    height: auto;
    vertical-align: middle;
    display: flex;
    justify-content: center; /* 가로 중앙 */
    align-items: center;
  }
  .mem_info_box {
    width: 80%;
    text-align: right;
  }
  .member-account {
    margin-bottom: 4px;
    font-size: 14px;
  }

  .copy-btn {
    background: none;
    border: none;
    cursor: pointer;
  }

  .member-phone {
    font-size: 13px;
    color: #555;
  }

  /* 스르륵 애니메이션 */
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
    padding: 8px 16px;
  }
  .ac_text {
    text-align: center;
    font-size: 14px;
    letter-spacing: 0.08em;
    line-height: 2.1;
    margin: 30px 0;
    font-family: 'ko_r', sans-serif;
  }
  .copy_icon {
    width: 20px;
  }
</style>
