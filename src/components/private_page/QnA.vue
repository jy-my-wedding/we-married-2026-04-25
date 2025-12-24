<script setup lang="ts">
  import Title from '@/components/private_page/Title.vue'
  import '@/assets/fonts.css'
  import { ref } from 'vue'

  const openIndexes = ref([])

  const qnaList = [
    {
      q: 'Q.서로가 처음 마음에 들었던 순간은?',
      a: {
        groom: '서로 타이밍을 기다리다 보니 10년이 훌쩍 지나갔습니다.',
        bride: '맞아요. 먼저 옵니다.',
      },
    },
    {
      q: 'Q.서로의 장점',
      a: {
        groom: '서로 타이밍을 기다리다 보니 10년이 훌쩍 지나갔습니다.',
        bride: '맞아요. 먼저 옵니다.',
      },
    },
    {
      q: 'Q.그렇다면 서로의 단점은?',
      a: {
        groom: '서로 타이밍을 기다리다 보니 10년이 훌쩍 지나갔습니다.',
        bride: '맞아요. 먼저 옵니다.',
      },
    },
    {
      q: 'Q.가장 많이 싸운 이유가 있다면?',
      a: {
        groom: '서로 타이밍을 기다리다 보니 10년이 훌쩍 지나갔습니다.',
        bride: '맞아요. 먼저 옵니다.',
      },
    },
    {
      q: 'Q.결혼을 앞둔 각오 한마디',
      a: {
        groom: '서로 타이밍을 기다리다 보니 10년이 훌쩍 지나갔습니다.',
        bride: '맞아요. 먼저 옵니다.',
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
        <span class="q-text">{{ item.q }}</span>
        <span class="arrow" :class="{ open: openIndexes.includes(index) }"> ⌄ </span>
      </button>

      <Transition name="slide">
        <div v-if="openIndexes.includes(index)" class="answer">
          <div class="answer-block groom">
            <div class="qbadge">신랑</div>
            <p>{{ item.a.groom }}</p>
          </div>

          <div class="answer-block bride">
            <div class="qbadge">신부</div>
            <p>{{ item.a.bride }}</p>
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
