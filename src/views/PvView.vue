<script setup>
import '@/assets/fonts.css'
import GoToMainBtn from '@/components/GoToMainBtn.vue';
import ourimg from '@/assets/private_img/image.png'
import Copyright from '@/components/Copyright.vue';
</script>

<template>
  <div class="invitation-wrapper">
    <div class="image_box">
        <img :src="ourimg" alt="test" class="img_1"/>
    </div>
    <div class="title">안녕하세요!</div>
    <div class="sub-title">여러분들은 신랑, 신부의 "소중한" 지인들만 받을 수 있는</div>
    <div class="sub-title">모바일 청첩장에 오신걸 환영합니다!</div>
    <GoToMainBtn />
    <Copyright />
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
  background: white;
  color: #333;
}
.title {
    font-family: 'modu', sans-serif;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    margin: 10px 0px;
}
.sub-title{
    font-family: 'modu', sans-serif;
    text-align: center;
    font-size: 23px;
}
.image_box{
    margin-top: 20px;
    text-align: center;
}
.img_1 {
    width: 70%;
}

</style>

