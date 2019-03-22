<template>
  <div id="candlestick" style="width:100%;height:100%;"></div>
</template>
<script>
import candlestickChart from "../../charts/candlestick.js";
import test from "../../assets/service/txt.json";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data = test;
    let xAxisData = [
      "2017-10-1",
      "2017-10-2",
      "2017-10-3",
      "2017-10-4",
      "2017-10-5",
      "2017-10-6",
      "2017-10-7",
      "2017-10-8",
      "2017-10-9",
      "2017-10-10",
      "2017-10-11",
      "2017-10-12",
      "2017-10-13",
      "2017-10-14",
      "2017-10-15",
      "2017-10-16",
      "2017-10-17",
      "2017-10-18",
      "2017-10-19",
      "2017-10-20",
      "2017-10-21",
      "2017-10-22",
      "2017-10-23",
      "2017-10-24",
      "2017-10-25",
      "2017-10-26",
      "2017-10-27",
      "2017-10-27",
      "2017-10-27",
      "2017-10-27"
    ];
    let color = ["rgba(255, 213, 196, 1)"];
    this.candModul = new candlestickChart();
    this.candModul.config.id = "candlestick";
    this.candModul.config.chartType = ["k"];
    this.candModul.config.data = data;
    this.candModul.config.xAxisData = xAxisData;
    this.candModul.config.color = color;
    this.candModul.config.theme = this.theme;
    this.candModul.showChart(this.candModul.config);
  }
};
</script>
<style lang="scss" scoped></style>
