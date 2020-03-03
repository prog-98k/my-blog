<template>
  <div class="item">
    <h2>
      <nuxt-link
        :to="{ name: 'article-details-id', params: { id: 21343433333 } }"
        target="_blank"
      >
        Taro Next 发布预览版：同时支持 React / Vue / Nerv
      </nuxt-link>
    </h2>
    <div class="info-box">
      <div class="tag-list">
        <el-tag size="small" type="success">小程序</el-tag>
        <el-tag size="small" type="success">前端</el-tag>
        <el-tag size="small" type="success">Taro</el-tag>
      </div>
      <div class="info">
        <span class="count">
          <i class="iconfont iconicon-test" />
          563215
        </span>
        <span class="time">
          <i class="iconfont iconriqi" />
          2月15日
        </span>
      </div>
    </div>
    <div class="cover">
      <img
        src="https://img.alicdn.com/imgextra/i4/724735359/O1CN018ueUbF1pST6S10qsy_!!724735359.jpg"
      />
    </div>
    <div class="content">
      自 Taro 2.0 起，我们将会启动对整个 Taro
      系统架构的革新，这次革新我们将其称之为 Taro Next。Taro Next
      革新完成之后，Taro 本身的拓展性、稳定性、可维护性都会大
      幅提高，相应地，使用 Taro
      的开发者也会获得更好的开发体验，降低更多开发成本和学习成本。<br /><br />
      我们目前已经完成了编译系统和小程序端的重构，通过 npm i -g @tarojs/cli@next
      安装 Taro CLI 预览（alpha）版之后，使用 taro init创建新项目即可体验 Taro
      Next 的新特性：
    </div>
    <div class="more-link">
      <nuxt-link to="/">
        <i class="iconfont iconxianshi" />
        查看全文
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  text-align: left;
  background-color: #f1f1f1;
  // box-shadow: 0 8px 22px 18px rgba(119, 103, 227, 0.12);
  box-shadow: 0 8px 22px 18px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 30px;
    line-height: 1;
    a {
      color: #364c5b;
      transition: all 0.5s;
      &:hover {
        color: #009a61;
      }
    }
  }
  .info-box {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    .info {
      margin-left: 20px;
      color: #999;
      span {
        margin-right: 10px;
        font-size: 14px;
        i {
          vertical-align: baseline;
        }
      }
    }
  }
  .cover {
    display: block;
    margin: 20px 0;
    text-align: center;
    img {
      width: 100%;
      height: auto;
    }
  }
  .content {
    color: #666;
    font-size: 16px;
  }
  .more-link {
    margin: 0 auto;
    margin-top: 30px;
    a {
      font-size: 14px;
      color: #37c090;
      &:hover {
        color: #009a61;
      }
    }
  }
}
</style>
