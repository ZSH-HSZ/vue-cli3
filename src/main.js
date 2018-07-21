/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex/store'
import router from './route/router'
import App from './App.vue'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')