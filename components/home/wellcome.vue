<template>
  <div class="wellcome">
    <div>
      <el-image :src="'/images/' + logoImage" class="cover-logo" lazy />
      <h1 class="title">
        ><span class="flicker">_</span>
        程序员98K
      </h1>
      <h2 class="subtitle">
        分享记录日常技术问题
      </h2>
      <div class="links">
        <nuxt-link v-slot="{ href }" to="/article">
          <a :href="href" class="button" @click.prevent="scrollGoto('log')">
            <i class="iconfont iconrizhi" />
            技术log
          </a>
        </nuxt-link>
        <nuxt-link v-slot="{ href }" to="/source">
          <a :href="href" class="button2" @click.prevent="scrollGoto('source')">
            <i class="iconfont iconmianfeikaiyuanDZ" />
            我的开源
          </a>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    logoImageSrc: [
      'logo-image-1.png',
      'logo-image-2.png',
      'logo-image-3.png',
      'logo-image-4.png',
      'logo-image-5.png'
    ]
  }),
  computed: {
    logoImage() {
      return this.logoImageSrc[(Math.random() * this.logoImageSrc.length) | 0]
    }
  },
  methods: {
    scrollGoto(name) {
      this.$nextTick(() => {
        const label = name === 'log' ? 'article-log' : 'open-source'
        const element = document.querySelector(`.${label}`)
        const top = element.offsetTop
        window.scroll({ top, behavior: 'smooth' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wellcome {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -70px;
  .title {
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
    .flicker {
      animation: flicker 0.6s infinite;
    }
  }
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .links {
    padding-top: 30px;
    .button,
    .button2 {
      font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      color: #fff;
      padding: 12px 25px;
      font-weight: 500;
      border-radius: 5px;
      background-color: #00c58e;
      font-size: 18px;
      margin: 0 10px;
      i {
        font-size: 20px;
        vertical-align: bottom;
      }
      &:hover {
        background-color: #009a61;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
    .button2 {
      color: #2f495e;
      background-color: #edf2f7;
      i {
        font-size: 22px;
      }
      &:hover {
        background-color: #e2e8f0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}
@keyframes flicker {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
