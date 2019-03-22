<template>
  <div id="boxplot" style="width:100%;height:100%;"></div>
</template>
<script>
import boxplotChart from "../../charts/candlestick.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = [
      [
        [655, 850, 940, 980, 1070],
        [760, 800, 845, 885, 960],
        [780, 840, 855, 880, 940],
        [720, 767.5, 815, 865, 920],
        [740, 807.5, 810, 870, 950]
      ]
    ];
    let xAxisData = [
      "2017-10-1",
      "2017-10-2",
      "2017-10-3",
      "2017-10-4",
      "2017-10-5"
    ];
    let color = ["rgba(255, 213, 196, 1)"];
    this.candModul = new boxplotChart();
    this.candModul.config.id = "boxplot";
    this.candModul.config.chartType = ["boxplot"];
    this.candModul.config.data = data;
    this.candModul.config.xAxisData = xAxisData;
    this.candModul.config.color = color;
    this.candModul.config.theme = this.theme;
    this.candModul.showChart(this.candModul.config);
  }
};
</script>
<style lang="scss" scoped></style>
