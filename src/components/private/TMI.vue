<script setup lang="ts">
  import '@/assets/fonts.css'
  import Title from '@/components/private/Title.vue'
  import { computed } from 'vue'
  import img1 from '@/assets/private_img/we1.png'
  import img2 from '@/assets/private_img/we2.jpeg'

  const startDate = '2016-03-26'
  const daysTogether = computed(() => {
    const start = new Date(startDate)
    const today = new Date()

    start.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)

    const diffTime = today.getTime() - start.getTime()
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1
  })
</script>

<template>
  <Title>TMI 💬</Title>
  <div class="m_box">
    <br />
    <br />
    <div class="talk">여러분 혹시 저희가 <Br />얼마나 사귀었는지 아시나요?</div>
    <br />
    <br />
    <br />
    <br />
    <div class="img_div">
      <img :src="img1" class="img_card" />
      <img :src="img2" class="img_card" />
    </div>
    <div class="talk">{{ startDate }}부터 시작되어</div>
    <br />
    <div class="talk hilight">벌써 D+{{ daysTogether }} !!!</div>
    <br />
    <br />
    <div class="talk">오래 사귀었다 보니<br />다들 저희가 엄청 잘 맞을거라고 생각하시는데</div>
    <br />
    <br />
    <div class="talk hilight">사실 저희는 잘 안맞아요</div>
    <div class="talk">얼마나 안맞냐면,,,</div>
    <div class="talk">
      <table class="dif_table">
        <tr>
          <th></th>
          <th>준영</th>
          <th>명은</th>
        </tr>
        <tr>
          <td>MBTI</td>
          <td>ISTP</td>
          <td>ENFP</td>
        </tr>
        <tr>
          <td>활동유형</td>
          <td>집돌이</td>
          <td>바깥순이</td>
        </tr>
        <tr>
          <td>날씨</td>
          <td>더위에 약함</td>
          <td>추위에 약함</td>
        </tr>
        <tr>
          <td>찌개</td>
          <td>김치찌개파</td>
          <td>된장찌개파</td>
        </tr>
        <tr>
          <td>초콜릿</td>
          <td>좋아함</td>
          <td>별로;</td>
        </tr>
        <tr>
          <td>운동</td>
          <td>공놀이</td>
          <td>맨몸 운동</td>
        </tr>
        <tr>
          <td>보드게임</td>
          <td>뇌지컬</td>
          <td>피지컬</td>
        </tr>
        <tr>
          <td>샤프심</td>
          <td>HB</td>
          <td>B</td>
        </tr>
      </table>
    </div>
    <div class="talk">.<br />.<br />.</div>
  </div>
</template>

<style>
  .dday {
    font-size: 28px;
    font-weight: 700;
  }

  .m_box {
    text-align: center;
    margin-bottom: 30px;
  }
  .talk {
    text-align: center;
    font-family: 'modu', sans-serif;
    font-size: 19px;
    line-height: 1.6;
    margin: 20px 0;
  }
  .hilight {
    font-weight: bold;
    font-size: 30px;
  }
  .div_img {
    display: flex;
    gap: 12px;
  }
  .img_card {
    width: 100px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 8px;
  }
  .dif_table {
    margin: 20px auto;
    font-size: 13px;
    border-collapse: collapse;
    border: 1px solid #ccc;
  }
  .dif_table th,
  .dif_table td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
</style>
