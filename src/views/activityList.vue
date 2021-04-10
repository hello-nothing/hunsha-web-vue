<template>
  <!-- 优惠活动 -->
  <div class="page-container wrapper">
    <div class="module-box">
      <div
        class="best-list"
        v-for="(item, index) in bestList"
        :key="index"
        @click="goDetail(item)"
      >
      <div class="list-text title">{{item.content}}</div>
      <div class="list-text">折扣：{{item.huoDongName}}</div>
      <div class="list-text">价格：{{item.price}}</div>
      <div class="list-text">地点：{{item.changdiName}}</div>
        <div
          class="list-img"
          :style="{ backgroundImage: 'url(' + item.picid + ')' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  name: "activityList",
  data() {
    return {
      bestList: []
    };
  },
  mounted() {
    this.getHuodong();
  },
  methods: {
    // 获取活动作品
    getHuodong() {
      api.getHuodong().then(res => {
        const result = res.data;
        if (result.flag) {
          this.bestList = result.object;
        }
      });
    },
    //详情页面跳转
    goDetail(item) {
      this.$router.push({
        path: "/zuoPinDetail",
        query: { value: JSON.stringify(item) }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.page-container {
  padding: 200px 0 100px 0;
}
.module-box {
  display: flex;
  flex-wrap: wrap;
}
.best-list {
  width: 48%;
  margin: 0 auto 30px;
  cursor: pointer;
}
.list-img {
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.title{
  font-size: 18px;
  font-weight: bold;
}
</style>
