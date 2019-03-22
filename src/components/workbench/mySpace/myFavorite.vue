<template>
  <div class="myTemplate-wrap">
    <div class="chart-wrap">
      <div class="chart-item" v-for="(item, index) in data" :key="index">
        <div class="b-info">
          <p class="time">{{ item.time }}</p>
          <p class="from">来自于{{ item.from }}</p>
        </div>
        <div class="t-info">
          <p class="title">{{ item.title }}</p>
          <p class="favorite">
            <i class="iconfont icon-xihuan"></i>
            <span>{{ item.favorite }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          title: "海滩风柱状图",
          src: "表1",
          time: "2019-1-23",
          from: "我",
          favorite: 100
        },
        {
          id: 2,
          title: "海滩风柱状图",
          src: "表1",
          time: "2019-1-23",
          from: "我",
          favorite: 123
        },
        {
          id: 3,
          title: "海滩风柱状图",
          src: "表1",
          time: "2019-1-23",
          from: "我",
          favorite: 96
        },
        {
          id: 4,
          title: "海滩风柱状图",
          src: "表1",
          time: "2019-1-23",
          from: "我",
          favorite: 150
        }
      ],
      showHendleMenu: null
    };
  },
  methods: {
    controlBtn(index) {
      this.showHendleMenu === -1
        ? (this.showHendleMenu = index)
        : (this.showHendleMenu = -1);
    }
  },
  mounted() {},
  components: {}
};
</script>
<style lang="scss" scoped>
.myTemplate-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .chart-wrap {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 71%;
    height: 100%;
    .chart-item {
      display: flex;
      flex-direction: column-reverse;
      width: 420px;
      height: 289px;
      margin: 0 30px 54px 0;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
      border-radius: 6px;
      font-size: var(--FtSize_four);
      color: #9a8c87;
      .t-info {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 30px;
        line-height: 30px;
        p:first-child {
          margin-left: 30px;
          font-size: var(--FtSize_second);
          color: #554843;
        }
        p:nth-child(2) {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 50px;
          margin-right: 30px;
          cursor: pointer;
          i {
            color: #fa8c16;
          }
        }
        .handleMenu {
          position: absolute;
          bottom: -60px;
          right: -25px;
        }
      }
      .b-info {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 30px;
        line-height: 30px;
        p {
          margin-right: 30px;
        }
      }
    }
  }
}
</style>
