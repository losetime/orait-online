<template>
  <div id="pricing"><router-view /></div>
</template>
<script>
import changeTheme from "../../assets/js/common/theme.js";
export default {
  data: () => {
    return {};
  },
  computed: {
    theme() {
      return this.$store.state.module_global.theme;
    }
  },
  watch: {
    theme(val) {
      changeTheme(val);
    }
  },
  mounted() {
    changeTheme(this.theme);
  }
};
</script>

<style lang="scss">
@import "../../assets/css/reset.css";
@import "../../assets/css/global";
#pricing {
  height: var(--WrapH);
  font-family: Source Han Sans CN;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
