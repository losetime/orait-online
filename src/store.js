import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let module_global = {
  state: {
    theme: "light",
    htmlWidth: null,
    htmlHeight: 0,
    userInfo: null,
    //全局状态
    globalFlag: 0,
    //全局动画
    loadingShow: false,
    //是否刷新数据
    sidFlag: null,
    //风场信息
    windSiteInfo: null,
    //simulationStart，折线图的起始位置
    simulationStart: null,
    //警告提示框
    messageShow: {
      type: "success",
      boxShow: false,
      txt: "这是一个提示"
    }
  },
  getters: {},
  mutations: {
    changeTheme(state) {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
    gethtmlWidth(state, val) {
      state.htmlWidth = val;
    },
    gethtmlHeight(state, val) {
      state.htmlHeight = val;
    },
    set_userInfo(state, val) {
      state.userInfo = val;
    },
    set_globalFlag(state, val) {
      state.globalFlag = val;
    },
    set_loading(state, val) {
      state.loadingShow = val;
    },
    set_sidFlag(state, val) {
      state.sidFlag = val;
    },
    set_windSiteInfo(state, val) {
      state.windSiteInfo = val;
    },
    set_message(state, val) {
      state.messageShow = val;
    },
    set_simulationStart(state, val) {
      state.simulationStart = val;
    }
  },
  actions: {}
};
export default new Vuex.Store({
  modules: {
    module_global: module_global
  }
});
