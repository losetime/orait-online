<template>
  <div id="linemodul" style="width:100%;height:100%;"></div>
</template>
<script>
import BarChart from "../../charts/barChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = [[3, 4, 3, 5, 4, 3], [4, 4.5, 4, 3, 5, 4]];
    this.barModul = new BarChart();
    this.barModul.config.id = "linemodul";
    this.barModul.config.chartType = ["line", "line"];
    this.barModul.config.data = data;
    this.barModul.config.lineWidth = 3;
    this.barModul.config.xAxisCategory = "category";
    this.barModul.config.xAxisData = ["1", "2", "3", "4", "5", "6"];
    this.barModul.config.smooth = true; // 是否平滑
    this.barModul.config.theme = this.theme;
    this.barModul.config.color = [
      "rgba(250, 140, 22, 1)",
      "rgba(135, 232, 222, 1)"
    ];
    this.barModul.showChart(this.barModul.config);
  }
};
</script>
<style lang="scss" scoped>
#linemodul {
  box-sizing: border-box;
  padding-top: 50px;
}
</style>
