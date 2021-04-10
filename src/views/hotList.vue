<template>
  <!-- 优秀作品 -->
  <div class="page-container wrapper">
    <div class="module-box">
      <div
        class="best-list"
        v-for="(item, index) in bestList"
        :key="index"
        :style="{ backgroundImage: 'url(' + item.picid + ')' }"
        @click="goDetail(item)"
      ></div>
    </div>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  name: "hotList",
  data() {
    return {
      bestList: []
    };
  },
  mounted() {
    this.getGoodZuopinList();
  },
  methods: {
    // 获取优秀作品
    getGoodZuopinList() {
      api.getGoodZuopinList().then(res => {
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
  height: 400px;
  margin: 0 auto 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
}
</style>
