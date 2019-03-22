<template>
  <div id="pieSixmodul" style="width:100%;height:100%;"></div>
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
      //这里的数据是以键值对的形式 value是值  是数组的嵌套 多组数据直接往里面加
      { name: "凉凉", value: 200 },
      { name: "黄花", value: 150 },
      { name: "菜菜", value: 50 }
    ];
    let data2 = [
      { name: "hf", value: 200 },
      { name: "kd", value: 150 },
      { name: "kl", value: 50 }
    ];
    this.pieModul = new PieChart(); //实例饼图对象
    this.pieModul.config.id = "pieSixmodul";
    this.pieModul.config.seriesData = [data1, data2]; //series中的数据
    this.pieModul.config.roseType = false; //是否显示为南丁格尔图
    this.pieModul.config.center = [["50%", "50%"], ["50%", "50%"]];
    this.pieModul.config.radius = [["0%", "75%"], ["75%", "90%"]]; //饼图的半径 0就是从圆心开始 到40%位置大小
    this.pieModul.config.itemShow = true;
    this.pieModul.config.color = [
      [
        "rgba(54, 207, 201, 1)",
        "rgba(135, 232, 222, 1)",
        "rgba(181, 245, 236, 1)"
      ],
      [
        "rgba(255, 169, 64, 1)",
        "rgba(255, 213, 145, 1)",
        "rgba(255, 231, 186, 1)"
      ]
    ];
    this.pieModul.config.theme = this.theme;
    this.pieModul.showChart(this.pieModul.config);
  }
};
</script>
<style lang="scss" scoped></style>
