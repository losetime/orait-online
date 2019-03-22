import SuperFunction from "./super/spuer_function";
export default class Scatter extends SuperFunction {
  constructor() {
    super();
    this.xAxisData = [];
    this.seriesData = [];
    this.seriesData2 = [];
    this.xAxisData2 = [];
    this.seriesAvg = [];
    this.config = {
      id: "",
      xAxisData: null,
      title: [],
      chartType: [], //chart的类型
      xAxis: [],
      yAxis: [],
      stack: "",
      data: null, //图表数据
      theme: null,
      color: [],
      areaStyleColor: [],
      color0: [],
      dataZoom: [],
      borderWidth: 0,
      borderColor: []
    };
  }
  //创建图表
  creatChart(config) {
    this.option.series = [];
    config.chartType.forEach((val, index) => {
      this.option.series.push({
        type: val,
        data: config.data[index],
        stack: config.stack[index] || "",
        itemStyle: {
          //折线拐点标志的样式。
          color: config.color[index],
          borderWidth: config.borderWidth[index] || 0,
          borderColor: config.borderColor[index] || "#fff"
        },
        symbol: "circle",
        symbolSize: 6,
        areaStyle: {
          color: config.areaStyleColor[index] || "rgba(255, 255, 255, 1)", //line时候的覆盖的区域
          opacity: 0.2
        }
      });
    });
  }
  monaxialOptions(config) {
    this.option = {
      title: {
        text: config.title || "",
        top: "2%",
        left: "42%",
        textStyle: {
          color: "#000000"
        }
      },
      legend: {
        textStyle: {
          color: "#000000"
        },
        bottom: "4%",
        selected: {},
        data: config.legendData || [] //图例数据 默认为空
      },
      grid: {
        //网格
        left: "8%",
        right: "8%",
        top: "15%",
        bottom: "18%"
      },
      textStyle: {
        color: "#000000"
      },
      xAxis: [
        {
          type: config.xAxisCategory || "value",
          show: config.xAxisShow || false,
          name: config.xAxisName || "",
          data: config.xAxisData || [],
          gridIndex: 0,
          nameTextStyle: {},
          axisLine: {
            lineStyle: {
              color: "#000000"
            }
          },
          triggerEvent: true,
          splitLine: {
            //去掉网格线
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: config.yAxisCategory || "value",
          show: config.yAxisShow || false,
          name: config.yAxisName || "",
          inverse: config.yAxis.inverse || false,
          data: config.xAxisData || [],
          gridIndex: 0,
          nameTextStyle: {
            color: "#000000"
          },
          axisLine: {
            lineStyle: {
              color: "#000000"
            }
          },
          splitLine: {
            //去掉网格线
            show: false
          }
        }
      ],
      dataZoom: [
        {
          //区域缩放
          type: "inside", //内置坐标轴内，不显示拖动条
          show: true,
          start: 0,
          end: 100,
          orient: "horizontal"
        }
      ],
      visualMap: [
        {
          show: false,
          max: 500,
          inRange: {
            symbolSize: [4, 100]
          }
        }
      ],
      series: []
    };
  }
}
