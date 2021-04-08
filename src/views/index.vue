<template>
  <div class="page-container">
    <el-carousel>
      <el-carousel-item v-for="(item, index) in newImgList" :key="index">
        <div
          class="banner-img"
          :style="{ backgroundImage: 'url(' + item + ')' }"
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
        :style="{ backgroundImage: 'url(' + item + ')' }"
        @click="goDetail(item)"
      ></div>
    </div>
    <div class="index-title">优秀摄影师</div>
    <div class="module-box">
      <div
        class="best-list"
        v-for="(item, index) in peopleList"
        :key="index"
        :style="{ backgroundImage: 'url(' + item + ')' }"
      ></div>
    </div>
  </div>
</template>
<script>
import api from "../api/api";
import imgOne from "../assets/banner1.jpg";
import best1 from "../assets/imgone.png";
import best2 from "../assets/imgtwo.png";
import best3 from "../assets/imgthree.png";
import best4 from "../assets/d4.png";
import des1 from "../assets/des1.jpg";
import des2 from "../assets/des2.jpg";
import des3 from "../assets/des3.jpg";
export default {
  data() {
    return {
      newImgList: [imgOne, imgOne, imgOne],
      bestList: [best1, best2, best3, best4],
      peopleList: [des1, des2, des3]
    };
  },

  mounted() {},
  methods: {
    goDetail(item) {
      this.$router.push({ path: "/zuoPinDetail" });
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
    margin: 0 auto;
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
</style>
