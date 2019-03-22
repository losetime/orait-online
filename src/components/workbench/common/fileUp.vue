<template>
  <div class="fileUp">
    <div class="mask">
      <div class="dialog-content">
        <div class="files">
          <div class="iconfont icon-guanbi close" @click="close"></div>
          <div class="import">
            <i class="iconfont icon-shangchuan"></i>
            <div class="dom">文件导入</div>
            <input
              type="file"
              @change="filesIn($event, 'inputData')"
              ref="inputData"
            />
          </div>
          <div class="download">
            <i class="iconfont icon-xiazai"></i>
            <div class="dom" @click="downLoad">下载15分钟模板</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dialogBox",
  data() {
    return {
      formdata: null
    };
  },
  methods: {
    // 文件导入
    filesIn(obj, arg) {
      //显示loading动画
      this.$store.commit("set_loading", true);
      let files = obj.target.files;
      // 实例化FormData 对象
      this.formdata = new FormData();
      //这里的file需要跟后台接收参数保持一致
      this.formdata.append("file", files[0]);
      //置空value值，否则下次相同文件名不会触发change事件
      this.$refs[arg].value = null;
      this.$emit("uploadFile", this.formdata);
    },
    //下载数据模板
    downLoad() {
      this.$emit("downLoad");
    },
    //关闭
    close() {
      this.$emit("closeFileUpBox", false);
    }
  }
};
</script>
<style scoped lang="scss">
.fileUp {
  width: 100%;
  height: 100%;
  position: relative;
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
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      .files {
        width: 600px;
        height: 220px;
        background-color: #fff;
        border-radius: 20px;
        display: flex;
        overflow: hidden;
        position: relative;
        .close {
          position: absolute;
          top: 10px;
          right: 20px;
          z-index: 10;
          cursor: pointer;
        }
        .import,
        .download {
          width: 300px;
          height: 220px;
          display: flex;
          justify-content: center;
          position: relative;
          i {
            font-size: 70px;
            margin-top: 52px;
            color: var(--systemColor);
          }
          input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
          }
          .dom {
            width: 187px;
            height: 40px;
            border: 1px solid var(--systemColor);
            position: absolute;
            top: 140px;
            text-align: center;
            line-height: 40px;
            border-radius: 20px;
            color: var(--systemColor);
            font-size: 16px;
            font-weight: 400;
            cursor: pointer;
            &:hover {
              background-color: #fdece5;
            }
            &:active {
              color: #fff;
              background-color: #ff773e;
            }
          }
        }
        .import:hover .dom {
          background-color: #fdece5;
        }
        .import:active .dom {
          background-color: #ff773e;
        }
      }
    }
  }
}
</style>
