<template>
  <div class="page-container wrapper">
    <div class="phone-text first-text">联系方式：15037268535</div>
    <div class="phone-text">联系地址：河南省安阳市安阳工学院</div>
    <div class="code-text">合作微信：</div>
    <div
      class="code-img"
      :style="{ backgroundImage: 'url(' + wxImg + ')' }"
    ></div>
  </div>
</template>
<script>
import wxImg from "../assets/wx.jpg";
export default {
  name: "contactUs",
  data() {
    return {
      wxImg: wxImg
    };
  }
};
</script>
<style lang="scss" scoped>

.first-text {
  padding-top: 30px;
}
.phone-text {
  padding-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
}
.code-text {
  font-size: 18px;
  font-weight: bold;
}
.code-img {
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
