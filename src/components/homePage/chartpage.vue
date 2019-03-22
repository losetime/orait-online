<template>
  <div id="chartpage-wrap" ref="chart">
    <vue-scroll>
      <div class="t-wrap" ref="t">
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
      </div>
      <div class="m-wrap">
        <div class="m-t-wrap" ref="type">
          <div class="w" ref="dotted">
            <div class="l-wrap">
              <span>按类型分类</span> <i class="iconfont icon-xia1"></i>
            </div>
            <div class="m-m-wrap">
              <ul>
                <li>全部</li>
                <li>线图</li>
                <li>柱状图</li>
                <li>条形图</li>
                <li>饼图</li>
                <li>面积图</li>
                <li>箱型图</li>
                <li>K线图</li>
                <li>热力图</li>
                <li>漏斗图</li>
                <li>地图</li>
                <br />
                <li>散点图</li>
                <li>仪表盘</li>
              </ul>
            </div>
            <div class="r-wrap" @click="packUp">
              <span>收起</span> <i class="iconfont icon-xia1" ref="arrow"></i>
            </div>
          </div>
        </div>
        <div class="w">
          <div class="m-b-wrap" ref="charts">
            <ul>
              <li
                @mouseenter="chart.barShow = 1"
                @mouseleave="chart.barShow = 0"
              >
                <div class="chart">
                  <BarChart
                    v-if="chart.barShow === 1"
                    class="charts"
                  ></BarChart>
                  <img
                    src="/orait_online/img/homepage/海滩风柱图.png"
                    v-show="chart.barShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>海滩风柱图</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.lineShow = 1"
                @mouseleave="chart.lineShow = 0"
              >
                <div class="chart">
                  <LineChart
                    v-if="chart.lineShow === 1"
                    class="charts"
                  ></LineChart>
                  <img
                    src="/orait_online/img/homepage/折线.png"
                    v-show="chart.lineShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.barTwoChartShow = 1"
                @mouseleave="chart.barTwoChartShow = 0"
              >
                <div class="chart">
                  <barTwoChart
                    class="charts"
                    v-if="chart.barTwoChartShow === 1"
                  ></barTwoChart>
                  <img
                    src="/orait_online/img/homepage/柱状2.png"
                    v-show="chart.barTwoChartShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.scatterTwoChart = 1"
                @mouseleave="chart.scatterTwoChart = 0"
              >
                <div class="chart">
                  <scatterTwoChart
                    class="charts"
                    v-if="chart.scatterTwoChart === 1"
                  ></scatterTwoChart>
                  <img
                    src="/orait_online/img/homepage/散点2.png"
                    v-show="chart.scatterTwoChart === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.barThreeChartShow = 1"
                @mouseleave="chart.barThreeChartShow = 0"
              >
                <div class="chart">
                  <barThreeChart
                    class="charts"
                    v-if="chart.barThreeChartShow === 1"
                  ></barThreeChart>
                  <img
                    src="/orait_online/img/homepage/柱状3.png"
                    v-show="chart.barThreeChartShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.barFourChartShow = 1"
                @mouseleave="chart.barFourChartShow = 0"
              >
                <div class="chart">
                  <barFourChart
                    class="charts"
                    v-if="chart.barFourChartShow === 1"
                  ></barFourChart>
                  <img
                    src="/orait_online/img/homepage/柱状4.png"
                    v-show="chart.barFourChartShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.barSixChart = 1"
                @mouseleave="chart.barSixChart = 0"
              >
                <div class="chart">
                  <barSixChart
                    class="charts"
                    v-if="chart.barSixChart === 1"
                  ></barSixChart>
                  <img
                    src="/orait_online/img/homepage/柱状6.png"
                    v-show="chart.barSixChart === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.pieTwoShow = 1"
                @mouseleave="chart.pieTwoShow = 0"
              >
                <div class="chart">
                  <PieTwo class="charts" v-if="chart.pieTwoShow === 1"></PieTwo>
                  <img
                    src="/orait_online/img/homepage/饼图2.png"
                    v-show="chart.pieTwoShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.pieOneShow = 1"
                @mouseleave="chart.pieOneShow = 0"
              >
                <div class="chart">
                  <PieOne class="charts" v-if="chart.pieOneShow === 1"></PieOne>
                  <img
                    src="/orait_online/img/homepage/饼图1.png"
                    v-show="chart.pieOneShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li @mouseenter="chart.pieSix = 1" @mouseleave="chart.pieSix = 0">
                <div class="chart">
                  <pieSix class="charts" v-if="chart.pieSix === 1"></pieSix>
                  <img
                    src="/orait_online/img/homepage/饼图5.png"
                    v-show="chart.pieSix === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.barFiveChartShow = 1"
                @mouseleave="chart.barFiveChartShow = 0"
              >
                <div class="chart">
                  <barFiveChart
                    class="charts"
                    v-if="chart.barFiveChartShow === 1"
                  ></barFiveChart>
                  <img
                    src="/orait_online/img/homepage/柱状5.png"
                    v-show="chart.barFiveChartShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.pieThreeShow = 1"
                @mouseleave="chart.pieThreeShow = 0"
              >
                <div class="chart">
                  <PieThree
                    class="charts"
                    v-if="chart.pieThreeShow === 1"
                  ></PieThree>
                  <img
                    src="/orait_online/img/homepage/饼图4.png"
                    v-show="chart.pieThreeShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.areaChartTwoShow = 1"
                @mouseleave="chart.areaChartTwoShow = 0"
              >
                <div class="chart">
                  <areaChartTwo
                    class="charts"
                    v-if="chart.areaChartTwoShow === 1"
                  ></areaChartTwo>
                  <img
                    src="/orait_online/img/homepage/折线3.png"
                    v-show="chart.areaChartTwoShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.areaChartThreeShow = 1"
                @mouseleave="chart.areaChartThreeShow = 0"
              >
                <div class="chart">
                  <areaChartThree
                    class="charts"
                    v-if="chart.areaChartThreeShow === 1"
                  ></areaChartThree>
                  <img
                    src="/orait_online/img/homepage/折线4.png"
                    v-show="chart.areaChartThreeShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.boxplotShow = 1"
                @mouseleave="chart.boxplotShow = 0"
              >
                <div class="chart">
                  <boxplotChart
                    class="charts"
                    v-if="chart.boxplotShow === 1"
                  ></boxplotChart>
                  <img
                    src="/orait_online/img/homepage/箱型1.png"
                    v-show="chart.boxplotShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.candlestickChartShow = 1"
                @mouseleave="chart.candlestickChartShow = 0"
              >
                <div class="chart">
                  <candlestickChart
                    class="charts"
                    v-if="chart.candlestickChartShow === 1"
                  ></candlestickChart>
                  <img
                    src="/orait_online/img/homepage/K线1.png"
                    v-show="chart.candlestickChartShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.heatMapShow = 1"
                @mouseleave="chart.heatMapShow = 0"
              >
                <div class="chart">
                  <HeatMap
                    v-if="chart.heatMapShow === 1"
                    class="charts"
                  ></HeatMap>
                  <img
                    src="/orait_online/img/homepage/热力.png"
                    v-show="chart.heatMapShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li @mouseenter="chart.funnel = 1" @mouseleave="chart.funnel = 0">
                <div class="chart">
                  <funnel v-if="chart.funnel === 1"></funnel>
                  <img
                    src="/orait_online/img/homepage/漏斗.png"
                    v-show="chart.funnel === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.scatterChart = 1"
                @mouseleave="chart.scatterChart = 0"
              >
                <div class="chart">
                  <scatterChart
                    class="charts"
                    v-if="chart.scatterChart === 1"
                  ></scatterChart>
                  <img
                    src="/orait_online/img/homepage/散点1.png"
                    v-show="chart.scatterChart === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.scatterThreeChart = 1"
                @mouseleave="chart.scatterThreeChart = 0"
              >
                <div class="chart">
                  <scatterThreeChart
                    class="charts"
                    v-if="chart.scatterThreeChart === 1"
                  ></scatterThreeChart>
                  <img
                    src="/orait_online/img/homepage/散点3.png"
                    v-show="chart.scatterThreeChart === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.radarChartShow = 1"
                @mouseleave="chart.radarChartShow = 0"
              >
                <div class="chart">
                  <radarChart v-if="chart.radarChartShow === 1"></radarChart>
                  <img
                    src="/orait_online/img/homepage/雷达.png"
                    v-show="chart.radarChartShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.lineThreeChart = 1"
                @mouseleave="chart.lineThreeChart = 0"
              >
                <div class="chart">
                  <lineThreeChart
                    class="charts"
                    v-if="chart.lineThreeChart === 1"
                  ></lineThreeChart>
                  <img
                    src="/orait_online/img/homepage/折线5.png"
                    v-show="chart.lineThreeChart === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.pieFourShow = 1"
                @mouseleave="chart.pieFourShow = 0"
              >
                <div class="chart">
                  <PieFour
                    class="charts"
                    v-if="chart.pieFourShow === 1"
                  ></PieFour>
                  <img
                    src="/orait_online/img/homepage/饼图3.png"
                    v-show="chart.pieFourShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li
                @mouseenter="chart.areaChartShow = 1"
                @mouseleave="chart.areaChartShow = 0"
              >
                <div class="chart">
                  <areaChart
                    class="charts"
                    v-if="chart.areaChartShow === 1"
                  ></areaChart>
                  <img
                    src="/orait_online/img/homepage/折线2.png"
                    v-show="chart.areaChartShow === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
              <li @mouseenter="chart.map = 1" @mouseleave="chart.map = 0">
                <div class="chart">
                  <mapChart
                    class="charts"
                    v-show="chart.map === 1"
                    style="width:420px;height:230px;"
                  ></mapChart>
                  <img
                    src="/orait_online/img/homepage/地图1.png"
                    v-show="chart.map === 0"
                  />
                </div>
                <div class="parameter">
                  <span>我是标题</span>
                  <div class="message">
                    <i class="iconfont icon-yanjing"></i> <span>13</span>
                    <i class="iconfont icon-buxihuan"></i> <span>152</span>
                    <p>来自于ORAIT设计师</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </vue-scroll>
  </div>
