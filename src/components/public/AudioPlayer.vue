<template>
  <audio controls autoplay loop ref="audio">
    <source :src="springDaySoundSrc" />
  </audio>

  <button v-if="!playing" class="mbutton play-button" @click="play()">
    <font-awesome-icon icon="play" class="icon" />
  </button>
  <button v-else class="mbutton pause-button" @click="pause()">
    <font-awesome-icon icon="pause" class="icon" />
  </button>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
  import springDay from '@/assets/audio/minihouseracecodofficial-spring-day-no-copyright-music-148507.mp3'
  export default {
    mounted() {
      /* 
            자동 재생을 위한 유저 인터랙션 감지
        */
      this.onFirstUserAction = this.onFirstUserAction.bind(this)
      window.addEventListener('click', this.onFirstUserAction)
      window.addEventListener('keydown', this.onFirstUserAction)
      window.addEventListener('touchstart', this.onFirstUserAction)

      library.add(faPlay, faPause)
    },
    data() {
      return {
        springDaySoundSrc: springDay,
        autoPlayed: false,
        playing: false,
      }
    },
    methods: {
      play() {
        this.$refs.audio.play()
        this.playing = true
      },
      pause() {
        this.$refs.audio.pause()
        this.playing = false
      },
      onFirstUserAction() {
        if (!this.autoPlayed) {
          /* 
                    자동 재생 한번만 실행(추가 실행 필요없으므로 리스너 제거)
                */
          this.play()
          window.removeEventListener('click', this.onFirstUserAction)
          window.removeEventListener('keydown', this.onFirstUserAction)
          window.removeEventListener('touchstart', this.onFirstUserAction)
          window.removeEventListener('wheel', this.onFirstUserAction)
          window.removeEventListener('scroll', this.onFirstUserAction)
          this.autoPlayed = true
          this.playing = true
        }
      },
    },
  }
</script>

<style>
  audio {
    display: none;
  }
  .icon {
    color: #333;
  }

  .mbutton {
    background: rgba(255, 255, 255, 0.6); /* 반투명 */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(5px); /* 배경 살짝 흐림 */
    border: none;
    border-radius: 8px;
    color: white;
    padding: 13px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    position: fixed;
    z-index: 1000;
    top: 70px;
    left: 12px;
  }
</style>
