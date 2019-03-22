import Vue from "vue";
import Router from "vue-router";
import homepage from "../components/homePage/homepage.vue";
import chartpage from "../components/homePage/chartpage.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/homepage"
    },
    {
      path: "/homepage",
      name: "homepage",
      component: homepage
    },
    {
      path: "/chartpage",
      name: "chartpage",
      component: chartpage
    }
  ]
});
