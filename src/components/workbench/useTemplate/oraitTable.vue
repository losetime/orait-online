<!-- 负荷管理总页面 -->
<template>
  <div class="oraitTable-wrap" ref="tableWrap" @wheel="listenScroll($event)">
    <div class="column-wrap">
      <div class="item-data-first">
        <canvas style="width:100px;height:60px;" ref="myCanvas"></canvas>
      </div>
      <div v-if="tableData !== null">
        <div
          v-for="(item, index) in tableData.data"
          :key="index"
          @click="getdetailData(index)"
        >
          <div class="item-data">{{ tableData.index[index] }}</div>
        </div>
      </div>
    </div>

    <vue-scroll>
      <div class="data-sets" v-if="tableData !== null">
        <div class="table-header" @dblclick="fullScreen">
          <div
            class="item-data-first"
            v-for="item in tableData.header"
            :key="item"
          >
            <p>{{ item }}</p>
            <!-- 排序 -->
            <!-- <div class="paixun-icon" v-if="item">
              <i
                class="iconfont icon-paixushang"
                @click="orderUp(table_itemName.body_itemName[index], $event)"
              ></i>
              <i
                class="iconfont icon-paixuxia"
                @click="orderDown(table_itemName.body_itemName[index], $event)"
              ></i>
              </div>-->
          </div>
        </div>
        <div class="table-body">
          <input
            type="number"
            autofocus
            class="table-input"
            v-if="showInput"
            v-model="inputVal"
            v-focus="true"
            @blur="submitInput(0)"
            @keydown="submitInput($event)"
          />
          <div
            :class="{
              'item-wrap': true,
              checked: nowChecked === index,
              'checked-real': tableData.real[index] === -1
            }"
            v-for="(item, index) in tableData.data"
            :key="index"
          >
            <div
              :class="{
                'item-data': true,
                'checked-anomaly': val.status === anomalyFlag,
                'checked-bad': val.status === 2,
                'cheched-rect':
                  valIndex >= rectStart[0] &&
                  index >= rectStart[1] &&
                  valIndex <= rectEnd[0] &&
                  index <= rectEnd[1]
              }"
              v-for="(val, valIndex) in item"
              :key="valIndex"
              @dblclick="set_inputVal($event, index, valIndex, val.value)"
              @mousedown="get_rectStart(valIndex, index)"
              @mousemove="get_rectMove(valIndex, index)"
              @mouseup="get_rectEnd(valIndex, index)"
            >
              {{ val.value }}
            </div>
          </div>
        </div>
      </div>
    </vue-scroll>

    <div class="scroll-wrap" v-if="tableData.data !== null">
      <div class="iconfont icon-gengshang icon" @click="prePage()"></div>
      <div class="iconfont icon-shang icon" @click="preRow()"></div>
      <scrollModule
        v-on:get-slideNum="getSlideNum"
        class="time-progress"
        :slideTop="slideTop"
      ></scrollModule>
      <div class="iconfont icon-xia icon" @click="nextRow()"></div>
      <div class="iconfont icon-gengxia icon" @click="nextPage()"></div>
    </div>
    <div class="warning" v-show="tableData.data === null">
      <p>导入数据后即可查看表格</p>
    </div>
    <input
      type="text"
      v-focus="true"
      v-model="pasteValue"
      v-if="showPasteInput"
      class="pasteInput"
    />
  </div>
