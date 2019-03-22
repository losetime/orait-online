<template>
  <div id="heatMapmodul" style="width:100%;height:100%;"></div>
</template>
<script>
import HeatMapChart from "../../charts/heatMapChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = [
      [0, 0, 0],
      [1, 0, 1],
      [2, 0, 2],
      [3, 0, 1],
      [3, 0, 3],
      [4, 0, 3],
      [0, 1, 0],
      [1, 1, 0],
      [2, 1, 1],
      [3, 1, 0],
      [4, 1, 1],
      [0, 2, 1],
      [1, 2, 1],
      [2, 2, 2],
      [3, 2, 1],
      [4, 2, 2],
      [0, 3, 0],
      [1, 3, 2],
      [2, 3, 3],
      [3, 3, 2],
      [4, 3, 4],
      [0, 4, 3],
      [1, 4, 4],
      [2, 4, 6],
      [3, 4, 4],
      [4, 4, 6],
      [0, 5, 0],
      [1, 5, 4],
      [2, 5, 6],
      [3, 5, 4],
      [4, 5, 6],
      [0, 6, 3],
      [1, 6, 5],
      [2, 6, 8],
      [3, 6, 6],
      [4, 6, 8],
      [0, 7, 1],
      [1, 7, 3],
      [2, 7, 4],
      [3, 7, 3],
      [4, 7, 5]
    ];
    let hours = [
      "0-2",
      "3-5",
      "6-8",
      "9-11",
      "12-14",
      "15-17",
      "18-20",
      "21-23"
    ];
    let days = ["餐厅", "便利店", "卫生间", "休息区", "加油站"];
    data = data.map(function(item) {
      return [item[1], item[0], item[2] || "-"];
    });
    //执行函数
    this.heatMapModul = new HeatMapChart();
    this.heatMapModul.config.id = "heatMapmodul";
    this.heatMapModul.config.seriesData = data; //数据
    this.heatMapModul.config.xAxisData = hours; //传入x轴的数据
    this.heatMapModul.config.yAxisData = days; //传入x轴的数据
    this.heatMapModul.config.color = [
      "rgba(250, 140, 22, 1)",
      "rgba(255, 192, 105, 1)",
      "rgba(255, 231, 186, 1)"
    ];
    this.heatMapModul.config.theme = this.theme;
    this.heatMapModul.showChart(this.heatMapModul.config);
  }
};
</script>
<style lang="scss" scoped></style>
