<template>
  <div class="footer-warp">
    <div class="link-list">
      <nuxt-link to="/">交流合作</nuxt-link>
      <nuxt-link to="/article">技术log</nuxt-link>
      <nuxt-link to="/source">我的开源</nuxt-link>
      <a href="https://github.com/prog-98k" target="_blank">GitHub</a>
    </div>
    <div class="copy-right">
      <p>
        Copyright &copy; 2020 程序员98K All Rights Reserved
        &nbsp;冀ICP备&nbsp;20000200号-1
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-warp {
  text-align: center;
  a {
    text-decoration: none;
    color: #99a1a6;
    &:hover {
      color: #333;
    }
  }
  .link-list {
    a {
      margin: 0 10px;
    }
  }
  .copy-right {
    font-size: 12px;
    padding-left: 10px;
    margin-top: 15px;
    color: #99a1a6;
  }
}
</style>
