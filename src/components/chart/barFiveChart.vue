<template>
  <div id="barFivemodul" style="width:100%;height:100%;"></div>
</template>
<script>
import BarChart from "../../charts/barChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = [[6, 4, 6, 3], [10, 6, 6, 9], [7, 7, 7, 6], [6, 9, 11, 9]];
    this.barModul = new BarChart();
    this.barModul.config.id = "barFivemodul";
    this.barModul.config.chartType = ["bar", "bar", "bar", "bar"];
    this.barModul.config.data = data;
    this.barModul.config.xAxisCategory = "category"; //分类默认是 value
    this.barModul.config.xAxisData = ["1", "2", "3"];
    this.barModul.config.theme = this.theme;
    this.barModul.config.color = [
      "rgba(255, 169, 64, 1)",
      "rgba(255, 228, 55, 1)",
      "rgba(54, 207, 201, 1)",
      "rgba(135, 232, 222, 1)"
    ];
    this.barModul.showChart(this.barModul.config);
  }
};
</script>

<style lang="scss" scoped></style>