</template>
<script>
import { changeTheme } from "../../assets/js/common/theme.js";
import onlineHeader from "./onlineHeader";
import funnel from "../chart/funnel";
import BarChart from "../chart/barChart";
import LineChart from "../chart/lineChart";
import barTwoChart from "../chart/barTwoChart";
import HeatMap from "../chart/heatMap";
import PieOne from "../chart/pieOne";
import PieTwo from "../chart/pieTwo";
import PieThree from "../chart/pieThree";
import PieFour from "../chart/pieFour";
import barThreeChart from "../chart/barThreeChart";
import barFourChart from "../chart/barFourChart";
import barFiveChart from "../chart/barFiveChart";
import areaChart from "../chart/areaChart";
import areaChartTwo from "../chart/areaChartTwo";
import areaChartThree from "../chart/areaChartThree";
import radarChart from "../chart/radarChart";
import candlestickChart from "../chart/candlestick";
import boxplotChart from "../chart/boxplot";
import scatterChart from "../chart/scatterChart";
import scatterTwoChart from "../chart/scatterTwoChart";
import scatterThreeChart from "../chart/scatterThreeChart";
import pieSix from "../chart/pieSix";
import lineThreeChart from "../chart/lineThreeChart";
// import lineTwoChart from "../chart/lineTwoChart";
import barSixChart from "../chart/barSixChart";
import mapChart from "../chart/mapChart";
export default {
  data() {
    return {
      packFlag: true,
      top: 0,
      chart: {
        testChart: 0,
        funnel: 0,
        barShow: 0,
        lineShow: 0,
        barTwoChartShow: 0,
        barThreeChartShow: 0,
        barFourChartShow: 0,
        barFiveChartShow: 0,
        heatMapShow: 0,
        pieOneShow: 0,
        pieTwoShow: 0,
        pieThreeShow: 0,
        pieFourShow: 0,
        areaChartShow: 0,
        areaChartTwoShow: 0,
        areaChartThreeShow: 0,
        radarChartShow: 0,
        candlestickChartShow: 0,
        boxplotShow: 0,
        scatterChart: 0,
        scatterTwoChart: 0,
        scatterThreeChart: 0,
        pieSix: 0,
        lineThreeChart: 0,
        // lineTwoChart: 0,
        barSixChart: 0,
        map: 0
      }
    };
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
    //箭头方向
    packUp() {
      if (this.packFlag === true) {
        this.$refs.dotted.style.transition = "height 0.3s ease";
        this.$refs.dotted.style.height = "75px";
        this.$refs.arrow.style.transition = "transform .3s ease";
        this.$refs.arrow.style.transform = "rotateZ(-180deg)";
        this.packFlag = false;
        return;
      } else {
        this.$refs.dotted.style.height = "110px";
        this.$refs.arrow.style.transition = "transform .3s ease";
        this.$refs.arrow.style.transform = "rotateZ(0deg)";
        this.packFlag = true;
        return;
      }
    },
    //吸顶效果
    handlerScroll(e) {
      if (e.target.scrollTop >= this.top) {
        this.$refs.type.style.position = "fixed";
        this.$refs.type.style.top = "0px";
        this.$refs.type.style.zIndex = "1";
        this.$refs.charts.style.marginTop = "150px";
      }
      if (e.target.scrollTop <= this.top) {
        this.$refs.type.removeAttribute("style");
        this.$refs.charts.removeAttribute("style");
      }
    }
  },
  watch: {
    //监听theme的值
    theme(val) {
      changeTheme(val);
    },
    show(val) {
      this.show = val;
    }
  },
  mounted() {
    changeTheme(this.theme);
    window.addEventListener("scroll", this.handlerScroll, true);
    this.top = this.$refs.t.offsetHeight;
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
    funnel,
    BarChart,
    LineChart,
    HeatMap,
    PieOne,
    PieTwo,
    PieThree,
    PieFour,
    barTwoChart,
    barThreeChart,
    barFourChart,
    barFiveChart,
    areaChart,
    areaChartTwo,
    areaChartThree,
    radarChart,
    candlestickChart,
    boxplotChart,
    scatterChart,
    scatterTwoChart,
    scatterThreeChart,
    pieSix,
    lineThreeChart,
    // lineTwoChart,
    barSixChart,
    mapChart
  }
};
</script>
<style lang="scss">
#chartpage-wrap {
  height: var(--DomH);
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #fafafa;
  .t-wrap {
    height: 320px;
    background: url("/orait_online/img/homepage/chartpageTop.svg");
    .content {
      margin-left: 310px;
      margin-top: 66px;
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
            &::placeholder {
              color: #e8e8e8;
            }
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
  .m-wrap {
    display: inline-block;
    width: 100%;
    .m-t-wrap {
      overflow: hidden;
      margin-bottom: 40px;
      width: 100%;
      background-color: #fafafa;
      .w {
        display: flex;
        justify-content: space-between;
        width: 1320px;
        margin: 0 auto;
        padding-top: 37px;
        box-sizing: border-box;
        height: 110px;
        border-bottom: 1px dotted #fa8c16;
        .l-wrap {
          font: 14px/100% "SourceHanSansSC-Normal";
          color: #9a8c87;
        }
        .m-m-wrap {
          margin-top: -12px;
          ul {
            display: inline-block;
            li {
              float: left;
              padding: 12px 30px;
              font: 14px/100% "SourceHanSansSC-Normal";
              color: #9a8c87;
              cursor: pointer;
              &:hover {
                border-radius: 36px;
                background-color: #fa8c16;
                color: #fff;
              }
            }
          }
        }
        .r-wrap {
          height: 15px;
          font: 14px/100% "SourceHanSansSC-Normal";
          color: #9a8c87;
          cursor: pointer;
          &:hover {
            color: #fa8c16;
          }
          i {
            display: inline-block;
          }
        }
      }
    }
    .w {
      width: 1320px;
      margin: 0 auto;
      .m-b-wrap {
        ul {
          li {
            float: left;
            margin-right: 30px;
            margin-bottom: 30px;
            width: 420px;
            height: 320px;
            border-radius: 6px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
            background-color: #fff;
            cursor: pointer;
            &:nth-of-type(3n) {
              margin-right: 0px;
            }
            .chart {
              height: 230px;
              width: 420px;
            }
            .parameter {
              display: flex;
              justify-content: space-between;
              padding: 0px 30px;
              box-sizing: border-box;
              height: 90px;
              overflow: hidden;
              span {
                display: inline-block;
                margin-top: 18px;
                font: var(--FtSize_second) "SourceHanSansSC-Normal";
                color: #554843;
              }
              .message {
                i {
                  margin-right: 8px;
                  font-size: var(--FtSize_icon);
                  color: #746b5e;
                  vertical-align: middle;
                }
                span {
                  display: inline-block;
                  line-height: 25px;
                  font: var(--FtSize_four) "SourceHanSansSC-Normal";
                  color: #a49691;
                  &:first-of-type {
                    margin-right: 22px;
                    line-height: 25px;
                  }
                }
                p {
                  margin-top: 9px;
                  font: var(--FtSize_four) "SourceHanSansSC-Normal";
                  color: #a49691;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
