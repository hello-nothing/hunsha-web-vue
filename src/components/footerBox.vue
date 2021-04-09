<template>
  <div class="code-footer">
    <div class="module-list">
      <div class="first-text">全国免费热线</div>
      <div class="first-text">
        15037268535
      </div>
    </div>
    <div class="code-img-box first-img-box">
      <div
        class="code-img"
        :style="{ backgroundImage: 'url(' + wxImg + ')' }"
      ></div>
      <div class="code-text">合作微信</div>
    </div>
  </div>
</template>
<script>
import wxImg from "../assets/wx.jpg";

export default {
  name: "footer",
  data() {
    return {
      wxImg: wxImg
    };
  }
};
</script>
<style scoped lang="scss">
.code-footer {
  display: flex;
  justify-content: space-between;
  padding: 50px 22%;
  background-color: #d0d0d0;
}
.first-text {
    padding-bottom: 20px;
  font-size: 16px;
  color: #000;
}
.first-img-box {
  margin-right: 55px;
}
.phone-img {
  position: absolute;
  left: 0;
  top: 21px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.module-list {
  padding-top: 26px;
  padding-right: 70px;
}
.second-module {
  display: flex;
  align-items: center;
  padding-top: 80px;
}
.address-text {
  padding-left: 10px;
  line-height: 16px;
  border-left: 1px solid #000;
}
.code-img {
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.code-text {
  text-align: center;
}
</style>
