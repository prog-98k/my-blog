<template>
  <div class="sidebar-drawer">
    <div class="menu-mini" @click="drawer = true">
      <i class="iconfont iconcaidan" />
    </div>
    <el-drawer
      :visible.sync="drawer"
      :with-header="true"
      :modal="false"
      custom-class="sidebar-box"
      size="55%"
      direction="ltr"
    >
      <el-form>
        <el-form-item>
          <el-input
            ref="sidebarsearch"
            v-model="search_key"
            :clearable="true"
            type="search"
            aria-label="搜索"
            placeholder="搜索技术Log"
            prefix-icon="el-icon-search"
          />
        </el-form-item>
      </el-form>
      <el-menu
        :default-active="$route.path"
        class="sidebar-menu"
        active-text-color="#009a61"
        text-color="#4D555D"
        @select="selectedSidebar"
      >
        <el-menu-item
          v-for="(item, index) in menulist"
          :key="index"
          class="item"
          :index="item.href"
        >
          <nuxt-link class="link" :to="item.href">
            {{ item.name }}
          </nuxt-link>
        </el-menu-item>
        <el-menu-item class="item" index="">
          <a class="link" href="https://github.com/prog-98k" target="_blank">
            Github
          </a>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    menulist: {
      type: Array,
      default: () => {}
    }
  },
  data: () => ({
    search_key: '',
    drawer: false
  }),
  methods: {
    selectedSidebar() {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-drawer {
  flex: auto;
  justify-content: flex-end;
  display: none;
  padding-right: 20px;
  .menu-mini {
    display: flex;
    height: 70px;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: #009a61;
    }
  }
}
</style>

<style lang="scss">
.sidebar-box {
  padding: 20px;
  outline: none;
  background-color: #f9f9f9;
  header {
    opacity: 0;
    height: 1px;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .el-input {
    input {
      border-radius: 20px;
    }
  }
  .sidebar-menu {
    display: flex;
    border: 0;
    flex-direction: column;
    background-color: transparent;
    .item {
      height: 40px;
      line-height: 40px;
      display: block;
      border: 0;
      width: 100%;
      outline: none;
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin: 5px 0;
      &.submenu {
        padding-right: 10px;
        .el-dropdown {
          font-size: 16px;
          line-height: normal;
          display: inline-flex;
        }
        span {
          color: #333;
          .arrow-icon {
            font-size: 12px;
          }
          a {
            vertical-align: baseline;
          }
          &:hover {
            color: #000;
          }
        }
      }
      a.link {
        text-decoration: none;
        font-size: 16px;
        display: block;
        color: #000;
        padding-left: 20px;
        transition: all 0.2s;
        border-bottom: 2px solid transparent;
        border-radius: 12px;
        &:hover {
          color: #00c58e;
          border-color: #00c58e;
        }
      }
      &.is-active {
        a {
          color: #fff;
          background-color: #00c58e;
          &:hover {
            color: #fff;
          }
        }
      }
      &:hover {
        background: none;
      }
    }
  }
}
</style>
