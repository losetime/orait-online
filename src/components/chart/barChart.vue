<template>
  <div id="barmodul" style="width:100%;height:100%;"></div>
</template>
<script>
import BarChart from "../../charts/barChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = [
      [11, 12, 14, 13, 14, 14, 10, 12],
      [11, 12, 14, 13, 14, 11, 13, 10],
      [15, 14, 13, 13, 14, 12, 10, 13],
      [11, 12, 11, 13, 13, 11, 14, 10],
      [10, 10, 10, 14, 12, 9, 13, 15],
      [12, 13, 11, 10, 12, 10, 10, 13]
    ];
    this.barModul = new BarChart();
    this.barModul.config.id = "barmodul";
    this.barModul.config.chartType = ["bar", "bar", "bar", "bar", "bar", "bar"];
    this.barModul.config.data = data;
    this.barModul.config.borderWidth = [3, 3, 3, 3, 3, 3, 3, 3];
    this.barModul.config.borderColor = [
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff"
    ];
    this.barModul.config.barWidth = 26;
    this.barModul.config.stack = ["one", "one", "one", "one", "one", "one"];
    this.barModul.config.xAxisCategory = "category"; //坐标轴显影需要手动设置
    this.barModul.config.xAxisData = ["1", "2", "3", "4", "5", "6", "7", "8"];
    this.barModul.config.color = [
      "rgba(186, 231, 255, 1)",
      "rgba(145, 213, 255, 1)",
      "rgba(135, 232, 222, 1)",
      "rgba(54, 207, 201, 1)",
      "rgba(255, 192, 105, 1)",
      "rgba(250, 140, 22, 1)"
    ];
    this.barModul.config.theme = this.theme;
    this.barModul.showChart(this.barModul.config);
  }
};
</script>

<style lang="scss" scoped></style>
