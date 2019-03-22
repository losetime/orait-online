<template>
  <div class="workbench" id="workbench" @click="globalFlagFn">
    <div class="header-wrap"><Header></Header></div>
    <div class="b-wrap"><router-view /></div>
    <!-- 全局组件 -->
    <messageBox
      class="messageBox"
      v-show="messageShow.boxShow === true"
      v-for="(i, index) in list"
      :key="index"
    ></messageBox>
    <loadStart v-show="loadingShow === true"></loadStart>
  </div>
</template>

<script>
import { changeTheme, changeHeight } from "../../assets/js/common/theme.js";
import header from "../../components/common/header";
import loadStart from "../../globalComponents/loading";
import messageBox from "../../globalComponents/messageBox";
import Unit from "../../assets/js/common/unit.js";
export default {
  data() {
    return {
      username: null,
      password: null,
      showMenu: false,
      rememberCode: false,
      showModule: 1,
      list: 0
    };
  },
  computed: {
    theme() {
      return this.$store.state.module_global.theme;
    },
    htmlHeight() {
      return this.$store.state.module_global.htmlHeight;
    },
    globalFlag() {
      return this.$store.state.module_global.globalFlag;
    },
    loadingShow() {
      return this.$store.state.module_global.loadingShow;
    },
    messageShow() {
      return this.$store.state.module_global.messageShow;
    }
  },
  watch: {
    theme(val) {
      changeTheme(val);
    },
    htmlHeight(val) {
      changeHeight(val);
    }
  },
  methods: {
    globalFlagFn() {
      this.$store.commit("set_globalFlag", 0);
    },
    //控制菜单的隐藏显示
    changeGlobalFlag(show, hide) {
      if (this.globalFlag === show) {
        this.$store.commit("set_globalFlag", hide);
      } else {
        this.$store.commit("set_globalFlag", show);
      }
    },
    //缩放左侧边栏
    zoomClick() {
      this.showMenu = !this.showMenu;
    }
  },
  mounted() {
    //监听根页面宽度和高度
    let unit = new Unit();
    unit.getwh(this);
    window.onresize = () => {
      unit.getwh(this);
    };
    // this.userInfo = localStorage.getItem("userInfo");
    changeHeight(this.htmlHeight);
    changeTheme(this.theme);
  },
  components: {
    Header: header,
    loadStart: loadStart,
    messageBox: messageBox
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/reset.css";
@import "../../assets/css/global";
@media screen and (max-width: 1151px) {
  .workbench {
    width: 1152px;
  }
}
@media screen and (min-width: 1152px) {
  .workbench {
    width: 100%;
  }
}

@media screen and (max-height: 863px) {
  .workbench {
    .b-wrap {
      height: 864px;
    }
  }
}
@media screen and (min-height: 864px) {
  .workbench {
    .b-wrap {
      height: var(--WrapH);
    }
  }
}
.workbench {
  height: 100%;
  overflow: hidden;
  font-family: "SourceHanSansSC-Normal";
  .header-wrap {
    width: 100%;
    height: 50px;
  }
  .b-wrap {
    position: relative;
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    position: relative;
  }
}
</style>
