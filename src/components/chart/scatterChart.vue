<template>
  <div id="scattermodul" style="width:100%;height:100%;"></div>
</template>
<script>
import Scatter from "../../charts/scatter.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let xAxisData = [];
    for (let i = 0; i < 20; i++) {
      xAxisData.push(i);
      data1.push(Math.random() * 100);
      data2.push(Math.random() * 100);
      data3.push(Math.random() * 100);
    }
    this.barModul = new Scatter();
    this.barModul.config.id = "scattermodul";
    this.barModul.config.chartType = ["scatter", "scatter", "scatter"];
    this.barModul.config.data = [data1, data2, data3];
    this.barModul.config.xAxisCategory = "category"; //坐标轴显影需要手动设置
    this.barModul.config.xAxisData = xAxisData;
    this.barModul.config.color = [
      "rgba(250, 140, 22, 0.5)",
      "rgba(76, 223, 192, 0.3)",
      "rgba(74, 159, 245, 0.3)"
    ];
    this.barModul.config.borderColor = ["#FA8C16", "#87E8DE", "#4A9FF5"];
    this.barModul.config.borderWidth = [1, 1, 1];
    this.barModul.config.theme = this.theme;
    this.barModul.showChart(this.barModul.config);
  }
};
</script>

<style lang="scss" scoped></style>
