<template>
  <div id="mapmodul" style="width:100%;height:100%;"></div>
</template>
<script>
import AnalysisMap from "../../charts/analysisMap.js";
export default {
  data: () => {
    return {
      mapmodul: null
    };
  },
  mounted() {
    this.mapmodul = new AnalysisMap();
    this.mapmodul.id = "mapmodul";
    this.mapmodul.init(this.mapmodul.id);
    this.mapmodul.showChart();
  },
  destroyed() {}
};
</script>
<style lang="scss" scoped></style>
