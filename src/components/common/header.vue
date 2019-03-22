<template>
  <div id="onlineHeader" class="header">
    <div class="l-list">
      <img @click="toShouye" src="/orait_online/img/common/ORAIT.png" />
      <span @click="toChart">图表</span>
    </div>
    <div class="r-list">
      <span @click="towork">工作台</span> <span @click="topricing">定价</span>
      <i class="iconfont icon-xiaoxi"></i>
      <div class="apply" @click.stop="fmoduleFn">
        <transition name="fmodule-fade">
          <fmodule v-show="globalFlag === 2" class="fmodule"></fmodule>
        </transition>
        <i class="iconfont icon-yingyong"></i>
      </div>
      <div class="user-info">
        <transition name="information-fade">
          <div v-show="globalFlag === 1" class="userInfo">
            <information :userInfo="userInfo"></information>
          </div>
        </transition>
        <img
          src="/orait_online/img/common/男头.png"
          class="icon-nantou"
          @click.stop="information"
        />
      </div>
    </div>
  </div>
</template>
<script>
import information from "./header/information"; //用户信息
import fmodule from "./header/fmodule"; //产品介绍
import { find_user } from "../../assets/service/userInfoService.js";
export default {
  data() {
    return {
      inform: false,
      userInfo: null
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
    globalFlag() {
      return this.$store.state.module_global.globalFlag;
    }
  },
  watch: {
    globalFlag: {
      handler: function() {
        // console.log()
        // this.showFunmodule = false;
      },
      deep: true
    }
  },
  methods: {
    towork() {
      window.location.href = "/workbench.html#/mySpace";
    },
    topricing() {
      window.location.href = "/pricing.html#/pricing";
    },
    toShouye() {
      window.location.href = "/homePage.html#/homepage";
    },
    toChart() {
      window.location.href = "/homePage.html#/chartpage";
    },
    information() {
      if (this.globalFlag === 1) {
        this.$store.commit("set_globalFlag", 0);
      } else {
        // find_user().then(res => {
        //   this.userInfo = res.data.body_data;
        //   this.$store.commit("set_globalFlag", 1);
        // });
        this.$store.commit("set_globalFlag", 1);
      }
    },
    fmoduleFn() {
      if (this.globalFlag === 2) {
        this.$store.commit("set_globalFlag", 0);
      } else {
        this.$store.commit("set_globalFlag", 2);
      }
    }
  },
  mounted() {
    this.$store.commit("set_sidFlag", localStorage.getItem("SID"));
  },
  components: {
    information,
    fmodule
  }
};
</script>
<style lang="scss" scoped>
#onlineHeader {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 21px 0 50px;
  background-image: url("/orait_online/img/common/headerBg.svg");
  .l-list {
    display: flex;
    align-items: center;
    height: 100%;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100%;
      font: var(--FtSize_second) / 50px "SourceHanSansSC-Normal";
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }
  .r-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100%;
      font: var(--FtSize_second) / 50px "SourceHanSansSC-Normal";
      color: #fff;
      cursor: pointer;
      &:last-of-type {
        margin-right: 45px;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
    .icon-xiaoxi {
      margin-right: 30px;
      font-size: var(--FtSize_icon_second);
      color: #fff;
    }
    .user-info,
    .apply {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.4);
      }
      .icon-nantou {
        width: 30px;
        height: 30px;
        color: #fff;
      }
      .icon-yingyong {
        font-size: var(--FtSize_icon_second);
        color: #fff;
      }
    }
    .user-info {
      position: relative;
      .userInfo {
        width: 315px;
        height: 285px;
        display: flex;
        justify-content: center;
        overflow: hidden;
        position: absolute;
        top: 39px;
        right: -32px;
        z-index: 100;
      }
      .information-fade-enter-active {
        transition: all 0.3s ease;
      }
      .information-fade-leave-active {
        transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
      }
      .information-fade-enter,
      .information-fade-leave-to {
        height: 0;
      }
    }
    .apply {
      position: relative;
      margin-right: 30px;
      .fmodule {
        position: absolute;
        top: 44px;
        right: -21px;
        z-index: 100;
        cursor: auto;
      }
      .fmodule-fade-enter-active {
        transition: all 0.3s ease;
      }
      .fmodule-fade-leave-active {
        transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
      }
      .fmodule-fade-enter,
      .fmodule-fade-leave-to {
        height: 0;
      }
    }
  }
}
</style>
