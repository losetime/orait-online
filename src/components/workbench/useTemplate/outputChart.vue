<!-- 负荷预测K线图 -->
<template>
  <div class="outputChart-wrap">
    <div class="wrapper" v-show="SID !== null">
      <div class="chartInfo-wrap" @dblclick="fullScreen">
        <chartInfo :chart_InfoList="chart_InfoList"></chartInfo>
      </div>
      <!-- 操作区域 -->
      <div class="handle-wrap">
        <div
          :class="{ 'handle-btn': true, 'btn-checked': btnChecked === 1 }"
          @click="handleBtnFn(1)"
        >
          分时
        </div>
        <div
          :class="{ 'handle-btn': true, 'btn-checked': btnChecked === 2 }"
          @click="handleBtnFn(2)"
        >
          K线图
        </div>
        <div class="handle-classify" v-show="btnChecked === 2">
          <p
            :class="{ 'time-checked': timeChecked === 1 }"
            @click="craet_Boxplot('D', 1)"
          >
            日
          </p>
          <p
            :class="{ 'time-checked': timeChecked === 2 }"
            @click="craet_Boxplot('W', 2)"
          >
            周
          </p>
          <p
            :class="{ 'time-checked': timeChecked === 3 }"
            @click="craet_Boxplot('M', 3)"
          >
            月
          </p>
          <p
            :class="{ 'time-checked': timeChecked === 4 }"
            @click="craet_Boxplot('A', 4)"
          >
            年
          </p>
        </div>
      </div>
      <!-- 图表显示区域 -->
      <div
        class="chart-wrap"
        id="chart-wrap"
        @mousedown.shift.exact="updateData($event)"
      ></div>
    </div>
    <div class="warning" v-show="SID === null">
      <p>导入数据后即可查看图表</p>
    </div>
    <div class="dialogBox" v-show="showBoard">
      <dialogBox
        @closeDialogBox="closeDialogBox"
        :dialogBoxInfo="dialogBoxInfo"
        @processingData="processingData"
      ></dialogBox>
    </div>
  </div>
</template>

