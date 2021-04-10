<template>
  <div class="page-container wrapper">
    <div class="detail-title">作品名称：{{ detail.content }}</div>
    <div class="detail-title">拍摄场地：{{ detail.changdiName }}</div>
    <div class="detail-title">价格：{{ detail.price }}</div>
    <div
      class="banner-img"
      :style="{ backgroundImage: 'url(' + detail.picid + ')' }"
    ></div>
    <div class="button-box">
      <div class="button-list" @click="yuyue">预约</div>
      <!-- <div class="button-list">收藏</div> -->
    </div>
    <el-dialog title="预约" :visible.sync="dialogVisible">
      <div class="list-box">
        <div class="list-title">姓名：</div>
        <el-input v-model="info.name" placeholder="请输入用户名"></el-input>
      </div>
      <div class="list-box">
        <div class="list-title">手机号：</div>
        <el-input v-model="info.phone" placeholder="请输入手机号"></el-input>
      </div>
      <div class="list-box">
        <div class="list-title">预约时间：</div>
        <el-date-picker
          v-model="info.time"
          type="date"
          placeholder="请选择你的预约时间"
        >
        </el-date-picker>
      </div>
      <el-button @click="confirm" type="primary">确定</el-button>
    </el-dialog>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  name: "zuoPinDetail",
  data() {
    return {
      detail: {},
      info: {
        name: "",
        time: "",
        phone: ""
      },
      dialogVisible: false
    };
  },
  mounted() {
    const info = JSON.parse(this.$route.query.value);
    console.log(info);
    if (info.id) {
      this.info.zuopinid = info.id;
      api.getDetail({ zuoPinId: info.id }).then(res => {
        console.log(res);
        const result = res.data;
        if (result.flag) {
          if (result.object) {
            this.detail = result.object;
          } else {
            this.$message.warning("暂无数据!");
          }
        } else {
          this.$message.warning("获取详情失败！");
        }
      });
    }
  },
  methods: {
    // 预约
    yuyue() {
      this.dialogVisible = true;
    },
    // 确定预约
    confirm() {
      if (!this.info.name) {
        this.$message.warning("请输入姓名！");
      } else if (!this.info.phone) {
        this.$message.warning("请输入手机号！");
      } else if (!this.info.time) {
        this.$message.warning("请选择预约时间！");
      } else {
        api.order(this.info).then(res => {
          console.log(res);
          const result = res.data;
          if (result.flag) {
            this.$message.success("预约成功!");
            this.dialogVisible = false;
          } else {
            this.$message.warning(result.message);
          }
        });
      }
    }
  }
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
.detail-title {
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}
.banner-img {
  height: 400px;
  margin-bottom: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}
.list-box {
  margin-bottom: 20px;
  .list-title {
    font-size: 18px;
  }
}
</style>
