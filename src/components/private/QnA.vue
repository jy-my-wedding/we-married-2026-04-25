<script setup lang="ts">
  import Title from '@/components/private/Title.vue'
  import '@/assets/fonts.css'
  import { ref } from 'vue'

  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

  library.add(faAngleDown)

  const openIndexes = ref([])
  const qnaList = [
    {
      q: '서로의 첫인상은?',
      a: {
        groom: '누구지? 우리과인가?',
        bride: '참 해맑게 웃네',
      },
    },
    {
      q: '서로를 3단어로 표현하자면?',
      a: {
        groom: '말티즈, 지구력괴물, 서커스단장',
        bride: '게임충, 사고뭉치, 스윗코스프레남',
      },
    },
    {
      q: '최근에 “아, 진짜 오래 만났구나” 느꼈던 순간은?',
      a: {
        groom: '개떡같이 말해도 찰떡같이 알아들음.\n(가끔은 텔레파시 처럼 말하기도 전에 파악함)',
        bride:
          '20살때 준영이네 막내 동생을 만났었는데, 그때 막내 동생이 초등학교 6학년이였음,,,\n현재 군대도 제대한 다 큰 어른이되어서 진짜 오래 만났다고 생각함',
      },
    },
    {
      q: '오래 만나도 여전히 좋은 점은?',
      a: {
        groom: '매일 봐도 전혀 질리지 않고, 항상 날 웃게 만드는 재주가 있음.',
        bride: '아직도 준영이 놀리는게 재밋고, 준영이 개그가 취향 저격임',
      },
    },
    {
      q: '이사람 덕분에 달라진 내 모습은?',
      a: {
        groom: '공감하는 척, 눈치 보는 척이라도 함.',
        bride:
          '롤러코스터같던 감정기복이 조금 잔잔해짐. 뭔가 서로 닮아가는듯? \n근데 부작용으로 준영이는 조금 예민해짐;',
      },
    },
    {
      q: '결혼을 결심하게 된 이유는?',
      a: {
        groom:
          '단 한번의 헤어짐없이 오래 만나다 보니 1~2년 전부터 평생을 같이 할 수 있겠다 생각이 들기 시작함.',
        bride:
          '사실 20살때부터 너랑 30살에 결혼할거라고 했는데,, 그 이유는 기억이 안남\n 지금 이유를 뽑으라고 한다면 오래 사귀면서도 권태기 없이 늘 재밋게 지내서, 앞으로의 미래도 늘 재미있을거 같다고 생각함',
      },
    },
  ]

  const toggle = (index) => {
    if (openIndexes.value.includes(index)) {
      openIndexes.value = openIndexes.value.filter((i) => i !== index)
    } else {
      openIndexes.value.push(index)
    }
  }
</script>

<template>
  <Title>QnA</Title>
  <div class="qna">
    <div v-for="(item, index) in qnaList" :key="index" class="qna-item">
      <button class="question" @click="toggle(index)">
        <span class="q-text">Q. {{ item.q }}</span>
        <span class="arrow" :class="{ open: openIndexes.includes(index) }">
          <FontAwesomeIcon icon="fa-solid fa-angle-down"
        /></span>
      </button>

      <Transition name="slide">
        <div v-if="openIndexes.includes(index)" class="answer">
          <div class="answer-block groom">
            <div class="qbadge">신랑</div>
            <p>
              <div>A. </div><div>{{ item.a.groom }}</div>
            </p>
          </div>

          <div class="answer-block bride">
            <div class="qbadge">신부</div>
            <p>
              <div>A. </div><div>{{ item.a.bride }}</div>
            </p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style>
  .qna {
    margin-top: 20px;
  }

  .qna-item {
    border-radius: 14px;
    background: #fff;
    margin-bottom: 12px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  /* 질문 */
  .question {
    width: 100%;
    padding: 16px;
    background: none;
    border: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }

  .q-text {
    text-align: left;
    font-family: 'modu', sans-serif;
  }

  /* 화살표 */
  .arrow {
    transition: transform 0.25s ease;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  /* 답변 */
  .answer {
    padding: 14px 16px 18px;
    background-color: #fafafa;
  }

  .answer-block {
    margin-bottom: 12px;
  }

  .answer-block:last-child {
    margin-bottom: 0;
  }

  .answer-block p {
    margin-top: 6px;
    font-size: 13px;
    line-height: 1.6;
    white-space: pre-line;
    display: flex;
    gap: 10px;
  }

  /* 배지 */
  .qbadge {
    display: inline-block;
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 10px;
    color: #fff;
  }

  /* 신랑 */
  .answer-block.groom .qbadge {
    background-color: #4a6fa5;
  }

  /* 신부 */
  .answer-block.bride .qbadge {
    background-color: #a85b6b;
  }

  /* slide enter/leave 기본 */
  .slide-enter-active,
  .slide-leave-active {
    transition:
      max-height 0.35s ease,
      opacity 0.25s ease;
    overflow: hidden;
  }

  /* 닫힌 상태 */
  .slide-enter-from,
  .slide-leave-to {
    max-height: 0;
    opacity: 0;
  }

  /* 열린 상태 */
  .slide-enter-to,
  .slide-leave-from {
    max-height: 500px;
    opacity: 1;
  }
  .slide-enter-from {
    transform: translateY(-4px);
  }

  .slide-enter-to {
    transform: translateY(0);
  }
</style>
