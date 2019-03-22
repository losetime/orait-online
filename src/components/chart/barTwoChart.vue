<template>
  <div id="barTwomodul" style="width:100%;height:100%;"></div>
</template>
<script>
import BarChart from "../../charts/barChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = [[8, 10, 6, 3, 5], [-8, -10, -6, -2, -5]];
    this.barModul = new BarChart();
    this.barModul.config.id = "barTwomodul";
    this.barModul.config.chartType = ["bar", "bar"];
    this.barModul.config.data = data;
    this.barModul.config.stack = ["one", "one"];
    this.barModul.config.borderWidth = [5, 5, 5, 5, 5]; //图表的边框宽度
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
    this.barModul.config.yAxisCategory = "category"; //分类默认是 value
    this.barModul.config.yAxisData = ["1", "2", "3", "4", "5"];
    this.barModul.config.yAxisInverse = true; //是否翻转
    this.barModul.config.theme = this.theme;
    this.barModul.config.color = [
      "rgba(135, 232, 222, 1)",
      "rgba(255, 169, 64, 1)"
    ];
    this.barModul.showChart(this.barModul.config);
  }
};
</script>

<style lang="scss" scoped></style>
