<template>
  <div class="price-warp">
    <div class="t-warp">
      <div class="t-t-warp">
        <p class="back" @click="toShouye">
          <i class="iconfont icon-zuo"></i>返回
        </p>
      </div>
      <div class="t-b-warp">在这里找到合适你的付费计划</div>
    </div>
    <div class="b-warp">
      <div class="b-m-warp">
        <div class="b-m-l-warp box">
          <div class="b-title">免费新用户</div>
          <div class="b-content">
            <p><i class="iconfont icon-duihao"></i>一年内均可使用</p>
            <p><i class="iconfont icon-duihao"></i>按需求选择任意图表模板</p>
          </div>
          <div class="b-price" id="first-price">
            <div class="b-free first-free">5张免费图表去水印导出</div>
            <div class="b-money"><i>0</i>元</div>
          </div>
          <div class="b-button" id="first-button">立即注册</div>
        </div>
        <div class="b-m-m-warp box">
          <div class="b-title">物美价廉的月度计划</div>
          <div class="b-content">
            <p><i class="iconfont icon-duihao"></i>按月订购</p>
            <p><i class="iconfont icon-duihao"></i>按需求选择任意图表模板</p>
            <p><i class="iconfont icon-duihao"></i>可随时取消</p>
          </div>
          <div class="b-price">
            <div
              class="b-free"
              @click="isChecked = 1"
              :class="{ activeColor: isChecked === 1 }"
            >
              <i
                class="iconfont"
                :class="isChecked === 1 ? 'icon-yixuanze' : 'icon-weixuanze'"
              ></i>
              20张图表去水印导出 &nbsp;&nbsp;0.5元/张
            </div>
            <div class="b-money"><i>10</i>元/月</div>
            <div
              class="b-free"
              @click="isChecked = 2"
              :class="{ activeColor: isChecked === 2 }"
            >
              <i
                class="iconfont"
                :class="isChecked === 2 ? 'icon-yixuanze' : 'icon-weixuanze'"
              ></i>
              50张图表去水印导出&nbsp;4.5元/张
            </div>
            <div class="b-money"><i>20</i>元/月</div>
          </div>
          <div class="b-button">立即升级</div>
        </div>
        <div class="b-m-r-warp box">
          <div class="b-title">预付费计划</div>
          <div class="b-content">
            <p><i class="iconfont icon-duihao"></i>一年内均可使用</p>
            <p><i class="iconfont icon-duihao"></i>按需求选择任意图表模板</p>
          </div>
          <div class="b-price">
            <div
              class="b-free"
              @click="isChecked = 3"
              :class="{ activeColor: isChecked === 3 }"
            >
              <i
                class="iconfont"
                :class="isChecked === 3 ? 'icon-yixuanze' : 'icon-weixuanze'"
              ></i>
              5张图表去水印导出 &nbsp;&nbsp;1.0元/张
            </div>
            <div class="b-money"><i>5</i>元/5张</div>
            <div
              class="b-free"
              @click="isChecked = 4"
              :class="{ activeColor: isChecked === 4 }"
            >
              <i
                class="iconfont"
                :class="isChecked === 4 ? 'icon-yixuanze' : 'icon-weixuanze'"
              ></i
              >10张图表去水印导出p&nbsp;0.8元/张
            </div>
            <div class="b-money"><i>8</i>元/10张</div>
          </div>
          <div class="b-button" @click="goOrder()">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isChecked: 0
    };
  },
  methods: {
    toShouye() {
      window.location.href = "/homePage.html#/homepage";
    },
    goOrder() {
      this.$router.push("/createdOrder");
    }
  },
  components: {
    // onlineHeader
  }
};
</script>
<style lang="scss" scoped>
.price-warp {
  width: 100%;
  height: 100%;
  position: absolute;
  font-family: Source Han Sans CN;
  font-weight: 400;
  .t-warp {
    width: 100%;
    background: url("/orait_online/img/pricing/定价计划-top.svg") no-repeat;
    .t-t-warp {
      width: 100%;
      height: 30px;
      padding-top: 20px;
      .back {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 30px;
        margin-left: 30px;
        border-radius: 30px;
        font-size: 18px;
        color: #fff;
        background-color: RGBA(251, 177, 97, 1);
        cursor: pointer;
        .iconfont {
          font-size: 25px;
        }
      }
    }
    .t-b-warp {
      width: 100%;
      height: 150px;
      text-align: center;
      line-height: 120px;
      font-size: 48px;
      color: rgba(255, 255, 255, 1);
    }
  }
  .b-warp {
    width: 100%;
    .b-m-warp {
      display: flex;
      padding: 30px 0;
      margin: 0px auto;
      width: 1320px;
      .box {
        flex: 1;
        box-sizing: border-box;
        padding: 60px 70px 70px;
        margin-right: 30px;
        width: 420px;
        height: 680px;
        box-sizing: border-box;
        border-radius: 6px;
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.14);
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          border: 2px solid rgba(250, 140, 22, 1);
        }
        .b-title {
          height: 74px;
          font-size: 24px;
          color: rgba(85, 72, 67, 1);
        }
        .b-content {
          height: 150px;
          line-height: 18px;
          text-align: left;
          font-size: 18px;
          color: rgba(164, 150, 145, 1);
          p {
            margin-bottom: 20px;
            i {
              margin-right: 10px;
              color: rgba(250, 140, 22, 1);
            }
          }
        }
        #first-price {
          box-sizing: border-box;
          padding-top: 70px;
        }
        .b-price {
          height: 286px;

          .b-free {
            margin-bottom: 10px;
            line-height: 24px;
            text-align: center;
            font-size: 18px;
            color: rgba(164, 150, 145, 1);
            cursor: pointer;
          }
          .first-free {
            color: rgba(250, 140, 22, 1);
          }
          .activeColor {
            color: rgba(250, 140, 22, 1);
          }
          .b-money {
            font-size: 40px;
            color: rgba(85, 72, 67, 1);
            i {
              margin-right: 10px;
              font-size: 70px;
            }
            margin-bottom: 30px;
          }
        }

        .b-button {
          width: 240px;
          height: 60px;
          margin: auto;
          cursor: pointer;
          line-height: 60px;
          border: 2px solid rgba(250, 140, 22, 1);
          border-radius: 60px;
          font-size: 24px;
          color: rgba(255, 255, 255, 1);
          background-color: rgba(250, 140, 22, 1);
          &:hover {
            color: rgba(250, 140, 22, 1);
            background-color: rgba(255, 255, 255, 1);
          }
        }
        #first-button {
          color: rgba(250, 140, 22, 1);
          background-color: rgba(255, 255, 255, 1);
          &:hover {
            background-color: rgba(250, 140, 22, 1);
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
}
</style>
