<template>
  <div class="page-container wrapper">
    作品详情
    <div class="button-box">
      <div class="button-list">预约</div>
      <div class="button-list">收藏</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "zuoPinDetail"
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: calc(100% - 80px);
  padding: 126px 40px 40px 40px;
}
.button-box {
  display: flex;
  width: 50%;
  margin: 0 auto;
  .button-list {
    width: 100px;
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
}
</style>
