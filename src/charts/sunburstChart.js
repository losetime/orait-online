import SuperFunction from "./super/spuer_function";
export default class SunburstChart extends SuperFunction {
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
  //旭日图的配置
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
          type: "sunburst",
          data: config.seriesData,
          radius: config.radius || ["0", "75%"],
          label: {
            rotate: "radial" //每块扇形中文本标签的样式 径向
          }
        }
      ]
    };
  }
}
