<template>
  <div class="intro-card" :class="type">
    <div class="our_profile">
      <img :src="profileImg" alt="" />
    </div>

    <div class="content">
      <h3 class="our_name">
        <span class="color_gn">{{ badgeText }}</span> {{ name }}
      </h3>
      <p class="our_desc">
        <slot />
      </p>
    </div>
  </div>
</template>
<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    type: {
      type: String, // 'groom' | 'bride'
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
  })

  const badgeText = computed(() => (props.type === 'groom' ? '신랑' : '신부'))
</script>
<style>
  .intro-card {
    background: #fff;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
    width: 300px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    position: relative;
  }

  /* 프로필 */
  .our_profile {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
  }

  .our_profile img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    object-fit: cover;
  }

  /* 텍스트 */
  .our_name {
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .our_desc {
    text-align: center;
    font-size: 14px;
    line-height: 1.6;
    color: #555;
  }
  .color_gn {
    font-size: 14px;
  }
</style>
