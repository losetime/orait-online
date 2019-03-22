<template>
  <div id="login" class="login-wrap">
    <div class="module"><router-view /></div>
  </div>
</template>
<script>
import { changeTheme, changeHeight } from "../../assets/js/common/theme.js";
import Unit from "../../assets/js/common/unit.js";
export default {
  data() {
    return {
      username: null,
      password: null,
      rememberCode: false,
      showModule: 1
    };
  },
  computed: {
    theme() {
      return this.$store.state.module_global.theme;
    },
    htmlHeight() {
      return this.$store.state.module_global.htmlHeight;
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
  mounted() {
    let unit = new Unit();
    unit.getwh(this);
    window.onresize = () => {
      unit.getwh(this);
    };
    changeTheme(this.theme);
    changeHeight(this.htmlHeight);
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/css/reset.css";
@import "../../assets/css/global";
@media screen and (max-width: 1280px) {
  .login-wrap {
    width: 1152px;
  }
}
@media screen and (min-width: 1280px) {
  .login-wrap {
    width: 100%;
  }
}
.login-wrap {
  height: var(--DomH);
  font-family: "SourceHanSansSC-Normal";
  .module {
    width: 100%;
    height: 100%;
  }
}
</style>
