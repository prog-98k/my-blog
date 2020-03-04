<template>
  <el-container>
    <el-header height="auto" :class="[isShadow ? 'shadow' : '']">
      <Header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer height="auto">
      <Footer />
    </el-footer>
    <back-top />
  </el-container>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackTop from '@/components/Backtop'
export default {
  components: {
    Header,
    Footer,
    BackTop
  },
  computed: {
    isShadow() {
      return this.$store.state.page.isShadow
    }
  },
  mounted() {
    smoothscroll.polyfill()
  }
}
</script>

<style lang="scss">
.el-header {
  position: relative;
  z-index: 100;
  padding: 0;
  &.shadow {
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  }
}
.el-main {
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.el-footer {
  padding: 40px 0;
  border-top: 1px solid #e5e5e5;
  position: relative;
}
</style>