</template>
<script>
import {
  get_tableData,
  set_tableData
} from "../../../assets/service/wpSimluateService.js";
import scrollModule from "./slider";
export default {
  data() {
    return {
      tableData: {
        data: null,
        index: null,
        real: null,
        header: null
      }, //显示数据
      tableBuffer: null, //缓冲区数据
      tableStart: 0, //请求数据起始位置
      visible_tableStart: 0, //可见起始位置
      tableCount: 200, //缓冲区的长度
      visible_tableCount: 10, //可见数据长度
      nowChecked: 0,
      beforeDom: null,
      inputVal: null,
      showInput: false,
      locationX: null,
      locationY: null,
      rectStart: [],
      rectEnd: [],
      rectFlag: -1,
      pasteValue: null, //绑定input，粘贴的值会传到这里
      showPasteInput: false,
      anomalyFlag: 1,
      styles: null,
      slideTop: "0%", //给slider传的值
      alter_start: -1
    };
  },
  directives: {
    focus: {
      inserted: function(el, { value }) {
        if (value) {
          el.focus();
        }
      }
    }
  },
  computed: {
    htmlHeight() {
      return this.$store.state.module_global.htmlHeight;
    },
    globalFlag() {
      return this.$store.state.module_global.globalFlag;
    },
    sidFlag() {
      return this.$store.state.module_global.sidFlag;
    }
  },
  watch: {
    htmlHeight() {
      this.$nextTick(function() {
        if (localStorage.getItem("SID")) {
          this.get_tableData();
        }
      });
    },
    globalFlag(val) {
      if (val === 501 || val === 502) {
        this.get_tableData();
      } else if (val === 503) {
        this.anomalyFlag = -1; //改变异常数据class的条件
      }
    },
    //sid变化后重新刷新数据
    sidFlag() {
      this.$nextTick(function() {
        if (localStorage.getItem("SID")) {
          this.get_tableData();
        }
      });
    },
    pasteValue(val) {
      if (val.length !== 0) {
        let arr = val.split(" ");
        let newArr = [];
        arr.forEach(ele => {
          newArr = newArr.concat(ele.split("	"));
        });
        let rectArr = [];
        /**
         * 首先认识到矩阵其实就是二维数据
         * 【0，1】 0为 Y 轴，1为 X 轴
         * 第一个for循环为定义X轴，
         * 第二个for循环为定义Y轴
         * 我们每次是固定Y轴，去取x轴的坐标点
         */
        for (let i = 0; i <= this.rectEnd[1] - this.rectStart[1]; i++) {
          for (let j = 0; j <= this.rectEnd[0] - this.rectStart[0]; j++) {
            rectArr.push([this.rectStart[0] + j, this.rectStart[1] + i]);
          }
        }
        // console.log(this.rectStart, this.rectEnd);
        // console.log(rectArr);
        newArr.forEach((val, index) => {
          //在列表是循环里是以行循环的，所以X轴在先
          //这里取数据需要先取X轴，再取Y轴
          this.tableData.data[rectArr[index][1]][rectArr[index][0]].value = val;
        });
      }
    }
  },
  methods: {
    //获得矩阵起始点
    get_rectStart(x, y) {
      this.rectFlag = 0;
      this.rectStart = [x, y];
      this.showPasteInput = false;
      this.pasteValue = null;
    },
    //获得矩阵结束点
    get_rectMove(x, y) {
      if (this.rectFlag === 0) {
        this.rectEnd = [x, y];
      }
    },
    //获得矩阵结束点
    get_rectEnd(x, y) {
      this.rectFlag = -1;
      this.rectEnd = [x, y];
      this.showPasteInput = true;
    },
    //滚动条事件
    getSlideNum(scrollTop) {
      if (scrollTop === -0.08) {
        //上边界
        this.tableStart = 0;
        this.visible_tableStart = 0;
      } else if (scrollTop < 0.9 && scrollTop > 0.82) {
        //下边界
        this.tableStart = this.tableBuffer.length;
        this.visible_tableStart =
          this.tableStart + (this.tableCount - this.visible_tableCount);
      } else {
        this.tableStart = parseInt(this.tableBuffer.length * scrollTop);
        this.visible_tableStart = parseInt(
          this.tableStart + (this.tableCount - this.visible_tableCount) / 2
        );
      }
      this.get_tableData();
    },
    //数据当前选中项
    getdetailData(item, index) {
      this.nowChecked = index;
      this.$emit("getdetailData", item, index);
    },
    //表格全屏
    fullScreen() {
      this.$store.commit("set_globalFlag", 202);
    },
    //设置input的位置
    set_inputVal(e, y, x, val) {
      let styles = this.$el.style;
      styles.setProperty("--inputTop", e.target.offsetTop + "px");
      styles.setProperty("--inputLeft", e.target.offsetLeft + "px");
      this.inputVal = val;
      this.showInput = true;
      this.locationX = x;
      this.locationY = y;
    },
    //修改表格的值
    set_tableData() {
      set_tableData(
        this.locationY,
        this.locationX,
        parseInt(this.inputVal),
        this.visible_tableStart
      ).then(res => {
        if (res.err_code === 0) {
          this.tableData.data[this.locationY][this.locationX].value =
            res.value.value;
          this.tableData.data[this.locationY][this.locationX].status =
            res.value.status;
          //更新图表,全局点击后会初始化状态，所以不用在其他地方恢复状态
          this.$store.commit("set_globalFlag", 401);
        }
      });
    },
    //提交表格的修改
    submitInput(val) {
      if (val) {
        if (val.keyCode === 13) {
          this.showInput = false;
          this.set_tableData();
        }
      } else {
        this.showInput = false;
      }
    },
    //根据高度获取数据条数(获取数据之前)
    get_tableHieght() {
      this.visible_tableCount = Math.floor(
        (this.$refs.tableWrap.offsetHeight - 60) / 30
      );
    },
    //获取表格的宽度（获取数据之后）
    get_tableWidth() {
      let styles = this.$el.style;
      let length = this.tableBuffer.header.length + 1;
      styles.setProperty("--optionWidth", 60 * length + "px");
    },
    //第一次进入获取缓冲区数据表格数据
    get_tableData() {
      this.get_tableHieght();
      get_tableData(this.tableStart, this.tableCount).then(res => {
        if (res.err_code === 0) {
          this.tableBuffer = res.data;
          this.tableData.header = this.tableBuffer.header;
          this.get_tableWidth();
          this.get_tableBuffer(this.tableCount);
          try {
            this.line();
          } catch (e) {
            console.log(e);
          }
        }
      });
    },
    //获取缓冲区数据
    get_tableBuffer(count) {
      // 判定下边界
      if (
        this.visible_tableStart >
        this.tableStart + count - this.visible_tableCount
      ) {
        this.visible_tableStart =
          this.tableStart + count - this.visible_tableCount;
      }
      // 判定上边界
      if (this.visible_tableStart < 0) {
        this.visible_tableStart = 0;
      }
      let sliceStart = this.visible_tableStart - this.tableStart; //切片开始下标
      let sliceEnd =
        this.visible_tableStart - this.tableStart + this.visible_tableCount; //切片结束下标
      this.tableData.data = this.tableBuffer.data.slice(sliceStart, sliceEnd);
      this.tableData.index = this.tableBuffer.index.slice(sliceStart, sliceEnd);
      this.tableData.real = this.tableBuffer.real.slice(sliceStart, sliceEnd);
      /**
       * this.tableStart + count - this.visible_tableStart < 40   下滑加载缓冲区条件
       */
      if (
        this.alter_start < 0 &&
        (this.tableStart + count - this.visible_tableStart < 40 ||
          (this.visible_tableStart - this.tableStart < 40 &&
            this.visible_tableStart > 40))
      ) {
        this.alter_start = parseInt(
          this.visible_tableStart - (count - this.visible_tableCount) / 2
        );
        get_tableData(this.alter_start, count).then(res => {
          if (res.err_code === 0) {
            this.tableBuffer = res.data;
            this.tableStart = parseInt(res.data.start); //记录请求start的位置
            this.alter_start = -1;
          }
        });
      }
    },
    //处理滚轮滚动事件
    listenScroll(event) {
      if (event.deltaY === 100) {
        //滚轮向上
        this.scroll_nextRow();
      } else if (event.deltaY === -100) {
        //滚轮向上
        this.scroll_preRow();
      }
    },
    //滚轮高度判定
    decide_scrollTop() {
      if (this.tableBuffer !== null) {
        if (this.visible_tableStart < this.tableBuffer.length) {
          //滚动条是否越界，如果越界则矫正位置
          if (this.visible_tableStart / this.tableBuffer.length < 0.9) {
            this.slideTop =
              (this.visible_tableStart / this.tableBuffer.length).toFixed(4) *
                100 +
              "%";
          } else {
            this.slideTop = "90%";
          }
        }
      }
    },
    //滚轮向上
    scroll_preRow() {
      this.visible_tableStart--;
      this.decide_scrollTop();
      this.get_tableBuffer(this.tableCount);
    },
    //滚轮向下
    scroll_nextRow() {
      this.visible_tableStart++;
      this.decide_scrollTop();
      this.get_tableBuffer(this.tableCount);
    },
    //上一页
    prePage() {
      this.visible_tableStart =
        this.visible_tableStart - this.visible_tableCount + 1;
      this.decide_scrollTop();
      this.get_tableBuffer(this.tableCount);
    },
    //下一页
    nextPage() {
      this.visible_tableStart =
        this.visible_tableStart + this.visible_tableCount - 1;
      this.decide_scrollTop();
      this.get_tableBuffer(this.tableCount);
    },
    //上一行
    preRow() {
      this.scroll_preRow();
    },
    //下一行
    nextRow() {
      this.scroll_nextRow();
    },
    //升序
    orderUp(arg, e) {
      if (this.beforeDom !== null) {
        this.beforeDom.target.style.color = "rgba(208, 208, 208, 1)";
      }
      this.beforeDom = e;
      e.target.style.color = "rgba(255, 139, 97, 1)";
      let val = this.tableData.body_data;
      let temp = [];
      for (let i = 0; i < val.length - 1; i++) {
        for (let j = i + 1; j < val.length; j++) {
          if (val[i][arg] > val[j][arg]) {
            temp = val[i];
            val[i] = val[j];
            val[j] = temp;
          }
        }
      }
      this.tableData.body_data = [];
      this.tableData.body_data = val;
    },
    //降序
    orderDown(arg, e) {
      if (this.beforeDom !== null) {
        this.beforeDom.target.style.color = "rgba(208, 208, 208, 1)";
      }
      this.beforeDom = e;
      e.target.style.color = "rgba(255, 139, 97, 1)";
      let val = this.tableData.body_data;
      let temp = [];
      for (let i = 0; i < val.length - 1; i++) {
        for (let j = i + 1; j < val.length; j++) {
          if (val[i][arg] < val[j][arg]) {
            temp = val[i];
            val[i] = val[j];
            val[j] = temp;
          }
        }
      }
      this.tableData.body_data = [];
      this.tableData.body_data = val;
    },
    //表头的斜线
    line() {
      let canvas = this.$refs.myCanvas;
      let width = canvas.offsetWidth;
      let height = canvas.offsetHeight;
      let ctx = canvas.getContext("2d");
      //清除上一次的笔划
      ctx.clearRect(0, 0, width * 5, height * 4);
      ctx.strokeStyle = "rgba(71, 74, 91, 1)";
      ctx.moveTo(0, 0);
      ctx.lineTo(width * 5, height * 4);
      ctx.stroke();
      ctx.strokeStyle = "rgba(235, 235, 235, 1)";
      ctx.font = "35px SourceHanSansSC-Normal";
      ctx.fillStyle = "rgba(164, 150, 145, 1)";
      ctx.fillText("时段", width * 1.8, (height / 5) * 4);
      ctx.fillText("日期", width / 2, height * 2);
    }
  },
  mounted() {},
  components: {
    scrollModule
  }
};
</script>

