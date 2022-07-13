import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局 优雅 引入axios, 前提安装模块 npm i axios vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'jquery/dist/jquery.min'
import './assets/boot/css/bootstrap.css'
import './assets/boot/css/bootstrap-icons.css'
import './assets/boot/js/bootstrap.bundle.js'
// 设置公共的基础路径
// axios.默认配置项们.基础路径 = '....'
// 作用: 用axios发的请求, 如果是相对路径 则会自动拼接到这个路径后
// 注意: 必须在 use 前设置, 然后再注入到vue里

Vue.use(VueAxios, axios)

// 第三方的引入都是固定的, 记下来即可
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
