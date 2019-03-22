import SuperFunction from "./super/spuer_function";
export default class GraphChart extends SuperFunction {
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
  //关系图的配置
  monaxialOptions(config) {
    this.option = {
      color: config.color,
      title: {
        //标题
        text: config.title,
        top: "5%",
        left: "42%",
        textStyle: {
          color: "#000000"
        }
      },
      legend: {
        data: config.legendData,
        show: config.legendShow,
        selectedMode: config.legendSelectedMode
      },
      symbolSize: 25,
      // color: config.colors,
      series: [
        {
          //
          type: "graph",
          data: config.seriesData,
          layout: "force", // 图的布局  采用力引导布局
          roam: config.roam, //是否开启鼠标缩放和平移
          draggable: true, //能否实现拖拽
          links: config.links,
          categories: config.categories,
          force: {
            repulsion: 50,
            gravity: 0.7
          },
          label: {
            // 图形上的文本标签
            normal: {
              position: "inside",
              // textStyle: {
              //     fontSize: 16
              // },
              show: config.labelShow
            }
          },
          edgeLabel: {
            // 是否显示标签
            normal: {
              formatter: function(param) {
                return param.data.category;
              },
              show: config.edgeLabelShow
              // textStyle: {
              //     fontSize: 20
              // }
            }
          }
        }
      ]
    };
  }
}
