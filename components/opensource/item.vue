<template>
  <nuxt-link
    class="source-item"
    :to="{ name: 'source-details-id', params: { id: 21343433333 } }"
    target="_blank"
  >
    <div class="info">
      <div class="info-tit">
        <div
          class="icon"
          style="background-image:url(https://opensource.tencent.com/img/Tars.png)"
        ></div>
        <h4>Open-Shop</h4>
      </div>
      <p>基于SpringBoot + Vue + Element UI的前后端分离权限管理系统</p>
      <div class="tag-list">
        <el-tag effect="dark" size="small">uniapp</el-tag>
        <el-tag effect="dark" size="small">Spring boot</el-tag>
      </div>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.source-item {
  text-align: left;
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
  border-radius: 10px;
  position: relative;
  padding: 15px;
  padding-bottom: 30px;
  padding-top: 20px;
  box-shadow: 0 2px 12px 2px rgba(119, 103, 227, 0.2);
  transition: all 0.6s;
  &:hover {
    box-shadow: 4px 4px 12px 2px rgba(65, 192, 144, 0.3);
  }
  .info {
    flex: 1;
    padding-left: 20px;
    .info-tit {
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon {
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 48px 48px;
        width: 48px;
        height: 48px;
        border-radius: 8px;
        margin-right: 15px;
        background-color: #fff;
        &::before {
          content: ' ';
          width: 100%;
          height: 100%;
        }
      }
      h4 {
        font-size: 22px;
        color: #364c5b;
        font-weight: normal;
        padding: 10px 0;
      }
    }
    p {
      font-size: 14px;
      color: #666;
      line-height: 1.3;
      margin: 8px 0;
      overflow: hidden;
      white-space: normal;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 40px;
    }
  }
}
</style>
