import SuperFunction from "./super/spuer_function";
export default class funnel extends SuperFunction {
  constructor() {
    super();
    this.chart = null;
    this.option = null;
    this.config = {
      id: "",
      axis: [], //属于哪条轴线
      xAxisData: null,
      title: [],
      chartType: [], //chart的类型
      xAxis: [
        {
          show: false,
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
      color0: [],
      dataZoom: []
    };
  }
  creatChart(config) {
    this.option.series = [];
    config.chartType.forEach((val, index) => {
      this.option.series.push({
        name: config.title[index],
        type: val,
        data: config.data[index],
        barMaxWidth: 50,
        progressive: 600, //渐进式渲染阈值
        itemStyle: {
          normal: {
            color: config.color[index],
            borderColor: "rgba(250, 140, 22, 1)"
            // color0: config.color0[index]
          }
        }
      });
    });
    this.option.legend.data = config.title;
    this.option.xAxis[0].data = config.xAxisData;
    this.chart.setOption(this.option, true);
  }
  monaxialOptions(config) {
    this.option = {
      title: {
        text: config.title,
        top: "2%",
        left: "42%",
        textStyle: {
          color: "#000000"
        }
      },
      tooltip: {
        show: false,
        trigger: "axis",
        axisPointer: {
          type: "cross",
          animation: false,
          label: {
            backgroundColor: "#505765"
          }
        }
      },
      legend: {
        textStyle: {
          color: "#000000"
        },
        bottom: "4%",
        selected: {}
      },
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
          type: "category",
          show: false,
          name: config.xAxis[0].name,
          gridIndex: 0,
          nameTextStyle: {
            // padding: 10
          },
          axisLine: {
            lineStyle: {
              color: "#000000"
            }
          },
          triggerEvent: true,
          splitLine: {
            //去掉网格线
            show: false
          },
          data: []
        }
      ],
      yAxis: [
        {
          type: "value",
          show: false,
          name: config.yAxis[0].name,
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
          // xAxisIndex: [0, 1],
          orient: "horizontal"
        }
      ],
      series: []
    };
  }
}
