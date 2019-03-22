import SuperFunction from "./super/spuer_function";
export default class RadarChart extends SuperFunction {
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
      series: [],
      radar: {},
      indicator: []
    };
  }
  //创建图表
  creatChart(config) {
    this.config.data.forEach((val, index) => {
      this.option.series.push({
        type: "radar",
        data: val,
        symbol: "circle",
        symbolSize: 4,
        areaStyle: {
          color: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255,255,255,0.3)" // 0% 处的颜色
              },
              {
                offset: 1,
                color: config.color[index] // 100% 处的颜色
              }
            ]
          },
          opacity: 0.5
        },
        lineStyle: {
          color: config.color[index]
        },
        itemStyle: {
          //拐点的样式
          color: config.color[index]
        }
      });
    });
  }
  //饼图的配置
  monaxialOptions(config) {
    this.option = {
      text: config.title || "",
      top: "4%",
      left: "10%",
      textStyle: {
        color: "#000000"
      },
      legend: {
        data: config.legendData, //图例的参数
        selectedMode: config.legendSelectedMode || "singe"
      },
      radar: {
        name: {
          textStyle: {
            color: "#fff",
            backgroundColor: "#ddd",
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        splitArea: {
          show: false //背景网格
        },
        axisLine: {
          lineStyle: {
            color: "rgba(238, 197, 102, 0.5)"
          }
        },
        indicator: config.indicator,
        center: config.center || ["50%", "50%"],
        radius: config.radius || "100%",
        shape: config.shape || "polygon",
        axisTick: {
          show: true
        }
      },
      series: [] //数据配置
    };
  }
}
