<template>
  <div class="article-list">
    <div class="list-box">
      <Item v-for="item in list" :key="item" />
    </div>
    <span v-if="isloading" class="loadtip">
      <img src="/loading/1.svg" />
      加载中...
    </span>
    <span v-if="noMore" class="no-more">Sorry 没有更多了</span>
  </div>
</template>

<script>
import Item from '@/components/article/item'
export default {
  components: {
    Item
  },
  data() {
    return {
      list: [1],
      isloading: false,
      total: 10
    }
  },
  computed: {
    noMore() {
      return this.list.length >= this.total
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.loadMore)
    })
  },
  destroyed() {
    window.addEventListener('scroll', this.loadMore)
  },
  methods: {
    loadMore() {
      const innerHeight = window.innerHeight
      const scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop

      if (
        scrollTop + innerHeight >= document.body.offsetHeight - 150 &&
        !this.noMore
      ) {
        if (this.isloading === false) {
          this.isloading = true
          setTimeout(() => {
            const count = this.list.length + 1
            for (let i = count; i < count + 5; i++) {
              this.list.push(i)
            }
            this.isloading = false
            console.log(this.list)
          }, 2000)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 25px 0;
  .list-box {
    display: flex;
    margin: 0 auto;
    width: 880px;
    flex-direction: column;
    .item {
      margin: 40px 0;
    }
  }
  .loadtip {
    font-size: 16px;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 10px;
    }
  }
  .no-more {
    font-size: 16px;
    color: #999;
  }
}
</style>
