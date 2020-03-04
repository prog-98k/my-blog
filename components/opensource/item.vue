<template>
  <nuxt-link to="/" class="source-item">
    <div class="image">
      <div class="pic">
        <el-image
          style="width: 100%; height: 100%"
          src="https://img.alicdn.com/imgextra/i4/724735359/O1CN01MycpKk1pST6PeGeHC_!!724735359.jpg"
          fit="cover"
          lazy
        />
      </div>
    </div>
    <div class="info">
      <h4>项目名称</h4>
      <p>适得府君书打火机返回水水电费电费红水电</p>
      <div class="tag-list">
        <el-tag effect="dark" size="small">uniapp</el-tag>
        <el-tag effect="dark" size="small">Java Spring boot</el-tag>
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
  border-radius: 15px;
  position: relative;
  padding: 15px;
  padding-bottom: 30px;
  padding-top: 30px;
  box-shadow: 0 2px 12px 2px rgba(119, 103, 227, 0.2);
  transition: all 0.6s;
  &:hover {
    box-shadow: 4px 4px 12px 2px rgba(65, 192, 144, 0.3);
  }
  .image {
    flex: 0 0 35%;
    position: relative;
    .pic {
      position: absolute;
      left: 0;
      top: -80%;
      right: 0;
      bottom: -10px;
      background-color: #37c090;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.2);
      border: 1px solid #e5e5e5;
    }
  }
  .info {
    flex: 0 0 65%;
    padding-left: 20px;
    // overflow: hidden;
    h4 {
      font-size: 24px;
      color: #364c5b;
    }
    p {
      font-size: 14px;
      color: #666;
      line-height: 1.3;
      padding: 5px 0 8px 0;
      overflow: hidden;
      white-space: normal;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
