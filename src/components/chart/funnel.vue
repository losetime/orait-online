<template>
  <div class="funnel">
    <div class="content"><div id="funnelmodu"></div></div>
  </div>
</template>
<script>
import funnel from "../../charts/funnel.js";
export default {
  data: () => {
    return {};
  },
  methods: {
    testPlanFn() {
      //数据处理
      let legendData = ["10%", "20%", "20%", "20%", "40%"];
      let top = 25;
      let seriesData = [
        { value: 20, name: "10%", itemStyle: { color: "#FFD591" } },
        { value: 33, name: "20%", itemStyle: { color: "#FFC069" } },
        { value: 50, name: "20%", itemStyle: { color: "#FFE7BA" } },
        { value: 70, name: "20%", itemStyle: { color: "#B5F5EC" } },
        { value: 95, name: "40%", itemStyle: { color: "#87E8DE" } }
      ];
      //执行函数
      this.funnelmodu = new funnel();
      this.funnelmodu.config.id = "funnelmodu";
      this.funnelmodu.config.legendData = legendData;
      this.funnelmodu.config.top = top;
      this.funnelmodu.config.seriesData = seriesData;
      this.funnelmodu.config.theme = this.theme;
      this.funnelmodu.showChart(this.funnelmodu.config);
    }
  },
  mounted() {
    this.testPlanFn();
  }
};
</script>
<style lang="scss" scoped>
.funnel {
  width: 100%;
  height: 100%;
  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    > div {
      flex: 1;
    }
  }
}
</style>
