import Vue from 'vue'
import App from './App.vue'
import myMixin from "./components/common/Mixxin.js"
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  mixins:[myMixin]
}).$mount('#app')