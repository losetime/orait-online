import Vue from "vue";
import Router from "vue-router";

import account from "../components/setting/account.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/account",
      name: "account",
      component: account
    }
  ]
});
