// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入router
import router from './router'
// 导入vuex
import store from './vuex'
// 导入axios，并添加到原型上
import axios from 'axios'
// 导入iview,并全局使用（js和css）
import iview from 'iview'
import 'iview/dist/styles/iview.css'
// 导入jQuery
import $ from 'jquery'
// 引入swiper.js
// import Swiper from 'swiper'
// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
Vue.use(iview);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
