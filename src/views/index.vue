<template>
  <div class="page-container">
    <el-carousel>
      <el-carousel-item v-for="(item, index) in newImgList" :key="index">
        <div
          class="banner-img"
          :style="{ backgroundImage: 'url(' + item.picid + ')' }"
          @click="goDetail(item)"
        ></div>
      </el-carousel-item>
    </el-carousel>
    <div class="index-title">优秀作品</div>
    <div class="module-box">
      <div
        class="best-list"
        v-for="(item, index) in bestList"
        :key="index"
        :style="{ backgroundImage: 'url(' + item.picid + ')' }"
        @click="goDetail(item)"
      ></div>
    </div>
    <div class="index-title">优秀摄影师</div>
    <div class="module-box">
      <div
        class="best-list"
        v-for="(item, index) in peopleList"
        :key="index"
        :style="{ backgroundImage: 'url(' + item.sheYingShiPic + ')' }"
      ></div>
    </div>
  </div>
</template>
<script>
import api from "../api/api";
import des1 from "../assets/des1.jpg";
import des2 from "../assets/des2.jpg";
import des3 from "../assets/des3.jpg";
export default {
  data() {
    return {
      newImgList: [],
      bestList: [],
      peopleList: []
    };
  },

  mounted() {
    this.getBanner();
    this.getGoodZuopinList();
    this.getGoodPhotographer();
  },
  methods: {
    // 获取优秀摄影师
    getGoodPhotographer() {
      api.getGoodPhotographer().then(res => {
        console.log(res);
        const result = res.data;
        this.peopleList.push(result[0]);
        this.peopleList.push(result[1]);
        this.peopleList.push(result[2]);
        this.peopleList.push(result[3]);
      });
    },
    // 获取优秀作品
    getGoodZuopinList() {
      api.getGoodZuopinList().then(res => {
        const result = res.data;
        if (result.flag) {
          this.bestList.push(result.object[0]);
          this.bestList.push(result.object[1]);
          this.bestList.push(result.object[2]);
          this.bestList.push(result.object[3]);
        }
      });
    },
    // 获取banner
    getBanner() {
      api.getBanner().then(res => {
        const result = res.data;
        if (result.flag) {
          this.newImgList = result.object;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-container {
  /deep/ {
    .el-carousel__container {
      height: 500px;
    }
  }
  .banner-img {
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
  }
  .index-title {
    padding: 100px 0 60px 0;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  .module-box {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto 20px;
  }
  .best-list {
    width: 24%;
    height: 400px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
  }
}
.button-list {
  width: 100px;
  margin: 0 auto;
  line-height: 40px;
  color: #43a0a5;
  text-align: center;
  border: 1px solid #43a0a5;
  border-radius: 4px;
  cursor: pointer;
  &:first-child {
    margin-right: 30px;
  }
  &:hover {
    color: #ffffff;
    background-color: #43a0a5;
  }
}
</style>
