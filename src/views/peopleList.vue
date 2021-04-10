<template>
  <!-- 优秀摄影师 -->
  <div class="page-container wrapper">
    <div class="module-box">
      <div class="best-list" v-for="(item, index) in bestList" :key="index">
        <div
          class="list-img"
          :style="{ backgroundImage: 'url(' + item.sheYingShiPic + ')' }"
        ></div>
        <div class="list-name">{{ item.userLoginName }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  name: "peopleList",
  data() {
    return {
      bestList: []
    };
  },
  mounted() {
    this.getGoodPhotographer();
  },
  methods: {
    // 获取优秀作品
    getGoodPhotographer() {
      api.getGoodPhotographer().then(res => {
        console.log(res);
        const result = res.data;
        this.bestList = result;
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
}
.list-img {
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.list-name {
  font-size: 18px;
  text-align: center;
}
</style>
