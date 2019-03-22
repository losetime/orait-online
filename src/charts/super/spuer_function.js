import echarts from "echarts";
import {chartTheme} from "../../assets/js/common/theme";
export default class SuperFunction {
  constructor() {
    this.chart = null;
    this.option = null;
    this.originalData = null;
  }
  //总执行函数
  showChart(config) {
    this.init(config);
    this.creatChart(config);
    this.changeTheme(config.theme);
  }
  //更新函数
  updateDate() {
    this.option.dataZoom[0].start = 0;
    this.option.dataZoom[0].end = 100;
    this.chart.setOption(this.option);
  }
  init(config) {
    this.chart = echarts.init(document.getElementById(config.id));
    this.monaxialOptions(config);
  }
  resize() {
    this.chart.resize();
  }
  //图表样式
  themeFn(theme) {
    this.option.textStyle.color = theme;
    this.option.legend.textStyle.color = theme;
    this.option.xAxis.forEach(val => {
      val.axisLine.lineStyle.color = theme;
      val.nameTextStyle.color = theme;
    });
    this.option.yAxis.forEach(val => {
      val.axisLine.lineStyle.color = theme;
      val.nameTextStyle.color = theme;
    });
  }
  changeTheme(theme) {
    let light = chartTheme.axisColor[0];
    let dark = chartTheme.axisColor[1];
    if (theme === "dark") {
      this.themeFn(dark);
    } else if (theme === "light") {
      this.themeFn(light);
    }
    this.chart.setOption(this.option);
  }
}
