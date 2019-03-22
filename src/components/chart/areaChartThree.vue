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
      [8, 8.5, 8.2, 9, 8.7, 9.3, 9.1, 7.8, 7.5],
      [7, 7.5, 7.4, 8, 7.7, 8.3, 8.1, 6.8, 6.8],
      [6, 6.5, 5.4, 7, 6.7, 6.7, 5.6, 5.7, 6],
      [5, 5.5, 4.4, 6, 5.7, 5.7, 4.6, 4.7, 5]
    ];
    this.barModul = new BarChart();
    this.barModul.config.id = "areamodul";
    this.barModul.config.chartType = ["line", "line", "line", "line"];
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
      "9"
    ];
    // this.barModul.config.smooth = true; // 是否你要变弯
    this.barModul.config.theme = this.theme;
    this.barModul.config.color = [
      //线的颜色
      "rgba(250, 140, 22, 1)",
      "rgba(255, 228, 55,1)",
      "rgba(135, 232, 222, 1)",
      "rgba(85, 172, 238, 1)"
    ];
    this.barModul.config.areaStyleColor = [
      //面积图时候线所覆盖区域的颜色
      "rgba(250, 140, 22, 0.3)",
      "rgba(255, 228, 55, 0.5)",
      "rgba(135, 232, 222, 0.9)",
      "rgba(85, 172, 238, 0.5)"
    ];
    this.barModul.showChart(this.barModul.config);
  }
};
</script>
<style lang="scss" scoped></style>
