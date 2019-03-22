<template>
  <div class="mySpace-wrap">
    <div class="t-wrap">
      <div @click="triggerCheck(1)">
        <router-link
          to="/mySpace/myTemplate"
          :class="{
            'router-item': true,
            myTemplate: true,
            'checke-border': checkeBorder === 1
          }"
          >我的模板</router-link
        >
      </div>
      <div @click="triggerCheck(2)">
        <router-link
          to="/mySpace/myFavorite"
          :class="{
            'router-item': true,
            myFavorite: true,
            'checke-border': checkeBorder === 2
          }"
          >我的喜欢</router-link
        >
      </div>
      <div @click="triggerCheck(3)">
        <router-link
          to="/mySpace/myCreat"
          :class="{
            'router-item': true,
            myCreat: true,
            'checke-border': checkeBorder === 3
          }"
          >我的创造</router-link
        >
      </div>
    </div>
    <div class="b-wrap"><router-view></router-view></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkeBorder: 1
    };
  },
  methods: {
    triggerCheck(val) {
      this.checkeBorder = val;
    }
  }
};
</script>
<style lang="scss" scoped>
.mySpace-wrap {
  width: 100%;
  height: 100%;
  .t-wrap {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 142px;
    line-height: 142px;
    font-size: var(--FtSize_second);
    .router-item {
      color: #554843;
    }
    .myTemplate {
      margin-left: 65px;
    }
    .myFavorite {
      margin: 0 15px;
    }
    .checke-border {
      border-bottom: 2px solid #fa8c16;
    }
  }
}
</style>
