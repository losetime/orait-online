<template>
  <div id="pieTwomodul" style="width:100%;height:100%;"></div>
</template>
<script>
import PieChart from "../../charts/pieChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data1 = [
      { name: "11", value: 155 },
      { name: "22", value: 200 },
      { name: "33", value: 155 },
      { name: "44", value: 200 },
      { name: "55", value: 155 },
      { name: "66", value: 200 },
      { name: "77", value: 155 },
      { name: "88", value: 200 }
    ];
    this.pieModul = new PieChart();
    this.pieModul.config.id = "pieTwomodul";
    this.pieModul.config.seriesData = [data1];
    this.pieModul.config.roseType = "radius";
    this.pieModul.config.center = [["50%", "50%"]];
    this.pieModul.config.radius = [["0%", "80%"]];
    this.pieModul.config.color = [
      [
        "rgba(255, 214, 231, 1)",
        "rgba(255, 173, 210, 1)",
        "rgba(255, 213, 145, 1)",
        "rgba(255, 169, 64, 1)",
        "rgba(255, 213, 145, 1)",
        "rgba(92, 219, 211, 1)",
        "rgba(255, 255, 184, 1)",
        "rgba(255, 236, 61, 1)"
      ]
    ];
    this.pieModul.config.theme = this.theme;
    this.pieModul.showChart(this.pieModul.config);
  }
};
</script>
<style lang="scss" scoped></style>
