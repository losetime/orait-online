import SuperFunction from "./super/spuer_function";
export default class BarChart extends SuperFunction {
  constructor() {
    super();
    this.xAxisData = [];
    this.seriesData = [];
    this.seriesData2 = [];
    this.xAxisData2 = [];
    this.seriesAvg = [];
    this.config = {
      id: "",
      axis: [], //属于哪条轴线
      xAxisData: null,
      title: [],
      chartType: [], //chart的类型
      xAxis: [
        {
          show: true,
          name: "时间"
        },
        {
          show: true,
          name: "时间",
          labelData: null //x轴的其他信息
        }
      ],
      yAxis: [
        {
          show: true,
          name: "负荷（MW）"
        },
        {
          show: true,
          name: "电量（MW·h）"
        }
      ],
      stack: "",
      data: null, //图表数据
      theme: null,
      color: [],
      areaStyleColor: [],
      color0: [],
      dataZoom: []
    };
  }
  //创建图表
  creatChart(config) {
    config.chartType.forEach((val, index) => {
      this.option.series.push({
        type: val,
        data: config.data[index],
        stack: config.stack[index] || "",
        itemStyle: {
          //折线拐点标志的样式。
          color: config.color[index]
        },
        lineStyle: {
          width: 1
        },
        step: config.step || false, //在type为line时候 是否转换成梯形效果
        showSymbol: config.showSymbol || false, // 在line时候 是否显示标记图形
        smooth: config.smooth || false, //在type为line时候是否显示圆滑效果
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: config.areaStyleColor[index] // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(255,255,255,0.3)" // 100% 处的颜色
              }
            ]
          }
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
      //网格
      grid: {
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
      series: []
    };
  }
}
