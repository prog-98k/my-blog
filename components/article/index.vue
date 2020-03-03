<template>
  <div class="article-log">
    <div class="title">技术Log</div>
    <div class="list-box">
      <Item v-for="item in [1, 3, 4]" :key="item" />
    </div>
  </div>
</template>

<script>
import Item from './item'
export default {
  components: {
    Item
  }
}
</script>

<style lang="scss" scoped>
.article-log {
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 25px 0;
  .title {
    display: block;
    font-weight: 500;
    font-size: 36px;
    color: #364c5b;
    position: relative;
  }
  .list-box {
    display: flex;
    margin: 0 auto;
    width: 880px;
    margin-top: 30px;
    flex-direction: column;
    .item {
      margin: 40px 0;
    }
  }
}
</style>
