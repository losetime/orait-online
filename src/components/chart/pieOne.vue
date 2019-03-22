<template>
  <div id="piemodul" style="width:100%;height:100%;"></div>
</template>
<script>
import PieChart from "../../charts/pieChart.js";
export default {
  data: () => {
    return {};
  },
  mounted() {
    //数据处理
    let data1 = [
      { name: "黄花", value: 155 }, //这里的数据是以键值对的形式 value是值  是数组的嵌套 多组数据直接往里面加
      { name: "菜菜", value: 122 },
      { name: "凉凉", value: 277 }
    ];
    //执行函数
    this.pieModul = new PieChart();
    this.pieModul.config.id = "piemodul";
    this.pieModul.config.seriesData = [data1];
    this.pieModul.config.center = [["50%", "50%"]];
    this.pieModul.config.radius = [["70%", "85%"]];
    this.pieModul.config.color = [
      [
        "rgba(135, 232, 222, 1)",
        "rgba(255, 236, 61, 1)",
        "rgba(255, 169, 64, 1)"
      ]
    ];
    this.pieModul.config.theme = this.theme;
    this.pieModul.showChart(this.pieModul.config);
  }
};
</script>
<style lang="scss" scoped></style>
