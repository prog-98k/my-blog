<template>
  <div id="toc" class="toc" :class="[fixed ? 'fixed' : '']">
    <div class="toc-heading">目录</div>
    <ul class="catalog-list" :style="{ height: fixedHeight + 'px' }">
      <CataLogItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :fn="catalogChange"
        :curid="current_id"
      />
    </ul>
  </div>
</template>

<script>
import toc from './tocfn'
import CataLogItem from './catalogitem'
export default {
  components: {
    CataLogItem
  },
  props: {
    el: {
      type: String,
      default: '#article-content'
    }
  },
  data() {
    return {
      /**
       * 存在层级关系的目录列表
       */
      list: [],
      /**
       * 无层级关系
       * 方便进行遍历定位
       */
      cataloglist: [],
      /**
       * 当前章节ID
       */
      current_id: 0,
      /**
       * 是否固定在顶部
       */
      fixed: false,
      /**
       * 目录总体高度
       * 高度取决于窗口高度 - 90
       */
      fixedHeight: 0,
      /**
       * 目录距离顶部高度
       */
      tocTop: 0
    }
  },
  mounted() {
    const { levels, noLevels } = toc(this.el)
    this.list = levels
    this.cataloglist = noLevels
    this.$nextTick(() => {
      // 获取目录大纲距离顶部距离
      // +90是为了修补外层与顶部导航的顶部间距与顶部导航的高度
      // 20为外层的顶部间距，70为顶部导航高度
      this.tocTop = document.querySelector('#toc').offsetTop + 90

      // 初始化下当前章节位置
      // 防止页面滚动到其他位置后刷新造成没有初始化
      this.follow()
      window.addEventListener('scroll', this.follow, true)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.follow, true)
  },
  methods: {
    catalogChange(id, el) {
      if (id !== this.current_id) this.goTo(el.anchor)
      this.current_id = id
    },
    goTo(anchor) {
      const top = this.getAnchorTop(anchor)
      document.documentElement.scrollTop = top
    },
    follow() {
      const scrollTop = document.documentElement.scrollTop
      const cataloglist = this.cataloglist
      // let currentId = cataloglist[cataloglist.length - 1].id
      let currentId = cataloglist[0].id
      this.tocFollow(scrollTop)
      cataloglist.some((item, index) => {
        if (cataloglist.length > index + 1) {
          const curAnchorTop = this.getAnchorTop(item.anchor)
          const nextAnchorTop = this.getAnchorTop(cataloglist[index + 1].anchor)
          if (scrollTop >= curAnchorTop && scrollTop < nextAnchorTop) {
            currentId = item.id
            return true
          }
        }
      })
      this.current_id = currentId
      this.catalogScroll()
    },
    // 获取文章里章节距离顶部距离
    getAnchorTop(id) {
      return document.querySelector(`#${id}`).offsetTop + 90
    },
    // 目录大纲跟随
    // 滚动超过目录大纲后，会自动吸顶跟随
    tocFollow(scrollTop) {
      const tocTop = this.tocTop
      const footerTop = this.getFooterScroll()
      // 计算底部是否出现在可视窗口中
      // 如果出现在窗口里，目录就取消悬浮
      const isFooter = footerTop > scrollTop ? 0 : 1
      if (scrollTop >= tocTop && !isFooter) {
        this.fixed = true
      } else {
        this.fixed = false
      }
      this.fixedHeight = document.documentElement.clientHeight - 90
    },
    // 目录内自动滚动，定位到内容当前看到的章节
    catalogScroll() {
      const count = this.current_id
      if (count > 3) {
        const top = count * 32
        // console.log(count)
        this.$el.querySelector('.catalog-list').scrollTop = top
      } else {
        this.$el.querySelector('.catalog-list').scrollTop = 0
      }
    },
    getFooterScroll() {
      const top = document.querySelector('.el-footer').offsetTop
      return top - document.documentElement.clientHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.toc {
  position: relative;
  width: 255px;
  &.fixed {
    position: fixed;
    top: 0;
    // width: inherit;
  }
  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #ddd;
    opacity: 0.5;
  }
  ul,
  li,
  /deep/ ul,
  /deep/ li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .toc-heading {
    user-select: none;
    font-weight: 500;
    font-size: 16px;
    padding: 8px 12px;
    padding-left: 15px;
  }
  .catalog-list {
    position: relative;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  /deep/ .catalog-item-title {
    display: flex;
    flex-direction: row;
    padding: 6px 0 6px 15px;
    color: #000;
    cursor: pointer;
    position: relative;
    font-size: 14px;
    border-left: 2px solid transparent;
    border-radius: 0 5px 5px 0;
    span {
      position: relative;
      display: inline-flex;
      &.dot {
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -3px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #000;
        }
      }
      &.text {
        a {
          color: inherit;
          padding-left: 15px;
        }
      }
    }
    &:hover {
      background-color: #ebedef;
    }
    &.active {
      background-color: #f3f3f3;
      border-left: 2px solid #009a61;
      span {
        color: #009a61;
        &:after {
          background-color: #009a61;
        }
      }
    }
  }
}
</style>
