<template>
  <div id="areamodul" style="width:100%;height:100%;"></div>
</template>
<script>
import BarChart from "../../charts/areaChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = [
      [3, 1.5, 4, 3.5, 3.5, 1, 5.5, 4, 5.5, 4],
      [2, 2.5, 3, 2.2, 2.5, 4, 2.2, 6, 4.5, 4]
    ];
    this.barModul = new BarChart();
    this.barModul.config.id = "areamodul";
    this.barModul.config.chartType = ["line", "line"];
    this.barModul.config.data = data;
    this.barModul.config.xAxisCategory = "category";
    this.barModul.config.xAxisData = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ];
    this.barModul.config.smooth = true; // 是否平滑
    this.barModul.config.theme = this.theme;
    this.barModul.config.color = [
      //线的颜色
      "rgba(250, 140, 22, 1)",
      "rgba(135, 232, 222, 1)"
    ];
    this.barModul.config.areaStyleColor = [
      //面积图时候线所覆盖区域的颜色
      "rgba(250, 140, 22, 0.3)",
      "rgba(135, 232, 222, 0.9)"
    ];
    this.barModul.showChart(this.barModul.config);
  }
};
</script>
<style lang="scss" scoped></style>
