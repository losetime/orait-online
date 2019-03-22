<template>
  <div id="barSixmodul" style="width:100%;height:100%;"></div>
</template>
<script>
import BarChart from "../../charts/barChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = [[12, 14, 18, 16, 12]];
    this.barModul = new BarChart();
    this.barModul.config.id = "barSixmodul";
    this.barModul.config.chartType = ["bar"];
    this.barModul.config.data = data;
    this.barModul.config.yAxisCategory = "category"; //分类默认是 value
    this.barModul.config.yAxisData = ["1", "2", "3", "4", "5"];
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
