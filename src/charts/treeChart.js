import SuperFunction from "./super/spuer_function";
export default class TreeChart extends SuperFunction {
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
      series: {}
    };
  }
  //创建图表
  creatChart(config) {
    this.config.seriesData.forEach((value, index) => {
      this.option.series.push({
        type: "tree",
        data: [value],
        top: config.top[index],
        left: config.left[index],
        bottom: config.bottom[index],
        layout: config.layout[index], //默认 正交 radial: 径向
        orient: config.orient[index], //只有layout为orthogonal时，才会有效果
        name: config.nameList[index] || "", //数的名字对应图例
        leaves: {
          label: {
            normal: {
              position: "right",
              verticalAlign: "middle",
              align: "left"
            }
          }
        },
        label: {
          normal: {
            position: "left",
            verticalAlign: "middle",
            align: "right"
          }
        }
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
        left: "5%",
        textStyle: {
          color: "#000000"
        }
      },
      legend: {
        //图例配置
        data: config.legendData || [], //图例的数据+
        left: "5%"
      },
      textStyle: {
        color: "#000000"
      },
      series: [] //数据配置
    };
  }
}
