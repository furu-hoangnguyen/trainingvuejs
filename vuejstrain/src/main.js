import Vue from "vue";
import App from "./App.vue";
import "./components/common/Mixxin.js";
import VueRouter from "vue-router";
import mixins from './components/common/Mixxin'
import { routes } from "./Router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});
import {store} from "./store/index";

Vue.config.productionTip = false;
new Vue({
  mixins:[mixins],
  router,
  store,
  render: h => h(App)
}).$mount("#app");
