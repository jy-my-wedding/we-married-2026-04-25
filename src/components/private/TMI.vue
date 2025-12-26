<script setup lang="ts">
  import '@/assets/fonts.css'
  import Title from '@/components/private/Title.vue'
  import { computed } from 'vue'
  import img1 from '@/assets/private_img/we1.png'
  import img2 from '@/assets/private_img/we2.jpeg'
  import img3 from '@/assets/private_img/w3.png'

  import nimg1 from '@/assets/private_img/t1.jpeg'
  import nimg2 from '@/assets/private_img/t2.jpeg'
  import nimg3 from '@/assets/private_img/t3.jpeg'
  import nimg4 from '@/assets/private_img/t4.jpeg'
  import nimg5 from '@/assets/private_img/t5.jpeg'
  import nimg6 from '@/assets/private_img/t6.jpeg'

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
      <img :src="img3" class="img_card" />
    </div>
    <div class="talk">{{ startDate }}부터 시작되어</div>
    <br />
    <div class="talk hilight">벌써 D+{{ daysTogether }} !!!</div>
    <br />
    <br />
    <div class="talk">오래 사귀었다 보니<br />다들 저희가 엄청 잘 맞을거라고 생각하시는데</div>
    <br />
    <br />
    <div class="talk hilight"><span>사실 저희는 잘 안맞아요</span></div>
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
          <td>안좋아함</td>
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
    <div class="talk">
      그런데<br />
      어떻게 아직까지 잘 사귀고 있냐구요?
    </div>
    <br />
    <br />
    <br />
    <div class="talk">사실 저희도 모르겠어요ㅋ</div>
    <br />
    <br />
    <div class="talk">
      정확한 이유는 모르겠지만,<br />
      안 맞는 점보다<br />
    </div>
    <div class="img_div">
      <img :src="nimg1" class="img_card" />
      <img :src="nimg2" class="img_card" />
      <img :src="nimg3" class="img_card" />
    </div>
    <div class="img_div">
      <img :src="nimg4" class="img_card" />
      <img :src="nimg5" class="img_card" />
      <img :src="nimg6" class="img_card" />
    </div>
    <div class="talk">
      같이 웃는 순간이 훨씬 많았습니다.<br />
      <div class="talk">.<br />.<br />.</div>
      <div class="talk">.<br />.<br />.</div>
      그래서, <span class="hilight">결혼하려고 합니다!</span><br /><br />

      오랜 시간 옆에서 봐주고<br />
      응원해 준 분들께<br />
      이 소식을 전할 수 있어 기쁩니다<br /><br /><br />
      가능하시다면,<br />
      그날의 자리를 함께해 주시면<br />
      더없이 기쁠 것 같습니다<br /><br /><br />
    </div>
    <div class="talk hilight">저희 잘 살아보겠습니다! 감사합니다!<br /><br /></div>
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
    margin: 0px 2px;
  }
  .dif_table {
    width: 280px;
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
