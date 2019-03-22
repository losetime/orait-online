<template>
  <div class="myTemplate-wrap" @click="showHendleMenu = -1">
    <div class="chart-wrap">
      <div
        class="chart-item"
        v-for="(item, index) in data"
        :key="index"
        @dblclick="goUseTemplate"
      >
        <div class="b-info">
          <span class="time">{{ item.time }}</span>
          <span class="from">来自于{{ item.from }}</span>
        </div>
        <div class="t-info">
          <span class="title">{{ item.title }}</span>
          <span
            class="iconfont icon-liebiaoshezhijian"
            @click.stop="controlBtn(index)"
          ></span>
          <hendleMenu
            class="handleMenu"
            v-show="showHendleMenu === index"
          ></hendleMenu>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hendleMenu from "../common/hendleMenu";
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          title: "海滩风柱状图",
          src: "表1",
          time: "2019-1-23",
          from: "我"
        },
        {
          id: 2,
          title: "海滩风柱状图",
          src: "表1",
          time: "2019-1-23",
          from: "我"
        },
        {
          id: 3,
          title: "海滩风柱状图",
          src: "表1",
          time: "2019-1-23",
          from: "我"
        },
        {
          id: 4,
          title: "海滩风柱状图",
          src: "表1",
          time: "2019-1-23",
          from: "我"
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
    },
    goUseTemplate() {
      this.$router.push("/useTemplate");
    }
  },
  mounted() {},
  components: {
    hendleMenu
  }
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
        span:first-child {
          margin-left: 30px;
          font-size: var(--FtSize_second);
        }
        span:nth-child(2) {
          width: 30px;
          margin-right: 20px;
          text-align: center;
          cursor: pointer;
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
        span {
          margin-right: 30px;
        }
      }
    }
  }
}
</style>
