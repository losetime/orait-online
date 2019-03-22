<template>
  <div class="order-warp">
    <div class="order-content">
      <div class="t-warp"><steps :txt="txt" :active="active"></steps></div>
      <div class="m-first-warp" v-if="active === 1">
        <div class="title">您的订单创建成功</div>
        <div class="content">
          <p>订单编号：A1000000001</p>
          <p>商品数量: 1</p>
          <p>商品名称: 月付费套餐</p>
          <p>付款金额: 10.00元</p>
        </div>
      </div>
      <div class="b-first-warp" v-if="active === 1">
        <div class="btn confirm" @click="toNext(active)">确认支付</div>
        <div class="btn back">返回购物车</div>
      </div>
      <div class="m-sec-warp" v-if="active === 2">
        <p>即将跳转到支付页面</p>
        <div class="loading">loading</div>
      </div>
      <div class="b-three-warp" v-if="active === 3">
        <p>订单A110001支付成功</p>
        <p>开启您的研究之旅吧</p>
        <p>5秒后返回原页面</p>
      </div>
      <div class="backHome" @click="backHome()">返回首页>></div>
    </div>
  </div>
</template>
<script>
import steps from "../../globalComponents/steps";
export default {
  data: () => {
    return {
      txt: {
        value1: "订单确认",
        value2: "订单支付",
        value3: "支付成功"
      },
      active: 1
    };
  },
  methods: {
    toNext() {
      this.active += 1;
      let timeId = setTimeout(function() {
        window.location.href = "http://localhost:8080/pricing.html#/pricing";
        clearTimeout(timeId);
      }, 2000);
    },
    backHome() {
      this.$router.push("/pricing");
    }
  },
  components: {
    steps
  }
};
</script>
<style lang="scss" scoped>
.order-warp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("/orait_online/img/pricing/账号设置创建订单bg.svg") no-repeat;
  .order-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 1136px;
    height: 519px;
    background: rgba(255, 255, 255, 1);
    opacity: 1;
    border-radius: 20px;
    .t-warp {
      width: 100%;
      height: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .m-first-warp {
      width: 100%;
      height: 30%;
      .title {
        font-size: 24px;
        color: rgba(154, 140, 135, 1);
        height: 50px;
        line-height: 50px;
      }
      .content {
        width: 18%;
        margin: 0 auto;
        font-size: 12px;
        color: rgba(154, 140, 135, 1);
        p {
          text-align: left;
          margin-top: 15px;
        }
      }
    }
    .b-first-warp {
      width: 100%;
      height: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      .btn {
        text-align: center;
        line-height: 30px;
        margin: 0 10px;
        border-radius: 30px;
        width: 90px;
        height: 30px;
        cursor: pointer;
        border: 1px solid rgba(217, 217, 217, 1);
        background-color: rgba(217, 217, 217, 1);
        color: #fff;
        &:hover {
          background-color: #fff;
          color: rgba(250, 140, 22, 1);
          border-color: rgba(250, 140, 22, 1);
        }
      }
    }
    .m-sec-warp {
      width: 100%;
      height: 65%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        line-height: 96px;
        color: rgba(154, 140, 135, 1);
        font-size: 24px;
      }
      .loading {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        line-height: 90px;
        text-align: center;
        color: rgba(154, 140, 135, 1);
        border: 1px solid rgba(112, 112, 112, 1);
      }
    }
    .b-three-warp {
      width: 100%;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        font-size: 12px;
        line-height: 30px;
        color: rgba(164, 150, 145, 1);
        &:first-child {
          line-height: 60px;
          font-size: 24px;
          color: rgba(85, 72, 67, 1);
        }
        &:last-child {
          color: rgba(250, 140, 22, 1);
        }
      }
    }
    .backHome {
      position: absolute;
      right: 30px;
      bottom: 30px;
      cursor: pointer;
      font-size: 14px;
      color: rgba(154, 140, 135, 1);
    }
  }
}
</style>
