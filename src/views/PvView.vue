<script setup>
  import '@/assets/fonts.css'
  import GoToMainBtn from '@/components/private/GoToMainBtn.vue'
  import Title from '@/components/private/Title.vue'
  import ourimg from '@/assets/private_img/image.png'
  import Copyright from '@/components/common/Copyright.vue'
  import { ref, onMounted, onUnmounted } from 'vue'
  import TMI from '@/components/private/TMI.vue'
  import QnA from '@/components/private/QnA.vue'
  import HamburgerMenu from '@/components/common/HamburgerMenu.vue'

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

  const isVisible = ref(true)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.body.scrollHeight

    isVisible.value = scrollTop + windowHeight < documentHeight - 50
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const menuItems = [
    { id: 'tmi', label: 'TMI' },
    { id: 'qna', label: 'QnA' },
  ]
</script>

<template>
  <HamburgerMenu :menu-items="menuItems" />
  <div class="invitation-wrapper">
    <div class="image_box">
      <img :src="ourimg" alt="test" class="img_1" />
    </div>
    <div class="title">안녕하세요!</div>
    <div class="sub-title">
      여러분들은 신랑, 신부의<br />
      "소중한" 지인들만 받을 수 있는<br />
      모바일 청첩장에 오신걸 환영합니다!
    </div>
    <div class="explain">
      <p>
        이 페이지는 ‘청첩장’이라기보다는 <br />
        저희와 관련된 TMI 이야기들이 모여 있는 공간이에요!<br /><br />

        결혼식 정보가 필요하시면<br />
        페이지 하단의 공식 청첩장 버튼을 눌러주세요 💍
      </p>
      <br />
      <br />
      <h2>그럼 Start!</h2>
    </div>
    <div id="tmi"><TMI /></div>
    <div id="qna"><QnA /></div>
    <Title></Title>
    <GoToMainBtn />
    <Copyright />
    <button v-if="isVisible" class="scroll-down-btn" @click="scrollToBottom">↓</button>
  </div>
</template>

<style scoped>
  .invitation-wrapper {
    display: block;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Pretendard', sans-serif;
    color: #333;
  }
  .title {
    font-family: 'modu', sans-serif;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    margin: 10px 0px;
  }
  .sub-title {
    font-family: 'modu', sans-serif;
    text-align: center;
    font-size: 23px;
  }
  .image_box {
    margin-top: 20px;
    text-align: center;
  }
  .img_1 {
    width: 70%;
  }

  .explain {
    margin: 70px 0;
    font-family: 'modu', sans-serif;
    text-align: center;
    line-height: 1.6;
    font-size: 19px;
  }
  .scroll-down-btn {
    position: fixed;
    right: 16px;
    bottom: 16px;

    width: 44px;
    height: 44px;
    border-radius: 50%;

    border: none;
    background-color: rgba(0, 0, 0, 0.55);
    color: white;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 999;
    cursor: pointer;
  }

  .scroll-down-btn:active {
    transform: scale(0.9);
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
  }

  .scroll-down-btn {
    animation: bounce 1.6s infinite;
  }
</style>
