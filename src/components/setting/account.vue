<template>
  <div class="account-wrap">
    <div class="back" @click="back"><i class="iconfont icon-zuo"></i> 返回</div>
    <div class="account-setting">
      <header>账号设置</header>
      <div class="info-item">
        <p class="title">头像</p>
        <img :src="headPortrait" alt="" />
        <div class="upfileBtn">
          <p>上传</p>
          <input type="file" @change="readerImageInfo($event)" />
        </div>
      </div>
      <div class="headPortrait-wrap" v-show="showEdit.headPortrait">
        <canvas
          width="0"
          height="0"
          ref="canvas"
          class="setting-area"
          @mousedown="dragImage($event)"
        ></canvas>
        <Slider
          v-on:get-slideNum="getSlideNum"
          class="time-progress"
          :slideTop="slideTop"
        >
        </Slider>
        <div class="handle">
          <button @click="clipImage()">确定</button> <button>取消</button>
        </div>
      </div>
      <div class="info-item">
        <p class="title">名称</p>
        <p class="content">小橙同学</p>
        <div
          class="handleBtn"
          v-show="!showEdit.updateName"
          @click="showEdit.updateName = true"
        >
          编辑
        </div>
      </div>
      <div class="updateName-wrap" v-show="showEdit.updateName">
        <div class="title"></div>
        <input type="text" class="content" />
        <div class="handle">
          <button @click="sumbitName">确定</button>
          <button @click="showEdit.updateName = false">取消</button>
        </div>
      </div>
      <div class="info-item">
        <p class="title">手机号码</p>
        <p class="content">123456789123</p>
        <div
          class="handleBtn"
          v-show="!showEdit.updatePhone"
          @click="showEdit.updatePhone = true"
        >
          编辑
        </div>
      </div>
      <div class="updatePhone-wrap" v-show="showEdit.updatePhone">
        <div class="title"></div>
        <div class="content">
          <div class="content-item">
            <span>当前手机号</span> <span>123412346579</span>
          </div>
          <div class="content-item">
            <span>新手机号</span> <input type="text" />
          </div>
          <div class="content-item">
            <span>请输入密码</span> <input type="text" />
          </div>
        </div>
        <div class="handle">
          <button @click="sumbitPhone">确定</button>
          <button @click="showEdit.updatePhone = false">取消</button>
        </div>
      </div>
      <div class="info-item">
        <p class="title">邮箱</p>
        <p class="content">添加邮箱信息</p>
        <div
          class="handleBtn"
          v-show="!showEdit.updateEmail"
          @click="showEdit.updateEmail = true"
        >
          编辑
        </div>
      </div>
      <div class="updateEmail-wrap" v-show="showEdit.updateEmail">
        <div class="title">邮箱</div>
        <div class="content">
          <div class="content-item">
            <span>请输入邮箱账号</span> <input type="text" />
          </div>
        </div>
        <div class="handle">
          <button @click="sumbitEmail">确定</button>
          <button @click="showEdit.updateEmail = false">取消</button>
        </div>
      </div>
      <div class="info-item">
        <p class="title">密码</p>
        <p class="content">*********</p>
        <div
          class="handleBtn"
          v-show="!showEdit.updatePassword"
          @click="showEdit.updatePassword = true"
        >
          编辑
        </div>
      </div>
      <div class="updatePassword-wrap" v-show="showEdit.updatePassword">
        <div class="title">密码</div>
        <div class="content">
          <div class="content-item">
            <span>当前密码</span> <input type="text" />
          </div>
          <div class="content-item">
            <span>新密码</span> <input type="text" />
          </div>
        </div>
        <div class="handle">
          <button @click="sumbitPassword">确定</button>
          <button @click="showEdit.updatePassword = false">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from "../common/slider";
