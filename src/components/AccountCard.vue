<script setup>
import People from '@/components/People.vue'
import profileImg from '@/assets/private_img/image.png'

const man = [
  {
    type: '신랑측',
    role: '아버지',
    name: '박승준',
    phone: '010-4536-3025',
    bank: '농협',
    account: '352-1733-2958-23',
    profile_img:profileImg,
  },
  {
    type: '신랑측',
    role: '어머니',
    name: '김미자',
    phone: '010-5493-3025',
    bank: '농협',
    account: '957-12-375313',
  },
  {
    type: '',
    role: '신랑',
    name: '박준영',
    phone: '010-4094-3541',
    bank: '농협',
    account: '901044-56-072991',
  },
]

const woman = [
    {
    type: '신부측',
    role: '아버지',
    name: '이승준',
    phone: '010-3399-7908',
    bank: '국민',
    account: '038701-04-577887',
  },
  {
        type: '신부측',
    role: '어머니',
    name: '강미숙',
    phone: '010-8982-9234',
    bank: '농협',
    account: '018-12-180860',
  },
  {
    type: '',
    role: '신부',
    name: '이명은',
    phone: '010-9908-9234',
    bank: '국민',
    account: '038701-04-476922',
  },
]
</script>

<template>
  <section class="contact-section">
    <h3 class="side-title">신랑측</h3>
    <People
      bgColor="#f0f8ff"
      v-for="person in man"
      :key="person.phone"
      v-bind="person"
    />
    <h3 class="side-title">신부측</h3>
    <People
      bgColor="#fff0f5"
      v-for="person in woman"
      :key="person.phone"
      v-bind="person"
    />
  </section>
</template>

<style scoped>
.contact-section {
  margin-top: 80px;
}

.side-title {
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
}
</style>