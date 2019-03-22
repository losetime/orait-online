//K线

import SuperChart from "./super/super_chart";
// import { chartTheme } from "./theme";
export default class ExtendDoubleAxis extends SuperChart {
  constructor() {
    super();
    this.xAxisData = [];
    this.seriesData = [];
    this.seriesData2 = [];
    this.xAxisData2 = [];
    this.seriesAvg = [];
    this.dataIndex = 0;
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
  //双轴通用函数
  creat_boxplot(config) {
    this.option.series = [];
    config.chartType.forEach((val, index) => {
      if (config.chartType[index] === "candlestick") {
        this.option.series.push({
          name: config.title[index],
          type: val,
          data: config.data[index],
          yAxisIndex: config.axis[index],
          xAxisIndex: config.axis[index],
          barMaxWidth: 50,
          progressive: 600, //渐进式渲染阈值
          itemStyle: {
            normal: {
              color: config.color[index],
              borderColor: null
              // color0: config.color0[index]
            }
          }
        });
      } else {
        // console.log(config.borderColor[index]);
        this.option.series.push({
          name: config.title[index],
          type: val,
          data: config.data[index],
          yAxisIndex: config.axis[index],
          xAxisIndex: config.axis[index],
          barMaxWidth: 50,
          smooth: "none",
          symbol: "none",
          itemStyle: {
            color: config.color[index]
          }
        });
      }
    });
    this.option.legend.data = config.title;
    this.option.legend.selected["MA7"] = false;
    this.option.xAxis[0].data = config.xAxisData;
    this.option.xAxis[1].data = config.xAxisData;
    this.chart.setOption(this.option, true);
  }
  // creat_line(config) {
  //   console.log(config);
  //   this.option.series = [];
  //   config.chartType.forEach((val, index) => {
  //     this.option.series.push({
  //       name: config.title[index],
  //       type: val,
  //       data: config.data[index],
  //       yAxisIndex: config.axis[index],
  //       xAxisIndex: config.axis[index],
  //       itemStyle: {
  //         color: config.color[0]
  //       }
  //     });
  //   });
  //   this.option.legend.data = config.title;
  //   // this.option.legend.selected["MA7"] = false;
  //   this.option.xAxis[0].data = config.xAxisData;
  //   this.option.xAxis[1].data = config.xAxisData;
  //   this.chart.setOption(this.option, true);
  // }
  showChart(config) {
    this.init(config);
    this.creat_boxplot(config);
    this.changeTheme(config.theme);
    this.chart.setOption(this.option);
  }
  updateDate(config) {
    this.option.dataZoom[0].start = this.config.dataZoom[0];
    this.option.dataZoom[0].end = this.config.dataZoom[1];
    this.creat_boxplot(config);
    this.chart.setOption(this.option);
  }
}
