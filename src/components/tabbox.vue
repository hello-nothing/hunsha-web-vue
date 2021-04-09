<template>
  <div class="tab-container">
    <div class="tab-content app-box">
      <!-- <div class="tab-title">毕设设计——婚纱</div> -->
      <div class="app-button" @click="clickAppTab">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="right-box">
        <div class="tab-box">
          <div
            class="tab-list"
            :class="{ tabActive: selectIndex === index }"
            @click="tabSelect(item, index)"
            v-for="(item, index) in tabList"
            :key="index"
          >
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
    <el-backtop></el-backtop>
  </div>
</template>
<script>
export default {
  name: "tab",
  data() {
    return {
      tabList: [
        {
          name: "首页",
          key: 0,
          url: "/"
        },
        {
          name: "优秀作品",
          key: 1,
          url: "/hotList"
        },
        {
          name: "优秀摄影师",
          key: 2,
          url: "/peopleList"
        },
        {
          name: "优惠活动",
          key: 3,
          url: "/activityList"
        },
        {
          name: "联系我们",
          key: 4,
          url: "/contactUs"
        }
      ],
      selectIndex: 0,
      appTab: false
    };
  },
  created() {
    const name = this.$route.name;
    switch (name) {
      case "/":
        this.selectIndex = 0;
        break;
      case "hotList":
        this.selectIndex = 1;
        break;
      case "peopleList":
        this.selectIndex = 2;
        break;
      case "clothesList":
        this.selectIndex = 3;
        break;
      case "contactUs":
        this.selectIndex = 4;
        break;
    }
  },
  methods: {
    tabSelect(item, index) {
      this.selectIndex = index;
      this.$router.push(item.url);
    },
    clickAppTab() {
      this.appTab = !this.appTab;
    }
  }
};
</script>
<style scoped lang="scss">
.tab-container {
  /deep/ {
    .el-backtop {
      color: #999;
      border-radius: 0;
    }
  }
}
.tab-content {
  position: fixed;
  z-index: 99999;
  width: calc(100% - 60px);
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: 24px 30px;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  .tab-title {
    font-size: 30px;
    font-weight: bold;
    line-height: 58px;
  }
  .right-box {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex: 1;
    font-weight: bold;
    font-size: 18px;
  }
  .ch-text {
    position: relative;
    width: 100px;
    line-height: 58px;
    text-align: center;
    cursor: pointer;
    span {
      position: relative;
      z-index: 4;
    }
    &::before {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #5d9296;
      content: "";
    }
    &::after {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      content: "";
      transition: all 1s;
    }
    &:hover {
      color: #ffffff;
      &::after {
        width: 0;
        height: 0;
        left: 50%;
        top: 50%;
        background-color: #5d9296;
      }
    }
  }
  .tab-box {
    display: flex;
    .tab-list {
      position: relative;
      margin: 0 20px;
      line-height: 58px;
      cursor: pointer;
      span {
        position: relative;
        &::after {
          position: absolute;
          top: -19px;
          left: 50%;
          transform: translateX(-50%);
          width: 7px;
          height: 8px;
          background-color: #5d9296;
          content: "";
          border-radius: 50px;
          opacity: 0;
        }
      }
      &::after {
        position: absolute;
        right: 0;
        width: 7px;
        height: 8px;
        margin-right: -10px;
        background-color: #5d9296;
        content: "";
        border-radius: 50px;
        transform: translateY(0px);
        transition: all 900ms ease;
        opacity: 0;
      }
      &::before {
        position: absolute;
        left: 0;
        width: 7px;
        height: 8px;
        margin-left: -10px;
        background-color: #5d9296;
        content: "";
        border-radius: 50px;
        transform: translateY(0px);
        transition: all 900ms ease;
        opacity: 0;
      }
      &:hover {
        color: #5d9296;
        &::after {
          right: 40%;
          opacity: 1;
        }
        &::before {
          left: 40%;
          opacity: 1;
        }
        span::after {
          opacity: 1;
        }
      }
      &:nth-child(2):hover {
        .product-box {
          display: block;
          color: black;
        }
      }
    }
    .tabActive {
      color: #5d9296;
      &::after {
        right: 40%;
        opacity: 1;
      }
      &::before {
        left: 40%;
        opacity: 1;
      }
      span::after {
        opacity: 1;
      }
    }
  }
  .product-box {
    display: none;
    position: absolute;
    width: 360px;
    padding: 8px 0;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .item-product {
    padding: 0 20px;
    font-size: 16px;
    font-weight: normal;
    line-height: 50px;
    &:hover {
      color: #ffffff;
      background: #5d9296;
    }
  }
  .app-button {
    display: none;
    width: 22px;
    padding: 10px;
    font-size: 1.6rem;
    text-align: center;
    line-height: 32px;
    color: #333333;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    cursor: pointer;
    &:hover {
      .line {
        background-color: #ffffff;
      }
      color: #ffffff;
      background-color: #5d9296;
    }
    .line {
      width: 22px;
      height: 2px;
      margin-bottom: 4px;
      border-radius: 1px;
      background: #333333;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .app-tab-box {
    display: none;
    font-weight: bold;
    font-size: 18px;
    .tab-list {
      position: relative;
      margin: 0 20px;
      line-height: 40px;
      cursor: pointer;
    }
    .ch-text {
      line-height: 40px;
    }
  }
}
</style>
