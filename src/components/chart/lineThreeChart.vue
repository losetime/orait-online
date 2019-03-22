<template>
  <div id="lineThreemodul" style="width:100%;height:100%;"></div>
</template>
<script>
import BarChart from "../../charts/barChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = [
      [450, 432, 401, 454, 590, 530, 510],
      [220, 282, 201, 234, 290, 430, 410]
    ];
    this.barModul = new BarChart();
    this.barModul.config.id = "lineThreemodul";
    this.barModul.config.chartType = ["line", "line"];
    this.barModul.config.data = data;
    this.barModul.config.xAxisCategory = "category";
    this.barModul.config.xAxisData = ["1", "2", "3", "4", "5", "6"];
    this.barModul.config.showSymbol = true;
    this.barModul.config.color = [
      "rgba(250, 140, 22, 1)",
      "rgba(135, 232, 222, 1)"
    ];
    this.barModul.config.theme = this.theme;
    this.barModul.showChart(this.barModul.config);
  }
};
</script>

<style lang="scss" scoped>
#lineThreemodul {
  box-sizing: border-box;
  padding-top: 50px;
}
</style>
