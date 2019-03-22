<template>
  <div id="homepage-wrap" @click="watchGlobal" ref="home">
    <!-- <loading></loading> -->
    <feedback v-show="globalFlag === 8" class="feedback"></feedback>
    <vue-scroll>
      <div class="t-wrap">
        <div class="onlineHeader"><onlineHeader></onlineHeader></div>
        <div class="content">
          <div class="text">
            <h1>伟大的研究由此开篇</h1>
            <h3>借助图表的力量来讲述您的研究故事</h3>
            <div class="search">
              <input type="search" placeholder="图表" />
              <i class="iconfont icon-sousuo"></i>
            </div>
          </div>
        </div>
        <i
          class="iconfont icon-fankui"
          @click.stop="changeGlobalFlag(8, -8)"
        ></i>
      </div>
      <div class="m-t-wrap">
        <div class="showTable">
          <div class="table"></div>
          <div class="border"></div>
        </div>
        <div class="message">
          <p>图表推荐</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p>海滩漏斗图</p>
          <p>薄荷绿和珊瑚红的碰撞，浓浓的清凉感，让海风为你的研究助力。</p>
          <p>来自:ORAIT设计师</p>
        </div>
      </div>
      <div class="m-b-wrap">
        <div class="title">
          <span
            >ORAIT提供精美图表模板，配合您的权威数据，共同演绎一段研究故事。</span
          >
          <div class="creatChart" @click="chartPage">创建图表</div>
        </div>
        <div class="chart">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="b-wrap">
        <div class="type">
          <span
            >ORAIT提供多种图表模板类型，如果无法从中为您的数据找到合适的表达方式，也可以把您的需求告诉我们</span
          >
          <div class="contact">联系我们</div>
          <div class="figure">
            <ul>
              <li>
                <img src="/orait_online/img/homepage/直方图.png" />
                <span>柱状图</span>
              </li>
              <li>
                <img src="/orait_online/img/homepage/面积图.png" />
                <span>面积图</span>
              </li>
              <li>
                <img src="/orait_online/img/homepage/箱型图.png" />
                <span>箱型图</span>
              </li>
              <li>
                <img src="/orait_online/img/homepage/热力图.png" />
                <span>热力图</span>
              </li>
              <li>
                <img src="/orait_online/img/homepage/雷达图.png" />
                <span>雷达图</span>
              </li>
              <li>
                <img src="/orait_online/img/homepage/地图.png" />
                <span>地图</span>
              </li>
              <li>
                <img src="/orait_online/img/homepage/折线图.png" />
                <span>折线图</span>
              </li>
              <li>
                <img src="/orait_online/img/homepage/饼图.png" />
                <span>饼图</span>
              </li>
              <li>
                <img src="/orait_online/img/homepage/K线图.png" />
                <span>K线图</span>
              </li>
              <li>
                <img src="/orait_online/img/homepage/条形图.png" />
                <span>条形图</span>
              </li>
              <li>
                <img src="/orait_online/img/homepage/漏斗图.png" />
                <span>漏斗图</span>
              </li>
              <li>
                <img src="/orait_online/img/homepage/仪表盘.png" />
                <span>仪表盘</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="ourselves">
          <div class="lianxi">
            <img src="/orait_online/img/common/ORAIT.png" />
            <p>电话：0755-84860840</p>
            <p>Copyright@2018橙智科技(深圳)有限公司｜粤ICP18037294号</p>
          </div>
          <div class="zhaopin">
            <span>关于我们</span> <span>招聘</span>
            <img
              style="width:88px;height:88px;"
              src="/orait_online/img/homepage/公众号.jpg"
            />
          </div>
        </div>
      </div>
    </vue-scroll>
  </div>