<style lang="scss" scoped>
.oraitTable-wrap {
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .scroll-wrap {
    width: 15px;
    height: 100%;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    div {
      margin-top: 5px;
      color: var(--systemColor);
      cursor: pointer;
    }
    div:last-child {
      margin-bottom: 5px;
      color: var(--systemColor);
    }
    .icon:hover {
      transform: scale(1.2);
    }
    .time-progress {
      width: 54%;
      height: 100%;
    }
  }
  .column-wrap {
    width: 100px;
    font-size: var(--FtSize_second);
    color: var(--fontColor);
    .item-data-first {
      height: 60px;
      width: 100px;
      border-bottom: 1px solid rgba(235, 235, 235, 1);
      border-right: 1px solid rgba(235, 235, 235, 1);
    }
    .item-data {
      height: 29px;
      width: 100%;
      text-align: center;
      line-height: 29px;
      border-bottom: 1px solid rgba(235, 235, 235, 1);
      border-right: 1px solid rgba(235, 235, 235, 1);
    }
  }
  .data-sets {
    width: var(--optionWidth);
    color: var(--fontColor);
    .table-header {
      width: 100%;
      height: 60px;
      line-height: 60px;
      display: flex;
      justify-content: space-between;
      font-family: "SourceHanSansSC-Medium";
      font-size: var(--FtSize_second);
      border-bottom: 1px solid rgba(235, 235, 235, 1);
      cursor: crosshair;
      .item-data {
        width: 60px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom: 1px solid rgba(235, 235, 235, 1);
        border-right: 1px solid rgba(235, 235, 235, 1);
        .paixun-icon {
          height: 60%;
          position: relative;
          i {
            width: 20px;
            height: 50%;
            font-size: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(208, 208, 208, 1);
          }
        }
      }
      .item-data-first {
        height: 60px;
        width: 100%;
        text-align: center;
      }
    }
    .table-body {
      height: 100%;
      width: 100%;
      font-size: var(--FtSize_second);
      .table-input {
        position: absolute;
        width: 60px;
        height: 30px;
        text-align: center;
        outline: none;
        top: var(--inputTop);
        left: var(--inputLeft);
        border: 1px solid rgba(255, 139, 97, 1);
        box-sizing: border-box;
      }
      .item-wrap {
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: space-around;
        font-size: var(--FtSize_second);
        // &:hover {
        //   background-color: var(--checkedColor);
        // }
        .item-data {
          width: 60px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          border-bottom: 1px solid rgba(235, 235, 235, 1);
          border-right: 1px solid rgba(235, 235, 235, 1);
          cursor: text;
        }
        .checked-anomaly {
          color: rgba(84, 187, 231, 1);
        }
        .checked-bad {
          background: rgba(239, 120, 134, 1);
          color: #ffffff;
        }
        .cheched-rect {
          background: var(--checkedColor);
        }
      }
      .checked-real {
        color: rgba(97, 210, 196, 1);
      }
    }
  }
  .warning {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    color: #ccc;
    p {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: var(--FtSize_four);
    }
  }
  .pasteInput {
    position: absolute;
    top: 0;
    left: 0;
    outline: none;
    width: 1px;
    opacity: 0;
  }
  .checked {
    background: var(--checkedColor);
  }
}
</style>
