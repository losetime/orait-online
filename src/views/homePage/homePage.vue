<template>
  <div id="homePage" class="homePage-wrap"><router-view /></div>
</template>
<script>
import { changeTheme, changeHeight } from "../../assets/js/common/theme.js";
import Unit from "../../assets/js/common/unit.js";
export default {
  data() {
    return {};
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
  methods: {
    watchGlobal() {
      this.$store.commit("set_globalFlag", 0);
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
  },
  components: {}
};
</script>
<style scoped lang="scss">
@import "../../assets/css/reset.css";
@import "../../assets/css/global";
@media screen and (max-width: 1151px) {
  .homePage-wrap {
    width: 1152px;
  }
}
@media screen and (min-width: 1152px) {
  .homePage-wrap {
    width: 100%;
  }
}
.homePage-wrap {
  font-family: "SourceHanSansSC-Normal";
}
body {
  height: 100%;
}
</style>
