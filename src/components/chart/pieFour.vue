<template>
  <div id="pieFourmodul" style="width:100%;height:100%;"></div>
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
      { name: "黄花", value: 100 }, //这里的数据是以键值对的形式 value是值  是数组的嵌套 多组数据直接往里面加
      { name: "菜菜", value: 100 },
      { name: "凉凉", value: 200 }
    ];
    this.pieModul = new PieChart(); //实例饼图对象
    this.pieModul.config.id = "pieFourmodul";
    this.pieModul.config.seriesData = [data1]; //series中的数据
    this.pieModul.config.roseType = false; //是否显示为南丁格尔图
    this.pieModul.config.center = [["50%", "50%"]];
    this.pieModul.config.radius = [["0%", "75%"]]; //饼图的半径 0就是从圆心开始 到40%位置大小
    this.pieModul.config.itemShow = true;
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
