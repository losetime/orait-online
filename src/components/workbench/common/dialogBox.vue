<template>
  <div class="dialogBox">
    <div class="mask">
      <div class="dialog-content">
        <div class="judge" v-show="dialogBoxInfo.type === 0">
          <i class="iconfont icon-guanbi closeIcon" @click="close"></i>
          <div class="title"><span>覆盖模拟数据</span></div>
          <div class="tip-info">
            <span>{{ dialogBoxInfo.info }}</span>
          </div>
          <div class="handle-wrap">
            <div class="cancel" @click="close">取消</div>
            <div class="dom">
              确认
              <input
                type="file"
                @change="filesIn($event, 'dataLoseBtn')"
                ref="dataLoseBtn"
              />
            </div>
          </div>
        </div>

        <div class="badData" v-show="dialogBoxInfo.type === 1">
          <div class="bad-title">
            <i class="prompt iconfont icon-yunpingtaidenglu-tishi"></i>
            <span>出现坏数据</span>
          </div>
          <div class="bad-content">
            <span>坏数据处理后才可查看图标和进行模拟操作</span>
          </div>
          <div class="bad-know" @click.stop="processingData">我知道了</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dialogBox",
  props: {
    //显示不同模块的参数(需要传入)
    dialogBoxInfo: {
      type: Object
    }
  },
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
    //关闭,取消
    close() {
      this.$emit("closeDialogBox", false);
      this.$emit("cancel");
    },
    //点击我知道了返回一个函数
    processingData() {
      this.$emit("processingData");
    }
  }
};
</script>
<style scoped lang="scss">
.dialogBox {
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
      .judge {
        width: 500px;
        height: 156px;
        background-color: #fff;
        border-radius: 10px;
        position: relative;
        .title {
          width: 100%;
          height: 37%;
          border-bottom: 1px solid #d9d9d9;
          display: flex;
          align-items: center;
          span {
            margin-left: 6%;
            color: #707070;
            font-size: var(--FtSize_four);
            font-family: "SourceHanSansSC-Normal";
          }
        }
        .tip-info {
          width: 100%;
          box-sizing: border-box;
          font-size: var(--FtSize_three);
          color: #a49691;
          span {
            margin-left: 6%;
            margin-top: 2%;
            line-height: var(--FtSize_three);
            display: block;
          }
        }
        .closeIcon {
          position: absolute;
          right: 15px;
          top: 10px;
          cursor: pointer;
          color: #fe783f;
        }
        .handle-wrap {
          width: 100%;
          height: 30%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          position: relative;
          font-size: var(--FtSize_three);
          .dom {
            width: 20%;
            height: 30px;
            text-align: center;
            line-height: 30px;
            position: absolute;
            top: 52%;
            right: 3%;
            border: 1px solid var(--systemColor);
            border-radius: 25px;
            overflow: hidden;
            background-color: rgb(255, 119, 62);
            color: #fff;
            &:hover {
              background-color: rgba(255, 119, 62, 0.8);
            }
            &:active {
              color: #fff;
              box-shadow: 0 0 10px #fff inset;
            }
            input {
              height: 100%;
              opacity: 0;
              cursor: pointer;
              transform: translateX(-73px);
              position: absolute;
              top: 0;
              left: 0;
            }
          }
          .cancel {
            width: 20%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid var(--systemColor);
            border-radius: 25px;
            cursor: pointer;
            margin-right: 129px;
            margin-top: 36px;
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
        }
      }
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
      .badData {
        width: 500px;
        height: 156px;
        background-color: #fff;
        border-radius: 10px;
        position: relative;
        .bad-title {
          margin: 23px 30px 19px;
          display: flex;
          align-items: center;
          .prompt {
            font-size: var(--FtSize_icon);
            color: #ff773e;
          }
          span {
            font: 400 var(--FtSize_four) / 100% "Source Han Sans SC";
            color: #707070;
            margin-left: 13px;
          }
        }
        .bad-content {
          padding-left: 63px;
          padding-bottom: 24px;
          span {
            color: #a49691;
            font: 400 var(--FtSize_three) / 100% "Source Han Sans SC";
          }
        }
        .bad-know {
          width: 20%;
          height: 30px;
          margin-left: 76%;
          border: 1px solid #fe783f;
          background-color: #fe783f;
          border-radius: 18px;
          text-align: center;
          cursor: pointer;
          font: 400 var(--FtSize_three) / 30px "Source Han Sans SC";
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
}
</style>
