<template>
  <div id="barFourmodul" style="width:100%;height:100%;"></div>
</template>
<script>
import BarChart from "../../charts/barChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = [[5, 6, 3, 4, 6, 4], [2, 5, 6, 3, 7, 5]];
    this.barModul = new BarChart();
    this.barModul.config.id = "barFourmodul";
    this.barModul.config.chartType = ["bar", "bar"];
    this.barModul.config.data = data;
    this.barModul.config.xAxisCategory = "category"; //分类默认是 value
    this.barModul.config.xAxisData = ["1", "2", "3", "4", "5", "6"];
    this.barModul.config.theme = this.theme;
    this.barModul.config.color = [
      "rgba(255, 169, 64, 1)",
      "rgba(135, 232, 222, 1)"
    ];
    this.barModul.showChart(this.barModul.config);
  }
};
</script>

<style lang="scss" scoped></style>
