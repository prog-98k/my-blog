<template>
  <div class="details-box">
    <div class="details">
      <div class="main-box">
        <div class="content-box">
          <h1 class="title">Docker安装ELK并实现JSON格式日志分析</h1>
          <div class="item-meta">
            <el-breadcrumb separator-class="iconfont icondian">
              <el-breadcrumb-item class="dock hidden-xs-only">
                <el-tag type="success">小程序</el-tag>
                <el-tag type="success">前端</el-tag>
                <el-tag type="success">Taro</el-tag>
              </el-breadcrumb-item>
              <el-breadcrumb-item class="browseNum">
                <i class="iconfont iconxianshi_huaban" />
                2521
              </el-breadcrumb-item>
              <el-breadcrumb-item class="createTime">
                <i class="iconfont iconriqi" />
                2 小时前
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div id="article-content" class="article-content">
            <!-- eslint-disable-next-line -->
            <div v-html="content" v-lazy-container="{ selector: 'img' }" @click="evClick"></div>
          </div>
        </div>
      </div>
      <div class="right-box hidden-sm-and-down">
        <toc el="#article-content" />
      </div>
      <el-image-viewer
        v-if="showViewer"
        :on-close="closeViewer"
        :url-list="[url]"
      />
    </div>
  </div>
</template>

<script>
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
import toc from '@/components/toc'
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  components: {
    ElImageViewer,
    toc
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(
      'https://api.it120.cc/59687f330fc816d635d00f2f3c596956/cms/news/detail?id=18602'
    )
    return { content: data.data.content }
  },
  data() {
    return {
      showViewer: false,
      url: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.content = this.letslazyload(this.content)
    })
  },
  methods: {
    evClick({ target }) {
      const imgName = target.nodeName.toUpperCase()
      if (imgName === 'IMG') {
        this.url = target.currentSrc
        this.showViewer = true
        this.toggleScroll(false)
      }
    },
    toggleScroll(action) {
      document.body.style.overflow = !action ? 'hidden' : ''
    },
    closeViewer() {
      this.showViewer = false
      this.toggleScroll(true)
    },
    letslazyload(contentp) {
      const regexp1 = new RegExp(/(<img )([^>]*)(src=")([^"]*")([^>]*)(>)/, 'g')
      contentp = contentp.replace(regexp1, (match, p1, p2, p3, p4, p5, p6) => {
        return p1 + p2 + 'data-src="' + p4 + p5 + p6
      })
      return contentp
    },
    preCode(contentp) {
      const regexp1 = new RegExp(/(<pre[^>]*)(>)/, 'g')
      contentp = contentp.replace(regexp1, (match, p1, p2) => {
        return (
          p1 +
          'style="overflow: auto; background-color: #f6f8fa; padding: 16px; line-height: 1.45; border-radius: 3px; font-size: 85%;"' +
          p2
        )
      })
      return contentp
    }
  }
}
</script>

<style lang="scss" scoped>
.details-box {
  background-color: #f9f9f9;
  padding-top: 20px;
  padding-bottom: 30px;
  .details {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: 1050px;
    .main-box {
      flex: auto;
      .content-box {
        background-color: #fff;
        box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.05);
        border-radius: 12px;
        padding: 40px 40px 24px 40px;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        .title {
          font-size: 30px;
          line-height: 42px;
          font-weight: 600;
        }
        .article-content {
          margin-top: 35px;
        }
      }
    }
    .right-box {
      flex: 0 0 255px;
      margin-left: 30px;
    }
  }
}
</style>

<style lang="scss">
.details {
  .content-box {
    .item-meta {
      margin-top: 15px;
      .el-breadcrumb__item {
        height: 20px;
        line-height: 20px;
        margin-bottom: 10px;
      }
      .el-breadcrumb__inner {
        color: #9199a1;
        &:hover {
          color: #9199a1;
        }
        .el-tag {
          height: 20px;
          line-height: 20px;
        }
        a {
          color: #9199a1;
          font-weight: normal;
        }
        i {
          vertical-align: bottom;
        }
      }
      .createTime {
        .el-breadcrumb__inner {
          color: #b7bfc7;
        }
      }
    }
  }
}
</style>
