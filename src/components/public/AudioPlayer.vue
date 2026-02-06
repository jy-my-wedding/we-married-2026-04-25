<template>
  <audio ref="audio" loop>
    <source :src="music" type="audio/mpeg" />
  </audio>

  <button v-if="!playing" class="mbutton play-button" @click="play">
    <font-awesome-icon icon="play" class="icon" />
  </button>
  <button v-else class="mbutton pause-button" @click="pause">
    <font-awesome-icon icon="pause" class="icon" />
  </button>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
  import springDay from '@/assets/audio/mainmusic.mp3'
  import pvmusic from '@/assets/audio/pvmusic.mp3'

  library.add(faPlay, faPause)

  export default {
    props: {
      type: {
        type: String, // 'pv' or 'main'
        default: 'main',
      },
    },

    data() {
      return {
        autoPlayed: false,
        playing: false,
      }
    },

    computed: {
      // 🎵 타입에 따라 음악 선택
      music() {
        return this.type === 'pv' ? pvmusic : springDay
      },
    },

    mounted() {
      // 자동 재생을 위한 유저 인터랙션 감지
      this.onFirstUserAction = this.onFirstUserAction.bind(this)

      window.addEventListener('click', this.onFirstUserAction)
      window.addEventListener('keydown', this.onFirstUserAction)
      window.addEventListener('touchstart', this.onFirstUserAction)
    },

    beforeUnmount() {
      window.removeEventListener('click', this.onFirstUserAction)
      window.removeEventListener('keydown', this.onFirstUserAction)
      window.removeEventListener('touchstart', this.onFirstUserAction)
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
          this.play()

          window.removeEventListener('click', this.onFirstUserAction)
          window.removeEventListener('keydown', this.onFirstUserAction)
          window.removeEventListener('touchstart', this.onFirstUserAction)

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
    backdrop-filter: blur(5px);
    border: none;
    border-radius: 8px;
    padding: 13px;
    font-size: 16px;
    cursor: pointer;
    position: fixed;
    z-index: 1000;
    top: 70px;
    left: 12px;
  }
</style>