export default {
  data() {
    return {
      canvas: null,
      preview: null,
      ctx: null,
      canvasHeight: 0,
      canvasWidth: 0,
      slideTop: "0%",
      //图像缩放初始宽高
      drawWidth: 150,
      drawHeight: 180,
      headPortrait: "/orait_online/img/common/男头.png",
      showEdit: {
        headPortrait: false,
        updateName: false,
        updatePhone: false,
        updateEmail: false,
        updatePassword: false
      }
    };
  },
  methods: {
    /**
     * 调用readerImageInfo函数读取导入的图片信息
     * 调用drawImage函数去绘制图片
     * 确定之后调用clipImage函数去截图并保存
     */
    readerImageInfo(obj) {
      let that = this;
      this.showEdit.headPortrait = true;
      //获取canvas对象
      this.canvas = this.$refs.canvas;
      this.canvas.width = 200;
      this.canvas.height = 200;
      //拿到画布
      this.ctx = this.canvas.getContext("2d");
      // //拿到上传的文件信息
      let files = obj.target.files;
      // //新建文件读取对象
      let reader = new FileReader();
      //开始读取
      reader.readAsDataURL(files[0]);
      //读取完成后，数据保存在对象的result属性中
      reader.onload = function() {
        //创建Image对象
        that.preview = new Image();
        that.preview.src = this.result;
        that.preview.onload = function() {
          that.drawImage(that.drawWidth, that.drawHeight);
        };
      };
    },
    /**
     * 绘制图像
     * mwidth 目标宽度
     * mhigth 目标高度
     */
    drawImage(mwidth, mheight, argStartWidth, argCanvasHeight) {
      let canvasWidth = this.canvas.width;
      let canvasHeight = this.canvas.height;
      let startWidth = argStartWidth || (canvasWidth - mwidth) / 2; //绘制开始x
      let startHigth = argCanvasHeight || (canvasHeight - mheight) / 2; //绘制开始y
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.preview, startWidth, startHigth, mwidth, mheight); //把图片绘制到canvas上
      this.ctx.lineWidth = "100";
      this.ctx.strokeStyle = "rgba(255,255,255, 0.5)";
      this.ctx.rect(0, 0, 200, 200);
      this.ctx.stroke();
    },
    //拖动头像
    dragImage(event) {
      let x = event.offsetX;
      let y = event.offsetY;
      let that = this;
      let flag = 1;
      // 这里如果用addEventListener来做，this总是指向外部，所以拿不到document的event
      // document.addEventListener("mouseup", this.test(event, x), true)
      document.onmousemove = function(ev) {
        if (flag === 1) {
          let argStartWidth = that.canvasWidth + ev.offsetX - x;
          let argCanvasHeight = that.canvasHeight + ev.offsetY - y;
          that.drawImage(
            that.drawWidth,
            that.drawHeight,
            argStartWidth,
            argCanvasHeight
          ); //把图片绘制到canvas上
        }
      };
      document.onmouseup = function(ev) {
        flag = 0;
        that.canvasWidth += ev.offsetX - x;
        that.canvasHeight += ev.offsetY - y;
      };
    },
    getSlideNum(val) {
      let drawWidth = 150;
      let drawHeight = 180;
      this.drawWidth = drawWidth + drawWidth * val;
      this.drawHeight = drawHeight + drawHeight * val;
      this.drawImage(this.drawWidth, this.drawHeight);
    },
    clipImage() {
      let imgData = this.ctx.getImageData(50, 50, 100, 100);
      this.canvas.width = 100;
      this.canvas.height = 100;
      this.ctx.putImageData(imgData, 0, 0);
      this.headPortrait = this.canvas.toDataURL();
      this.showEdit.headPortrait = false;
    },
    sumbitName() {
      this.showEdit.updateName = false;
    },
    sumbitPhone() {
      this.showEdit.updatePhone = false;
    },
    sumbitEmail() {
      this.showEdit.updateEmail = false;
    },
    sumbitPassword() {
      this.showEdit.updatePassword = false;
    },
    back() {
      window.history.go(-1);
    }
  },
  components: {
    Slider
  }
};
</script>
<style lang="scss" scoped>
@mixin alick-style {
  border-bottom: 1px solid #fa8c16;
  width: 100%;
  background: #ffffff;
}
@mixin title {
  width: 120px;
  padding-left: 40px;
  margin-right: 40px;
  box-sizing: border-box;
}
@mixin content-item {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-bottom: 10px;
  height: 50px;
}
@mixin input {
  outline: none;
  border-bottom: 1px solid #707070;
}
@mixin handleBtn {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  button:first-child {
    @include confirm-button;
    margin-right: 16px;
  }
  button:last-child {
    @include cancle-button;
    margin-right: 80px;
  }
}
@mixin confirm-button {
  width: 72px;
  height: 32px;
  outline: none;
  background: #ffffff;
  border: 1px solid #fa8c16;
  border-radius: 25px;
  cursor: pointer;
  color: #fa8c16;
}
@mixin cancle-button {
  width: 72px;
  height: 32px;
  outline: none;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  border-radius: 25px;
  cursor: pointer;
  color: #ffffff;
}

