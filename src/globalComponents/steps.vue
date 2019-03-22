<template>
  <div id="steps">
    <div class="state">
      <i
        :class="
          this.icon == null ? 'iconfont icon-yunpingtaidenglu-' : this.icon
        "
      ></i>
      <span>{{ txt.value1 }}</span>
    </div>
    <div class="line"></div>
    <div class="state">
      <i
        :class="
          this.icon == null ? 'iconfont icon-yunpingtaidenglu-' : this.icon
        "
      ></i>
      <span>{{ txt.value2 }}</span>
    </div>
    <div class="line"></div>
    <div class="state">
      <i
        :class="
          this.icon == null ? 'iconfont icon-yunpingtaidenglu-' : this.icon
        "
      ></i>
      <span>{{ txt.value3 }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["txt", "active", "icon"],
  data() {
    return {
      list: [],
      next: null
    };
  },
  methods: {
    addClass() {
      if (this.next > this.list.length) {
        return;
      }
      for (let i = 0; i < this.next; i++) {
        this.list[i].classList.add("active");
        this.list[i].children[0].classList.remove("icon-yunpingtaidenglu-");
        this.list[i].children[0].classList.add("icon-duihao");
      }
    }
  },
  mounted() {
    this.next = this.active;
    this.list = document.getElementsByClassName("state");
    this.addClass();
  },
  watch: {
    active: {
      handler: function(val, oldVal) {
        this.next = val;
        this.addClass();
        // console.log(val);
      },
      deep: true
    }
  }
};
</script>
<style lang="scss">
#steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .state {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    i {
      font-size: 34px;
    }
    span {
      position: absolute;
      top: 150%;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      font-size: 16px;
      color: #ccc;
    }
  }
  .state.active {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: #61d2c4;
    i {
      font-size: 34px;
      color: #fff;
    }
  }
  .line {
    flex: 1;
    border: 0.5px solid rgba(203, 193, 189, 1);
    margin: 0 20px;
    border-radius: 0.5px;
    width: 94px;
  }
}
</style>
