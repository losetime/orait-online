<template>
  <div id="barThreemodul" style="width:100%;height:100%;"></div>
</template>
<script>
import BarChart from "../../charts/barChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = [[11, 12, 14, 13, 14, 13, 10, 5], [12, 8, 11, 14, 11, 10, 7, 5]];
    this.barModul = new BarChart();
    this.barModul.config.id = "barThreemodul";
    this.barModul.config.chartType = ["bar", "bar"];
    this.barModul.config.data = data;
    this.barModul.config.barWidth = 25;
    this.barModul.config.borderWidth = [3, 3, 3, 3, 3, 3, 3, 3]; //图表的边框宽度
    this.barModul.config.borderColor = [
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff"
    ];
    this.barModul.config.stack = ["one", "one"];
    this.barModul.config.xAxisCategory = "category"; //分类默认是 value
    this.barModul.config.xAxisData = ["1", "2", "3", "4", "5", "6", "7", "8"];
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
