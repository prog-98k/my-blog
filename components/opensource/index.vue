<template>
  <div class="open-source">
    <div class="title">我的开源</div>
    <div class="list-box">
      <div class="horizontal-container">
        <div ref="scroll" class="scroll-wrapper">
          <div class="scroll-content">
            <div class="scroll-item">
              <Item v-for="item in [1, 3, 4]" :key="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Item from './item'
export default {
  components: {
    Item
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
    window.onresize = () => {
      this.init()
    }
  },
  beforeDestroy() {
    this.bs.destroy()
  },
  methods: {
    init() {
      if (!this.bs) {
        this.bs = new BScroll(this.$refs.scroll, {
          scrollX: true,
          scrollY: false,
          startX: 0,
          probeType: 3,
          eventPassthrough: 'vertical'
        })
        this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
          console.log('done')
        })
      } else {
        const timer = setTimeout(() => {
          this.bs.refresh()
          clearTimeout(timer)
        }, 500)
      }
    },
    _registerHooks(hookNames, handler) {
      hookNames.forEach((name) => {
        this.bs.on(name, handler)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.open-source {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #ebeaf4;
  margin-top: 50px;
  padding: 25px 0;
  .title {
    display: block;
    font-weight: 500;
    font-size: 36px;
    color: #364c5b;
    position: relative;
  }
  .list-box {
    display: block;
    margin-top: 90px;
    .horizontal-container {
      .scroll-wrapper {
        width: 100%;
        margin: 0 auto;
        white-space: nowrap;
        .scroll-content {
          display: inline-block;
          .scroll-item {
            display: flex;
            flex-direction: row;
            & > .source-item {
              margin: 0 25px;
              width: 380px;
            }
          }
        }
      }
    }
  }
}
</style>
