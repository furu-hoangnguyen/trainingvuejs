import Vue from "vue";
import App from "./App.vue";
import "./components/common/Mixxin.js";
import VueRouter from "vue-router";

import { routes } from "./Router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});
import {store} from "./store/index";

// router.beforeEach((to, from, next) => {
//   alert("before Each")
//   next()
// });
// router.afterEach((to) => {

//   alert("after Each")
//   to("blogPost")
// })
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
