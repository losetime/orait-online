import SuperFunction from "./super/spuer_function";
export default class TreemapChart extends SuperFunction {
  constructor() {
    super();
    this.chart = null;
    this.option = null;
    this.config = {
      id: "",
      title: [],
      theme: null,
      color: [],
      series: {}
    };
  }
  creatChart() {}
  // 矩形树图的配置
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
      series: [
        {
          type: "treemap",
          data: config.seriesData,
          roam: config.roam || false, //是否开启拖拽模式
          label: {
            show: true,
            formatter: "{b}"
          }
        }
      ]
    };
  }
}
