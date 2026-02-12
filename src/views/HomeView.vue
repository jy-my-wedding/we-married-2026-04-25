<script setup>
  import Cover from '@/components/public/Cover.vue'
  import GalleryThumbnail from '@/components/public/GalleryThumbnail.vue'
  import GalleryViewer from '@/components/public/GalleryViewer.vue'
  import Info from '@/components/public/Info.vue'
  import Reception from '@/components/public/Reception.vue'
  import Location from '@/components/public/Location.vue'
  import Calendar from '@/components/public/Calendar.vue'
  import Countdown from '@/components/public/Countdown.vue'
  import '@/assets/fonts.css'
  import AccountCard from '@/components/public/AccountCard.vue'
  import Copyright from '@/components/common/Copyright.vue'
  import HamburgerMenu from '@/components/common/HamburgerMenu.vue'
  import AboutUs from '@/components/public/AboutUs.vue'
  import Timeline from '@/components/public/Timeline.vue'
  import AudioPlayer from '@/components/public/AudioPlayer.vue'
  import { onMounted, ref } from 'vue'

  const menuItems = [
    { id: 'Invitation', label: 'Invitation' },
    { id: 'AboutUs', label: 'About Us' },
    { id: 'OurTimeline', label: 'Our Timeline' },
    { id: 'WeddingDay', label: 'Wedding Day' },
    { id: 'Location', label: 'Location' },
    { id: 'Reception', label: 'Wedding Reception' },
    { id: 'Gallery', label: 'Gallery' },
    { id: 'Cash', label: 'For Your Kind Wishes' },
  ]

  let observer = null

  onMounted(() => {
    /** 스크롤 애니메이션 적용(배경음악 자동 실행용) */
    const revealElements = document.querySelectorAll('.reveal')

    const options = {
      threshold: 0.2,
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          /**
           * // 한 번 나타난 후에는 관찰 중지하게 하려면 주석 해제
           * observer.unobserve(entry.target);
           */
        } else {
          /**
           * 한 번 나타난 후에도 다시 사라졌다가 나타나게 하려면 이 부분 유지
           */
          entry.target.classList.remove('show')
        }
      })
    }, options)

    revealElements.forEach((el) => {
      observer.observe(el)
    })
  })

  /* =====================
   1. 이미지 로드
===================== */
  // 썸네일
  const thumbs = Object.entries(
    import.meta.glob('/src/assets/photo/wedding/thumbnail/*.{jpg,jpeg,png,webp}', {
      eager: true,
      import: 'default',
    })
  )
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, src]) => src)

  // 원본
  const fullImages = Object.entries(
    import.meta.glob('/src/assets/photo/wedding/thumbnail/*.{jpg,jpeg,png,webp}', {
      eager: true,
      import: 'default',
    })
  )
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, src]) => src)

  /* =====================
   3. 뷰어 상태
===================== */
  const isOpen = ref(false)
  const currentIndex = ref(0)

  /**
   * 자식 컴포넌트(GalleryViewer)에 넘길 currentIndex 컨트롤 함수
   * @param {number} delta 1 또는 -1
   */
  const currentIndexUpdate = (delta) => {
    const nextIndex = currentIndex.value + delta
    if (nextIndex >= 0 && nextIndex < fullImages.length) {
      currentIndex.value = nextIndex
    }
  }

  /* =====================
   4. 뷰어 열기 / 닫기
===================== */
  const openViewer = (index) => {
    currentIndex.value = index
    isOpen.value = true
    // 뷰어가 열릴 때 스크롤 방지 (터치는 허용)
    document.body.style.overflow = 'hidden'
  }

  const closeViewer = () => {
    currentIndex.value = 0
    isOpen.value = false
    // 뷰어가 닫힐 때 스크롤 방지 해제
    document.body.style.overflow = ''
  }
</script>

<template>
  <HamburgerMenu :menu-items="menuItems" />
  <AudioPlayer type="main" />
  <Cover id="Invitation" />
  <div class="invitation-wrapper bg_white">
    <div class="c_text">박준영 · 이명은</div>
    <div class="c_box">
      <div class="c_title">2026년 4월 25일 토요일 오후 5시</div>
      <div class="csub_title">라비니움 1층 리츄얼홀</div>
    </div>
    <div class="title">Invitation</div>
    <Info />
  </div>
  <div class="size_box invitation-wrapper reveal">
    <div class="title" id="AboutUs">About Us</div>
    <AboutUs />
  </div>
  <div class="invitation-wrapper bg_green size_box reveal">
    <div class="title" id="OurTimeline">Our Timeline</div>
    <Timeline />
  </div>
  <div class="invitation-wrapper size_box bg_whitereveal reveal">
    <div class="title" id="WeddingDay">Wedding Day</div>
    <Calendar />
    <Countdown />
  </div>
  <div class="size_box invitation-wrapper bg_white">
    <!--
      스크롤 애니메이션 적용 시 배경색(흰색) 깨지는 문제 방지
    -->
    <div class="size_box invitation-wrapper bg_white reveal">
      <div class="title" id="Location">Location</div>
      <Location />
    </div>
    <div class="size_box invitation-wrapper bg_white reveal">
      <div class="title" id="Reception">Wedding Reception</div>
      <Reception />
    </div>
    <div class="size_box invitation-wrapper bg_white reveal">
      <div class="title" id="Gallery">Gallery</div>
      <GalleryThumbnail
        :is-open="isOpen"
        :current-index="currentIndex"
        :thumbs="thumbs"
        :full-images="fullImages"
        @open-viewer="openViewer"
      />
    </div>
    <div class="size_box bg_white invitation-wrapper reveal">
      <div class="title" id="Cash">For Your Kind Wishes</div>
      <div class="parking-notice-classic">
        <p class="parking-caption">
          <span> Notice</span><br />
          양가 부모님 성함이 유사하여<br />
          계좌번호 선택 시 수취인 성함을 꼭 확인해 주시길 부탁드립니다.
        </p>
      </div>
      <AccountCard />
    </div>
  </div>
  <div class="bg_white invitation-wrapper" style="padding-bottom: 30px">
    <Copyright />
  </div>
  <GalleryViewer
    :is-open="isOpen"
    :current-index="currentIndex"
    :full-images="fullImages"
    @close-viewer="closeViewer"
    @current-index-update="currentIndexUpdate"
  />
</template>

<style scoped>
  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition:
      all 0.8s ease,
      transform 0.8s ease;
  }
  .reveal.show {
    opacity: 1;
    transform: translateY(0);
  }
  .invitation-wrapper {
    display: block;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    font-family: 'Pretendard', sans-serif;
    color: #333;
  }
  .title {
    font-family: 'eng', sans-serif;
    text-align: center;
    margin: 20px 0px 20px 0px;
    font-size: 60px;
  }
  .c_box {
    margin: 30px 0;
  }
  .c_text {
    padding-top: 30px;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.5em;
    font-size: 23px;
    font-family: 'ko_r', sans-serif;
  }
  .c_title {
    text-align: center;
    font-size: 20px;
    font-family: 'ko_r', sans-serif;
  }
  .csub_title {
    text-align: center;
    font-size: 21px;
    margin: 5px 0 10px;
    padding-bottom: 50px;
    font-family: 'ko_r', sans-serif;
  }
  .bg_white {
    background-color: white;
  }
  .bg_green {
    background-color: #e6e6cd;
  }
  .size_box {
    padding: 70px 0;
  }
  .parking-caption {
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
</style>
