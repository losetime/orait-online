//负荷K线分析
import echarts from "echarts";
import "echarts/map/js/china";
export default class AnalysisMap {
  constructor() {
    this.option = {};
    this.originalData = null;
    this.chart = null;
  }
  init(divId) {
    this.chart = echarts.init(document.getElementById(divId));
    this.initChartOption();
    console.log(13);
  }
  resize() {
    this.chart.resize();
  }
  showChart() {
    this.chart.setOption(this.option, true);
  }
  initChartOption() {
    let data = [
      {
        name: "齐齐哈尔"
      },
      {
        name: "盐城"
      },
      {
        name: "青岛"
      },
      {
        name: "金昌"
      },
      {
        name: "泉州"
      },
      {
        name: "拉萨"
      },
      {
        name: "上海浦东"
      },
      {
        name: "攀枝花"
      },
      {
        name: "威海"
      },
      {
        name: "承德"
      },
      {
        name: "汕尾"
      },
      {
        name: "克拉玛依"
      },
      {
        name: "重庆市"
      }
    ];

    let geoCoordMap = {
      齐齐哈尔: [123.97, 47.33],
      盐城: [120.13, 33.38],
      青岛: [120.33, 36.07],
      金昌: [102.188043, 38.520089],
      泉州: [118.58, 24.93],
      拉萨: [91.11, 29.97],
      上海浦东: [121.48, 31.22],
      攀枝花: [101.718637, 26.582347],
      威海: [122.1, 37.5],
      承德: [117.93, 40.97],
      汕尾: [115.375279, 22.786211],
      克拉玛依: [84.77, 45.59],
      重庆市: [108.384366, 30.439702]
    };
    let convertData = function(data, map) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = map[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    };
    this.option = {
      color: "rgba(254, 236, 210, 1)",
      title: {
        text: "",
        top: "2%",
        left: "42%",
        textStyle: {
          color: "#000000"
        }
      },
      tooltip: {
        show: false,
        trigger: "item",
        formatter: function(params) {
          return params.name + " : " + params.value[2];
        }
      },
      legend: {
        show: false,
        orient: "vertical",
        y: "bottom",
        x: "right",
        data: [],
        textStyle: {
          color: "#000000"
        }
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
      geo: {
        map: "china",
        zoom: 1,
        roam: true,
        width: "65%",
        left: "19%",
        label: {
          normal: {
            //显示省份标签
            show: false
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            areaColor: "#FEECD2",
            borderColor: "#ffffff",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#F3F3F3"
          }
        }
      },
      series: [
        {
          name: "异常",
          type: "effectScatter",
          roam: "scale",
          symbol: "circle",
          coordinateSystem: "geo",
          data: convertData(data, geoCoordMap),
          symbolSize: function() {
            return Math.floor(Math.random() * 15);
          },
          label: {
            normal: {
              show: false,
              formatter: function(params) {
                return params.value[2];
              },
              textStyle: {
                fontSize: "15"
              }
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: "#FA8C16"
            }
          }
        }
      ]
    };
  }
}
