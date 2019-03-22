<template>
  <div id="scatterTwomodul" style="100%;height:100%;"></div>
</template>
<script>
import Scatter from "../../charts/barChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data1 = [];
    let data2 = [];
    let xAxisData = [];
    for (let i = 0; i < 50; i++) {
      xAxisData.push(i);
      data1.push(Math.random() * 100);
      data2.push(Math.random() * 100);
    }
    this.barModul = new Scatter();
    this.barModul.config.id = "scatterTwomodul";
    this.barModul.config.chartType = ["scatter", "scatter"];
    this.barModul.config.data = [data1, data2];
    this.barModul.config.xAxisCategory = "category"; //坐标轴显影需要手动设置
    this.barModul.config.xAxisData = xAxisData;
    this.barModul.config.color = [
      "rgba(250, 140, 22, 0.5)",
      "rgba(76, 223, 192, 0.3)"
    ];
    this.barModul.config.borderColor = ["#FA8C16", "#87E8DE"];
    this.barModul.config.borderWidth = [1, 1];
    this.barModul.config.theme = this.theme;
    this.barModul.showChart(this.barModul.config);
  }
};
</script>

<style lang="scss" scoped></style>
