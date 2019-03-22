import Vue from "vue";
import Router from "vue-router";

import useTemplate from "../components/workbench/useTemplate.vue";
import mySpace from "../components/workbench/mySpace.vue";
import myTemplate from "../components/workbench/mySpace/myTemplate";
import myFavorite from "../components/workbench/mySpace/myFavorite";
import myCreat from "../components/workbench/mySpace/myCreat";
import notFound from "../components/common/404page";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/mySpace",
      redirect: "/mySpace/myTemplate"
    },
    {
      path: "/useTemplate",
      name: "useTemplate",
      component: useTemplate
    },
    {
      path: "/mySpace",
      name: "mySpace",
      component: mySpace,
      children: [
        {
          path: "myTemplate",
          component: myTemplate
        },
        {
          path: "myFavorite",
          component: myFavorite
        },
        {
          path: "myCreat",
          component: myCreat
        }
      ]
    },
    {
      path: "/notFound",
      name: "notFound",
      component: notFound
    }
  ]
});
