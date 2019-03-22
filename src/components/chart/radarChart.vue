<template>
  <div id="radarmodul" style="width:100%;height:100%;"></div>
</template>
<script>
import RadarChart from "../../charts/radarChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    let data1 = [[3, 8, 8, 9, 8, 6, 4, 6, 4, 7]];
    let data2 = [[8, 6, 5, 4, 7, 8, 6, 3.5, 7, 6]];
    let indicator = [
      { max: 10 },
      { max: 10 },
      { max: 10 },
      { max: 10 },
      { max: 10 },
      { max: 10 },
      { max: 10 },
      { max: 10 },
      { max: 10 },
      { max: 10 }
    ];
    this.radarModul = new RadarChart();
    this.radarModul.config.id = "radarmodul";
    this.radarModul.config.shape = "polygon"; //外型  默认：polygon:直线  circle:圆
    this.radarModul.config.indicator = indicator; //指示器
    this.radarModul.config.data = [data1, data2]; //数据
    this.radarModul.config.color = [
      //传入的颜色
      "rgba(135,232,222,1)",
      "rgba(255,169,64,1)"
    ];
    this.radarModul.config.theme = this.theme;
    this.radarModul.showChart(this.radarModul.config);
  }
};
</script>
<style lang="scss" scoped></style>
