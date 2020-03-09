<template>
  <div class="details-box">
    <div class="source_detail">
      <!-- <el-image
        class="image"
        src="//img.alicdn.com/imgextra/i4/724735359/O1CN01MycpKk1pST6PeGeHC_!!724735359.jpg"
        fit="cover"
        lazy
      /> -->
      <div class="title">Open-Shop</div>
      <div class="content">
        Open-shop是一套完全开源的微信小程序商场系统，真正前后台全部开源
      </div>
      <div class="art-list">
        <el-tag type="success">uni-app</el-tag>
        <el-tag type="success">Vue</el-tag>
        <el-tag type="success">PHP</el-tag>
        <el-tag type="success">Swoole</el-tag>
        <el-tag type="success">Redis</el-tag>
        <el-tag type="success">Mysql</el-tag>
      </div>
      <div class="links">
        <a href="javascript:void(0)" class="button" @click.prevent="scrollGoto">
          <i class="iconfont iconxiangmu" />
          项目介绍
        </a>
        <a href="#" class="button2">
          <i class="iconfont iconGitHub" />
          Github
        </a>
      </div>
    </div>
    <!-- eslint-disable-next-line -->
    <div class="article-content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(
      'https://api.it120.cc/59687f330fc816d635d00f2f3c596956/cms/news/detail?id=24193'
    )
    return { content: data.data.content }
  },
  methods: {
    scrollGoto() {
      this.$nextTick(() => {
        const label = 'article-content'
        const element = document.querySelector(`.${label}`)
        const top = element.offsetTop
        window.scroll({ top, behavior: 'smooth' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.details-box {
  background-color: #f9f9f9;
  padding-bottom: 30px;
  .source_detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: calc(100vh - 70px);
    .image {
      margin: 0 auto;
      width: 200px;
      height: 330px;
      border-radius: 10px;
      box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.05);
    }
    .title {
      font-size: 100px;
      font-weight: 300;
      margin-bottom: 10px;
      color: #35495e;
      letter-spacing: 1px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .content {
      font-weight: 300;
      font-size: 32px;
      color: #526488;
      word-spacing: 5px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      word-wrap: break-word;
      padding: 10px;
      max-width: 1050px;
    }
    .art-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 20px 0;
      align-items: center;
      justify-content: center;
      align-content: center;
      .el-tag {
        margin: 5px;
      }
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
  .article-content {
    width: 1050px;
    margin: 0 auto;
    overflow: hidden;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
  }
}
</style>

<style lang="scss">
.details-box {
  .article-content {
    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