.account-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  .back {
    position: absolute;
    top: 30px;
    left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    z-index: 99;
    cursor: pointer;
    text-align: center;
    border-radius: 30px;
    background: RGBA(251, 177, 97, 1);
    color: #fff;
    .iconfont {
      font-size: 25px;
    }
  }
  .account-setting {
    margin-top: 150px;
    width: 53.75%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    header {
      @include alick-style;
      height: 91px;
      line-height: 92px;
      text-align: center;
    }
    .info-item {
      @include alick-style;
      display: flex;
      align-items: center;
      height: 90px;
      font-size: 16px;
      .title {
        @include title;
      }
      img {
        width: 50px;
        height: 50px;
      }
      .content {
        width: 200px;
      }
      .handleBtn {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        margin-right: 20%;
        color: #fa8c16;
        cursor: pointer;
      }
      .upfileBtn {
        position: relative;
        flex: 1;
        display: flex;
        justify-content: flex-end;
        margin-right: 20%;
        color: #fa8c16;
        p {
          position: absolute;
          right: 4px;
          top: 5px;
        }
        input {
          width: 50px;
          opacity: 0;
        }
      }
    }
    .headPortrait-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 285px;
      @include alick-style;
      .setting-area {
        margin-left: 160px;
        background: #ededed;
      }
      .handle {
        @include handleBtn;
      }
      .time-progress {
        width: 10px;
        height: 200px;
        margin-left: 10px;
        background: rgba(0, 0, 0, 0.2);
      }
    }
    .updateName-wrap {
      display: flex;
      align-items: center;
      height: 99px;
      font-size: 16px;
      @include alick-style;
      .title {
        @include title;
      }
      .content {
        width: 162px;
        outline: none;
        border-bottom: 1px solid #707070;
      }
      .handle {
        @include handleBtn;
      }
    }
    .updatePhone-wrap {
      display: flex;
      align-items: center;
      height: 225px;
      font-size: 16px;
      @include alick-style;
      .title {
        @include title;
      }
      .content {
        width: 162px;
        .content-item {
          @include content-item;
          input {
            @include input;
          }
        }
      }
      .handle {
        @include handleBtn;
      }
    }
    .updateEmail-wrap {
      display: flex;
      align-items: center;
      height: 225px;
      font-size: 16px;
      @include alick-style;
      .title {
        @include title;
      }
      .content {
        width: 162px;
        .content-item {
          @include content-item;
          input {
            @include input;
          }
        }
      }
      .handle {
        @include handleBtn;
      }
    }
    .updatePassword-wrap {
      display: flex;
      align-items: center;
      height: 225px;
      font-size: 16px;
      @include alick-style;
      .title {
        @include title;
      }
      .content {
        width: 162px;
        .content-item {
          @include content-item;
          input {
            @include input;
          }
        }
      }
      .handle {
        @include handleBtn;
      }
    }
  }
}
</style>
