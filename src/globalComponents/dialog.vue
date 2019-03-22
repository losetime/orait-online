<template>
  <div class="dialog">
    <div class="mask">
      <div class="dialog-content">
        <i class="iconfont icon-guanbi closeIcon" @click="close"></i>
        <div class="title"><span>提示</span></div>
        <div class="tip-info">
          <span>{{ content }}</span>
          <span v-if="content === null">这是一个提示</span>
        </div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["content"],
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("dialogClose");
    }
  }
};
</script>
<style lang="scss">
.dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    .dialog-content {
      position: relative;
      width: 500px;
      height: 200px;
      border-radius: 10px;
      background-color: #fff;
      i {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #ff773e;
        cursor: pointer;
      }
      .title {
        width: 100%;
        height: 50px;
        padding-left: 20px;
        box-sizing: border-box;
        font: 18px/50px "SourceHanSansSC-Normal";
        color: #707070;
      }
      .tip-info {
        width: 100%;
        height: 150px;
        padding: 10px 20px;
        box-sizing: border-box;
        span {
          display: block;
          font: 14px "SourceHanSansSC-Normal";
          color: #a49691;
        }
      }
      .cancel,
      .dom {
        position: absolute;
        bottom: 20px;
        width: 15%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 30px;
        cursor: pointer;
      }
      .cancel {
        right: 120px;
        border: 1px solid #ff773e;
        box-sizing: border-box;
        color: #ff773e;
        &:hover {
          background-color: #fdece5;
        }
        &:active {
          color: #fff;
          background-color: #ff773e;
          box-shadow: 0 0 10px #fff inset;
        }
      }
      .dom {
        right: 30px;
        background-color: rgb(255, 119, 62);
        color: #fff;
        &:hover {
          background-color: rgba(255, 119, 62, 0.8);
        }
        &:active {
          color: #fff;
          box-shadow: 0 0 10px #fff inset;
        }
      }
    }
  }
}
</style>
