<template>
  <div>
    <!-- 햄버거 버튼 -->
    <button class="hamburger" @click="toggleMenu">☰</button>

    <!-- 드롭다운 메뉴 -->
    <transition name="slide">
      <div v-if="isOpen" class="menu">
        <ul>
          <li v-for="item in menuItems" :key="item.id">
            <a href="#" @click.prevent="scrollTo(item.id)">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const isOpen = ref(false)

  const props = defineProps({
    menuItems: {
      type: Array,
      required: true,
    },
  })

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    isOpen.value = false
  }
</script>

<style scoped>
  /* 햄버거 버튼 */
  .hamburger {
    position: fixed;
    top: 20px;
    left: 12px;
    z-index: 99;
    font-size: 24px;
    background: rgba(255, 255, 255, 0.6); /* 반투명 */
    border-radius: 8px;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(5px); /* 배경 살짝 흐림 */
  }

  /* 드롭다운 메뉴 */
  .menu {
    position: fixed;
    top: 20px; /* 버튼 아래에서 시작 */
    left: 60px;
    width: 200px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 15px;
    z-index: 99;
  }

  /* 메뉴 항목 */
  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .menu li {
    margin-bottom: 12px;
  }
  .menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    display: block; /* 배경색이 링크 전체 영역에 적용되게 */
    padding: 4px 6px;
    border-radius: 6px;
    transition:
      background-color 0.2s,
      color 0.2s;
  }

  .menu a:hover {
    background-color: #eaeaea;
  }

  /* 슬라이드 애니메이션 */
  .slide-enter-active,
  .slide-leave-active {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
