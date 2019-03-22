import SuperFunction from "./super/spuer_function";
export default class PieChart extends SuperFunction {
  constructor() {
    super();
    this.chart = null;
    this.option = null;
    this.config = {
      id: "",
      title: [],
      theme: null,
      color: [],
      legend: {},
      series: {},
      data: {}
    };
  }
  //总执行函数
  creatChart(config) {
    this.config.seriesData.forEach((val, index) => {
      this.option.series.push({
        type: "pie",
        radius: config.radius[index] || ["0%", "70%"], //半径
        data: val,
        roseType: config.roseType || false, //是否展示成 南丁格尔图 。不传就是false
        center: config.center[index] || ["50%", "50%"], //圆心位置
        label: {
          labelLine: {
            show: config.labelLineShow || false //是否展示引线
          },
          position: config.labelPosition || "outside", //文字的位置
          show: config.labelShow || false //是否显示文字
        },
        color: config.color[index]
      });
    });
  }
  //饼图的配置
  monaxialOptions(config) {
    this.option = {
      color: config.color,
      title: {
        //标题
        text: config.title || "",
        top: "5%",
        left: "42%",
        textStyle: {
          color: "#000000"
        }
      },
      legend: {
        //图例配置
        data: config.lengend || [] //图例的数据+
      },
      textStyle: {
        color: "#000000"
      },

      calculable: true,
      series: [] //数据配置
    };
  }
}
