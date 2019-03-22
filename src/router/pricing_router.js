import Vue from "vue";
import Router from "vue-router";
import createdOrder from "../components/pricing/createdOrder.vue";
import pricing from "../components/pricing/pricing.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "pricing"
    },
    {
      path: "/pricing",
      name: "pricing",
      component: pricing
    },
    {
      path: "/createdOrder",
      name: "createdOrder",
      component: createdOrder
    }
  ]
});
