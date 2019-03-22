import SuperFunction from "./super/spuer_function";
export default class funnel extends SuperFunction {
  constructor() {
    super();
    this.chart = null;
    this.option = null;
    this.config = {};
  }
  creatChart(config) {}
  //漏斗图的配置
  monaxialOptions(config) {
    this.option = {
      title: {
        text: config.title || ""
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%",
        show: false
      },
      legend: {
        data: config.legendData || [],
        top: config.top || "",
        show: false
      },
      calculable: true,
      series: [
        {
          type: "funnel",
          left: "10%",
          top: 60,
          //x2: 80,
          bottom: 60,
          width: "80%",
          height: "70%",
          min: 20,
          max: 100,
          minSize: "20%",
          maxSize: "100%",
          sort: "descending",
          gap: 0,
          label: {
            show: true,
            position: "inside"
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: "solid"
            }
          },
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 0
          },
          emphasis: {
            label: {
              fontSize: 20
            }
          },
          data: config.seriesData || []
        }
      ]
    };
  }
}