<script>
import chartInfo from "./chartInfo";
import ExtendDoubleAxis from "../../../assets/js/common/extend_doubleAxis.js"; //双轴图表
import {
  get_boxplot,
  get_timeshare
} from "../../../assets/service/wpSimluateService.js";
import dialogBox from "../common/dialogBox";
export default {
  data() {
    return {
      chartData: null,
      boxplotModul: null,
      lineModul: null,
      btnChecked: 1, //分时 or K线图
      timeChecked: 1, //K线图的日周年月
      //dialog的类型
      dialogBoxInfo: {
        type: null,
        info: ""
      },
      showBoard: false, //dialog的显示隐藏
      chart_InfoList: {
        quantity: 0, //实际电量
        quantitySimulation: 0, //预测电量
        mean: 0, //实际负荷
        MA7: 0,
        max_load: 0,
        min_load: 0,
        avg_load: 0
      },
      SID: null,
      count: 5
    };
  },
  computed: {
    //计算属性只能对数据进行监听，计算属性最后会返回一个值
    theme() {
      return "light"; //计算属性最后返回的值在哪里使用
    },
    htmlHeight() {
      return this.$store.state.module_global.htmlHeight;
    },
    htmlWidth() {
      return this.$store.state.module_global.htmlWidth;
    },
    sidFlag() {
      return this.$store.state.module_global.sidFlag;
    },
    globalFlag() {
      return this.$store.state.module_global.globalFlag;
    },
    simulationStart() {
      return this.$store.state.module_global.simulationStart;
    }
  },
  watch: {
    htmlHeight() {
      this.resizeChart();
    },
    htmlWidth() {
      this.resizeChart();
    },
    //sid变化后重新刷新数据
    sidFlag(val) {
      this.btnChecked = 1;
      this.SID = val;
      this.craet_line();
    },
    globalFlag(val) {
      /**
       *  val值说明
       *  401 模拟数据完成
       *  501 修复坏数据
       *  502 修复异常数据
       *  503 忽略异常数据
       *   */
      if (val === 401 || val === 501 || val === 502 || val === 503) {
        if (this.btnChecked === 1) {
          if (val === 501 || val === 502 || val === 503) {
            this.craet_line(true); //不同的值messageBox的提示不同
          } else {
            this.craet_line(false);
          }
        } else if (this.btnChecked === 2) {
          switch (this.timeChecked) {
            case 1:
              this.craet_Boxplot("D", 1, "update");
              break;
            case 2:
              this.craet_Boxplot("W", 2, "update");
              break;
            case 3:
              this.craet_Boxplot("M", 3, "update");
              break;
            case 4:
              this.craet_Boxplot("A", 4, "update");
              break;
          }
        }
      }
    }
  },
  methods: {
    //图表全屏
    fullScreen() {
      this.$store.commit("set_globalFlag", 201);
    },
    resizeChart() {
      if (this.btnChecked === 1 && this.lineModul !== null) {
        this.lineModul.chart.resize();
      } else if (this.btnChecked === 2 && this.boxplotModul !== null) {
        this.boxplotModul.chart.resize();
      }
    },
    // 关闭dialog触发的事件
    closeDialogBox() {},
    // 坏数据对话框
    processingData() {
      this.showBoard = false;
      this.$store.commit("set_globalFlag", 5);
    },
    //动态加载图表数据
    updateData(ev) {
      let x = ev.x;
      let that = this;
      let dataLength = 10; //请求的数据长度
      let flag = 0;
      // 这里如果用addEventListener来做，this总是指向外部，所以拿不到document的event
      // document.addEventListener("mouseup", this.test(event, x), true)
      document.onmouseup = function(ev) {
        if (ev.x - x > 150 && flag === 0) {
          flag = 1;
          //左边
          if (that.btnChecked === 1) {
            //分时
            let line_chartStart = localStorage.getItem("line_chartStart");
            that.$store.commit("set_loading", true);
            get_timeshare(line_chartStart, dataLength).then(res => {
              if (res.err_code === 0) {
                that.$store.commit("set_loading", false);
                that.chartData = res.data;
                that.init_line();
                localStorage.setItem(
                  "line_chartStart",
                  parseInt(that.chartData.start) - that.count
                ); //下一次start的位置
              }
            });
          }
        } else if (x - ev.x > 150 && flag === 0) {
          flag = 1;
          //右边
          if (that.btnChecked === 1) {
            //分时
            let line_chartStart = localStorage.getItem("line_chartStart");
            that.$store.commit("set_loading", true);
            get_timeshare(line_chartStart, dataLength).then(res => {
              if (res.err_code === 0) {
                that.chartData = res.data;
                that.init_line();
                that.$store.commit("set_loading", false);
                localStorage.setItem(
                  "line_chartStart",
                  parseInt(that.chartData.start) + that.count
                ); //下一次start的位置
              }
            });
          }
        }
      };
    },
    //创建K线图   数据 日-D 周-W 月-M 年-A dataZoom
    craet_Boxplot(arg, active, flag) {
      this.timeChecked = active;
      this.boxplotModul = new ExtendDoubleAxis();
      this.$store.commit("set_loading", true);
      get_boxplot(arg).then(res => {
        if (res.err_code === 0) {
          this.chartData = res.data;
          this.$store.commit("set_loading", false);
          localStorage.setItem(
            "boxplot_chartStart",
            parseInt(this.chartData.start) + this.count
          );
          //创建图表
          this.boxplotModul.config.id = "chart-wrap";
          this.boxplotModul.config.chartType = [
            "candlestick",
            "candlestick",
            "bar",
            "bar",
            "line"
          ];
          this.boxplotModul.config.title = [
            "实际K线",
            "模拟K线",
            "实际总电量",
            "模拟总电量",
            "MA7"
          ];
          this.boxplotModul.config.axis = [0, 0, 1, 1, 0];
          if (flag === undefined) {
            this.boxplotModul.config.dataZoom = [0, 500];
          }
          this.boxplotModul.config.data = [
            this.chartData.data,
            this.chartData.simulation,
            this.chartData.quantity,
            this.chartData.quantitySimulation,
            this.chartData.MA7
          ];
          this.boxplotModul.config.xAxisData = this.chartData.index;
          this.boxplotModul.config.theme = this.theme;
          this.boxplotModul.config.color = [
            "rgba(245, 126, 81, 1)",
            "rgba(97, 210, 196, 1)",
            "rgba(254, 160, 135, 1)",
            "rgba(165, 236, 227, 1)",
            "rgba(84, 187, 231, 1)"
          ];
          this.boxplotModul.config.color0 = [
            "rgba(165, 236, 227, 1)",
            "rgba(254, 160, 135, 1)"
          ];
          this.boxplotModul.showChart(this.boxplotModul.config);
          this.watch_Boxplot();
        }
      });
    },
    //更新K线图
    update_Boxplot(arg, active) {
      this.timeChecked = active;
      this.$store.commit("set_loading", true);
      get_boxplot(arg).then(res => {
        if (res.err_code === 0) {
          this.$store.commit("set_loading", false);
          this.chartData = res.data;
          this.boxplotModul.config.data = [
            this.chartData.data,
            this.chartData.simulation,
            this.chartData.quantity,
            this.chartData.quantitySimulation,
            this.chartData.MA7
          ];
          // this.boxplotModul.config.dataZoom = [900, null];
          this.boxplotModul.updateDate(this.boxplotModul.config);
          // localStorage.setItem("boxplot_chartStart", parseInt(this.chartData.start) + this.count); //下一次start的位置
        }
      });
    },
    //创建折线图
    craet_line(bloe) {
      let startDay = 0;
      let countDay = 10;
      if (this.simulationStart !== null) {
        startDay = this.simulationStart - 5;
        countDay = 10;
        this.$store.commit("set_simulationStart", null);
      }
      this.$store.commit("set_loading", true);
      get_timeshare(startDay, countDay).then(res => {
        if (res.err_code === 0) {
          this.chartData = res.data;
          this.init_line();
          this.$store.commit("set_loading", false);
          if (bloe) {
            this.messageBox();
          }
          localStorage.setItem(
            "line_chartStart",
            parseInt(this.chartData.start) + this.count
          );
        } else if (res.err_code === 4002) {
          this.$store.commit("set_loading", false);
          this.dialogBoxInfo.type = 1;
          this.dialogBoxInfo.info = "数据中有坏数据存在,请修复后查看图表";
          this.showBoard = true;
        }
      });
    },
    //初始化折线图
    init_line() {
      this.lineModul = new ExtendDoubleAxis();
      this.lineModul.config.id = "chart-wrap";
      this.lineModul.config.chartType = ["line", "line", "bar", "bar"];
      this.lineModul.config.title = [
        "实际分时",
        "模拟分时",
        "实际总电量",
        "模拟总电量"
      ];
      this.lineModul.config.axis = [0, 0, 1, 1];
      this.lineModul.config.dataZoom = [0, 1000];
      this.lineModul.config.data = [
        this.chartData.data,
        this.chartData.simulation,
        this.chartData.quantity,
        this.chartData.quantitySimulation
      ];
      this.lineModul.config.color = [
        "rgba(245, 126, 81, 1)",
        "rgba(97, 210, 196, 1)",
        "rgba(254, 160, 135, 1)",
        "rgba(165, 236, 227, 1)"
      ];
      this.lineModul.config.affilData = this.chartData.indexDay;
      this.lineModul.config.xAxisData = this.chartData.index;
      this.lineModul.config.xAxis[1].labelData = this.chartData.indexDay;
      this.lineModul.config.theme = this.theme;
      this.lineModul.showChart(this.lineModul.config);
      this.chart_InfoList.max_load = this.chartData.max.toFixed(2);
      this.chart_InfoList.min_load = this.chartData.min.toFixed(2);
      this.chart_InfoList.avg_load = this.chartData.avg.toFixed(2);
      this.watch_line();
    },
    //提示框
    messageBox() {
      if (this.globalFlag === 501 || this.globalFlag === 502) {
        this.$store.commit("set_message", {
          type: "success",
          boxShow: true,
          txt: "修复成功"
        });
      } else {
        this.$store.commit("set_message", {
          type: "success",
          boxShow: true,
          txt: "已忽略"
        });
      }
      let timeID = setTimeout(() => {
        this.$store.commit("set_message", {
          type: "success",
          boxShow: false
        });
        clearTimeout(timeID);
      }, 4000);
    },
    //监听K线图图表每个数据项的值
    watch_Boxplot() {
      let that = this;
      Object.defineProperty(this.boxplotModul, "dataIndex", {
        set: function(val) {
          that.chart_InfoList.quantity = that.chartData.quantity[val];
          that.chart_InfoList.quantitySimulation =
            that.chartData.quantitySimulation[val];
          that.chart_InfoList.mean = that.chartData.mean[val];
          that.chart_InfoList.MA7 = that.chartData.MA7[val];
        }
      });
    },
    //监听折线图图表每个数据项的值
    watch_line() {
      let that = this;
      Object.defineProperty(this.lineModul, "dataIndex", {
        set: function(val) {
          that.chart_InfoList.quantity = that.chartData.quantity[val];
          that.chart_InfoList.quantitySimulation =
            that.chartData.quantitySimulation[val];
          that.chart_InfoList.mean = 0;
          that.chart_InfoList.MA7 = 0;
        }
      });
    },
    //显示分时 or K线图
    handleBtnFn(index) {
      switch (index) {
        case 1:
          this.btnChecked = 1;
          this.craet_line();
          break;
        case 2:
          this.btnChecked = 2;
          this.craet_Boxplot("D", 1);
          break;
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      if (localStorage.getItem("SID")) {
        this.SID = localStorage.getItem("SID");
        this.craet_line();
      }
    });
  },
  components: {
    chartInfo,
    dialogBox
  }
};
</script>

<style lang="scss" scoped>
.outputChart-wrap {
  width: 100%;
  height: 100%;
  .wrapper {
    width: 100%;
    height: 100%;
  }
  .warning {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #ccc;
      font-size: var(--FtSize_four);
    }
  }
  .dialogBox {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
  }
}
.chartInfo-wrap {
  height: 70px;
  padding-left: 85px;
  box-sizing: border-box;
  margin-top: 12px;
  cursor: crosshair;
}
.handle-wrap {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 85px;
  box-sizing: border-box;
  font-size: var(--FtSize_three);
  .handle-btn {
    width: 90px;
    height: 30px;
    line-height: 30px;
    background: rgba(228, 228, 228, 1);
    text-align: center;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
  }
  .btn-checked {
    background: var(--systemColor);
  }
  .handle-classify {
    width: 240px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 20px;
    p {
      width: 60px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid var(--systemColor);
      }
    }
    .time-checked {
      border-bottom: 1px solid var(--systemColor);
    }
  }
}
.chart-wrap {
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccd0d6;
}
</style>
