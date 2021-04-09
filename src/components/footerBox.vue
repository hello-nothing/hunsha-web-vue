<template>
  <div class="code-footer">
    <div class="module-list">
      <div class="first-text">全国免费热线：15037268535</div>
    </div>
    <div class="code-img-box">
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
  align-items: center;
  width:calc(100% - 40%);
  margin: 0 auto;
  padding: 50px 20%;
  background-color: #d0d0d0;
}
.first-text {
  font-size: 16px;
  color: #000;
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
