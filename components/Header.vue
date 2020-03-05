<template>
  <div class="default-header">
    <div
      class="top-search-trigger hidden-sm-and-down"
      :class="[topsearch ? 'hide' : '']"
      @mouseover="searchTrigger"
    >
      搜索技术Log
    </div>
    <div class="top-search" :class="[topsearch ? 'show' : '']">
      <el-input
        ref="topsearch"
        v-model="search_key"
        :clearable="true"
        type="search"
        class="input"
        placeholder="搜索你想要的内容……"
        @blur="searchBlur"
      />
      <div class="search-go" @click="goSearch">
        <i class="iconfont iconsousuo" />
      </div>
      <div
        class="search-close"
        :class="[search_key !== '' ? 'show' : '']"
        @click="searchClose"
      >
        <i class="iconfont iconguanbi" />
      </div>
    </div>
    <div class="box">
      <div class="logo">
        <h3>
          <nuxt-link to="/">程序员98K</nuxt-link>
        </h3>
      </div>
      <el-menu
        :default-active="$route.path"
        class="top-menu hidden-xs-only"
        mode="horizontal"
        active-text-color="#009a61"
        text-color="#4D555D"
      >
        <el-menu-item class="menu-item" index="/article">
          <nuxt-link class="menu-link" to="/article">技术log</nuxt-link>
        </el-menu-item>
        <el-menu-item class="menu-item" index="/article">
          <nuxt-link class="menu-link" to="/source">我的开源</nuxt-link>
        </el-menu-item>
      </el-menu>
      <div class="menu-mini" @click="drawer = true">
        <i class="iconfont iconcaidan" />
      </div>
      <div class="user-box">
        <div class="no-login">
          <span>注册</span><i class="iconfont icondian" /><span>登录</span>
        </div>
      </div>
    </div>
    <el-drawer
      :visible.sync="drawer"
      :with-header="true"
      :modal="false"
      custom-class="sidebar"
      size="55%"
      direction="ltr"
    >
      <el-form>
        <el-form-item>
          <el-input
            ref="sidebarsearch"
            v-model="sidebarSearch"
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
        <el-menu-item class="item" index="/article">
          <nuxt-link class="link" to="/article">技术log</nuxt-link>
        </el-menu-item>
        <el-menu-item class="item" index="/source">
          <nuxt-link class="link" to="/source">我的开源</nuxt-link>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    search_key: '',
    sidebarSearch: '',
    topsearch: false,
    drawer: false
  }),
  methods: {
    sidebarForm() {
      console.log('focus')
    },
    goSearch(ev) {
      console.log('goSearch')
    },
    searchBlur() {
      if (this.search_key === '') {
        this.topsearch = false
      }
    },
    searchClose() {
      this.topsearch = false
      this.search_key = ''
    },
    searchTrigger() {
      this.topsearch = true
      this.$refs.topsearch.focus()
    },
    selectedSidebar() {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss">
.default-header {
  max-width: 1336px;
  margin: 0 auto;
  position: relative;
  .sidebar {
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
  .top-search-trigger {
    position: absolute;
    top: 0;
    left: 50%;
    width: 249px;
    height: 47px;
    margin-left: -124px;
    z-index: 1000;
    background-image: url(/images/top-search-bg.png);
    background-repeat: no-repeat;
    background-position: top center;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 47px;
    font-weight: 700;
    user-select: none;
    opacity: 1;
    transition: 0.2s;
    &.hide {
      opacity: 0;
    }
  }
  .top-search {
    position: fixed;
    top: 0;
    left: 50%;
    width: 608px;
    height: 63px;
    margin-left: -304px;
    z-index: 1000;
    background-color: #f1f1f1;
    border: 2px solid #e5e5e5;
    border-radius: 15px;
    box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.1);
    transition: 0.2s;
    transform: translateY(-125%);
    input {
      height: 59px;
      width: 90%;
      border: 0;
      background-color: transparent;
      font-size: 18px;
    }
    .search-go {
      position: absolute;
      right: 15px;
      top: 10px;
      cursor: pointer;
      i {
        font-size: 32px;
      }
      &:hover {
        i {
          color: #00c58e;
        }
      }
    }
    .search-close {
      position: absolute;
      right: -10px;
      top: -10px;
      background-color: #000;
      color: #fff;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      text-align: center;
      cursor: pointer;
      visibility: hidden;
      i {
        font-size: 9px;
      }
      &.show {
        visibility: visible;
      }
    }
    &.show {
      transform: translateY(25%);
    }
  }
  .box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    .logo {
      height: 70px;
      align-items: center;
      display: inline-block;
      line-height: 70px;
      padding-left: 20px;
      img {
        max-height: 50px;
      }
      h3 {
        font-size: 24px;
        font-weight: normal;
        a {
          color: #000;
          &:hover {
            color: #00c58e;
          }
        }
      }
    }
    .top-menu {
      display: flex;
      flex: auto;
      justify-content: flex-end;
      border: 0;
      height: 70px;
      overflow: hidden;
      background-color: transparent;
      i {
        color: #000;
      }
      .menu-item {
        height: 70px;
        line-height: 70px;
        display: flex;
        border: 0;
        align-items: center;
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
        a.menu-link {
          text-decoration: none;
          font-size: 16px;
          display: block;
          color: #000;
          &:hover {
            color: #00c58e;
          }
        }
        &.is-active {
          a {
            &:hover {
              color: #009a61;
            }
          }
        }
        &:hover {
          background: none;
        }
      }
    }
    .menu-mini {
      height: 70px;
      display: none;
      align-items: center;
      cursor: pointer;
      flex: auto;
      justify-content: flex-end;
      &:hover {
        color: #009a61;
      }
    }
    .user-box {
      display: flex;
      color: #000;
      font-size: 16px;
      align-items: center;
      padding: 0 20px;
      height: 70px;
      order: 2;
      span {
        cursor: pointer;
        color: #000;
        &:hover {
          color: #009a61;
        }
      }
    }
  }
}
.header-menu-dropdown-item {
  a {
    text-decoration: none;
    font-size: 14px;
    display: block;
    color: #4d555d;
  }
}
</style>