</template>
<script>
import changeTheme from "../../assets/js/common/theme.js";
import onlineHeader from "./onlineHeader";
import feedback from "./feedback";
// import loading from "../../globalComponents/loading";
export default {
  data() {
    return {};
  },
  methods: {
    watchGlobal() {
      this.$store.commit("set_globalFlag", 0);
    },
    //控制组件点击其以外地方自身的显隐
    changeGlobalFlag(show, hide) {
      if (this.globalFlag === show) {
        this.$store.commit("set_globalFlag", hide);
      } else {
        this.$store.commit("set_globalFlag", show);
      }
    },
    chartPage() {
      this.$router.push("/chartpage");
    }
  },
  watch: {
    //监听theme的值
    theme(val) {
      changeTheme(val);
    }
  },
  mounted() {
    changeTheme(this.theme);
  },
  computed: {
    //计算theme的值
    theme() {
      return this.$store.state.module_global.theme;
    },
    //控制组件的显隐
    globalFlag() {
      return this.$store.state.module_global.globalFlag;
    }
  },
  components: {
    onlineHeader,
    feedback
    // loading
  }
};
</script>
<style lang="scss">
#homepage-wrap {
  height: var(--DomH);
  overflow-y: auto;
  overflow-x: hidden;
  .feedback {
    position: fixed;
    bottom: 45px;
    right: 35px;
    z-index: 1;
  }
  .t-wrap {
    position: relative;
    height: 1080px;
    background: url("/orait_online/img/homepage/主页背景.svg") no-repeat;
    .icon-fankui {
      position: fixed;
      bottom: 45px;
      right: 35px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: var(--FtSize_icon_three);
      color: #fa8c16;
      background-color: #fff;
      cursor: pointer;
    }
    .onlineHeader {
      height: 50px;
    }
    .content {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-130%, -90%);
      box-sizing: border-box;
      .text {
        h1 {
          margin-bottom: 18px;
          font: 48px/100% "SourceHanSansSC-Normal";
          color: #fff;
        }
        h3 {
          margin-bottom: 14px;
          font: 24px/100% "SourceHanSansSC-Normal";
          color: #fff;
        }
        .search {
          display: flex;
          justify-content: space-between;
          width: 500px;
          height: 60px;
          background-color: #fff;
          border-radius: 5px;
          overflow: hidden;
          input {
            outline: none;
            border: none;
            flex: 1;
            padding-left: 12px;
            box-sizing: border-box;
            font: var(--FtSize_second) / 100% "SourceHanSansSC-Normal";
          }
          i {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 100%;
            font-size: var(--FtSize_icon);
            color: #fa8c16;
            cursor: pointer;
            &:hover {
              background-color: rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
    }
  }
  .m-t-wrap {
    height: 1080px;
    overflow: hidden;
    .showTable {
      position: relative;
      float: left;
      width: 1023px;
      height: 571px;
      margin-left: 237px;
      margin-top: 247px;
      .table {
        position: absolute;
        left: 63px;
        top: 0px;
        box-sizing: border-box;
        width: 960px;
        height: 517px;
        z-index: 1;
        background: url("/orait_online/img/homepage/首页大图表.png") no-repeat;
      }
      .border {
        position: absolute;
        top: 54px;
        left: 0px;
        box-sizing: border-box;
        width: 960px;
        height: 517px;
        border: 2px solid #fa8c16;
      }
    }
    .message {
      float: left;
      padding-left: 36px;
      width: 384px;
      box-sizing: border-box;
      margin-top: 247px;
      word-wrap: break-word;
      p {
        font-family: "SourceHanSansSC-Normal";
        &:first-of-type {
          margin-bottom: 24px;
          font-size: 24px;
          color: #9a8c87;
        }
        &:nth-of-type(2) {
          margin-bottom: 27px;
          font-size: var(--FtSize_second);
          color: #9a8c87;
        }
        &:nth-of-type(3) {
          margin-bottom: 207px;
          font-size: 16px;
          line-height: 24px;
          color: #a49691;
        }
        &:last-of-type {
          font-size: var(--FtSize_three);
          color: #a49691;
        }
      }
      ul {
        margin-bottom: 114px;
        height: 40px;
        li {
          margin-right: 15px;
          float: left;
          width: 40px;
          height: 40px;
          &:first-of-type {
            background-color: #87e8de;
          }
          &:nth-of-type(2) {
            background-color: #ffc069;
          }
          &:last-of-type {
            background-color: #e8e8e8;
          }
        }
      }
    }
  }
  .m-b-wrap {
    height: 1080px;
    .title {
      box-sizing: border-box;
      padding-top: 73px;
      height: 338px;
      background: linear-gradient(
        99deg,
        rgba(250, 140, 22, 1) 0%,
        rgba(250, 140, 22, 1) 42%,
        rgba(250, 84, 28, 1) 100%
      );
      span {
        display: block;
        text-align: center;
        font: var(--FtSize_second) / 100% "SourceHanSansSC-Normal";
        color: #fff;
      }
      .creatChart {
        margin: 39px auto 0px;
        width: 240px;
        height: 60px;
        border: 1px solid #fff;
        border-radius: 60px;
        text-align: center;
        line-height: 60px;
        color: #fff;
        cursor: pointer;
      }
    }
    .chart {
      margin: -120px auto 0;
      width: 1320px;
      ul {
        li {
          float: left;
          margin-right: 30px;
          margin-bottom: 48px;
          width: 420px;
          height: 220px;
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          background-color: #fff;
          &:nth-of-type(3n) {
            margin-right: 0px;
          }
        }
      }
    }
  }
  .b-wrap {
    height: 1080px;
    .type {
      padding-top: 68px;
      box-sizing: border-box;
      height: 880px;
      background-color: #fafafa;
      span {
        display: block;
        text-align: center;
        font: var(--FtSize_second) / 100% "SourceHanSansSC-Normal";
      }
      .contact {
        width: 240px;
        margin: 40px auto 0px;
        height: 60px;
        text-align: center;
        border-radius: 60px;
        font: 24px/60px "SourceHanSansSC-Normal";
        background-color: #fa8c16;
        color: #fff;
        cursor: pointer;
      }
      .figure {
        margin: 176px auto 0;
        width: 1256px;
        ul {
          li {
            float: left;
            width: 136px;
            height: 153px;
            margin-right: 88px;
            margin-bottom: 85px;
            &:nth-of-type(6n) {
              margin-right: 0px;
            }
            img {
              margin-bottom: 17px;
            }
          }
          span {
            font: 20px/100% "SourceHanSansSC-Normal";
            color: #707070;
          }
        }
      }
    }
    .ourselves {
      padding: 0 200px 0 310px;
      height: 200px;
      background: url("/orait_online/img/homepage/home-bottom.svg") no-repeat;
      overflow: hidden;
      display: flex;
      .lianxi {
        flex: 5;
        img {
          display: block;
          margin-top: 54px;
          margin-bottom: 16px;
        }
        p {
          font: var(--FtSize_three) / 100% "SourceHanSansSC-Normal";
          color: #fff;
          &:last-of-type {
            margin-top: 7px;
            font: var(--FtSize_four) / 100% "SourceHanSansSC-Normal";
          }
        }
      }
      .zhaopin {
        flex: 1;
        height: 100%;
        position: relative;
        color: rgba(255, 241, 230, 1);
        span {
          margin-right: 10px;
          display: inline-block;
          line-height: 200px;
        }
        img {
          position: absolute;
          top: 54px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
