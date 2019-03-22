<template>
  import { clearTimeout } from 'timers';
  <div id="select-wrap">
    <div id="select-content" @click="reform" ref="box">
      <span>{{ text }}</span>
      <i class="iconfont icon-xialakuang" ref="arrow"></i>
      <div class="triangle" v-show="contentShow === true" ref="triangle"></div>
    </div>
    <ul v-show="contentShow === true" ref="content">
      <li
        v-for="(item, index) in list"
        :key="index"
        ref="height"
        @click="get_text(item.label, item.value)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["list", "width", "height"],
  data() {
    return {
      text: "",
      contentShow: false
    };
  },
  methods: {
    reform() {
      if (this.contentShow === false) {
        this.contentShow = true;
        this.$nextTick(() => {
          let a = this.$refs.height[0].offsetHeight;
          this.$refs.content.style.transition = "height .5s ease";
          this.$refs.content.style.height = a * this.list.length + "px";
          this.$refs.arrow.style.transition = "transform .5s ease";
          this.$refs.arrow.style.transform = "rotateZ(-180deg)";
        });
      } else if (this.contentShow === true) {
        let timeID = setTimeout(() => {
          this.contentShow = false;
          clearTimeout(timeID);
        }, 200);
        this.$refs.content.style.transition = "height .2s linear";
        this.$refs.content.style.height = 0 + "px";
        this.$refs.arrow.style.transition = "transform .2s linear";
        this.$refs.arrow.style.transform = "rotateZ(0deg)";
      }
    },
    //获取文本
    get_text(val, numVal) {
      this.text = val;
      this.$emit("callback", numVal);
      this.reform();
    }
  },
  mounted() {
    this.$refs.box.style.width =
      this.width === null ? 100 + "px" : this.width + "px";
    this.$refs.box.style.height =
      this.height === null ? 30 + "px" : this.height + "px";
  }
};
</script>
<style lang="scss">
#select-wrap {
  display: inline-block;
  #select-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // width: 200px;
    // height: 50px;
    padding: 0px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    span {
      overflow: hidden;
      white-space: nowrap;
    }
    .triangle {
      position: absolute;
      left: 50%;
      top: 101%;
      display: block;
      width: 0;
      height: 0;
      content: "";
      border: 5px solid transparent;
      border-top-width: 0;
      border-bottom: 5px solid #fff;
    }
  }
  ul {
    display: block;
    height: 0px;
    overflow: hidden;
    margin-top: 4px;
    border-radius: 10px;
    box-shadow: 0px -1px 10px #ccc;
    li {
      display: block;
      padding: 5px 15px;
      text-align: center;
      white-space: nowrap;
    }
  }
}
</style>
