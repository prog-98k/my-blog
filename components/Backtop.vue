<template>
  <div class="back-top" :class="[toTopShow ? 'show' : '']" @click="scrollToTop">
    <i class="iconfont icon4fanhuidingbucheng" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      toTopShow: false,
      scrollTop: 0
    }
  },
  mounted() {
    this.handleScroll()
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll, true)
    })
  },
  destroyed() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      if (this.scrollTop > 300) {
        this.toTopShow = true
      } else {
        this.toTopShow = false
      }
    },
    scrollToTop() {
      let timer = null
      const self = this
      window.cancelAnimationFrame(timer)
      timer = window.requestAnimationFrame(function fn() {
        if (self.scrollTop > 5000) {
          self.scrollTop -= 1000
          document.documentElement.scrollTop = document.body.scrollTop =
            self.scrollTop
          timer = window.requestAnimationFrame(fn)
        } else if (self.scrollTop > 1000 && self.scrollTop <= 5000) {
          self.scrollTop -= 500
          document.documentElement.scrollTop = document.body.scrollTop =
            self.scrollTop
          timer = window.requestAnimationFrame(fn)
        } else if (self.scrollTop > 200 && self.scrollTop <= 1000) {
          self.scrollTop -= 100
          document.documentElement.scrollTop = document.body.scrollTop =
            self.scrollTop
          timer = window.requestAnimationFrame(fn)
        } else if (self.scrollTop > 50 && self.scrollTop <= 200) {
          self.scrollTop -= 10
          document.documentElement.scrollTop = document.body.scrollTop =
            self.scrollTop
          timer = window.requestAnimationFrame(fn)
        } else if (self.scrollTop > 0 && self.scrollTop <= 50) {
          self.scrollTop -= 5
          document.documentElement.scrollTop = document.body.scrollTop =
            self.scrollTop
          timer = window.requestAnimationFrame(fn)
        } else {
          window.cancelAnimationFrame(timer)
          self.toTopShow = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.back-top {
  background-color: #fff;
  position: fixed;
  right: 50px;
  bottom: -40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 100;
  .el-icon-caret-top,
  i {
    color: #333;
    display: block;
    text-align: center;
    font-size: 30px;
    line-height: 50px;
  }
  &.show {
    opacity: 0.5;
    bottom: 50px;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
