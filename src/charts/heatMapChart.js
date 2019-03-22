import SuperFunction from "./super/spuer_function";
export default class HeatMapChart extends SuperFunction {
  constructor() {
    super();
    this.chart = null;
    this.option = null;
    this.config = {
      id: "",
      title: [],
      theme: null,
      color: [],
      series: {},
      xAxis: {},
      yAxis: {},
      visualMap: {}
    };
  }
  creatChart() {}
  // 矩形树图的配置
  monaxialOptions(config) {
    this.option = {
      color: config.color,
      title: {
        //标题
        text: config.title, //图表标题
        top: "5%",
        left: "42%",
        textStyle: {
          color: "#000000"
        }
      },
      xAxis: [
        {
          type: config.xAxisCategory || "value",
          show: config.xAxisShow || false,
          name: config.xAxisName || "",
          data: config.xAxisData || []
        }
      ],
      yAxis: [
        {
          type: config.yAxisCategory || "value", //坐标轴类型
          show: config.yAxisShow || false, //是否显示
          name: config.yAxisName || "", // 坐标轴名称
          data: config.yAxisData || [] //坐标轴数据
        }
      ],
      visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        left: "left",
        bottom: "5%",
        show: false
      },
      series: [
        {
          type: "heatmap",
          data: config.seriesData,
          label: {
            show: config.labelshow || false //是否显示文字
          },
          itemStyle: {
            normal: {
              color: config.color //颜色
            }
          }
        }
      ]
    };
  }
}
