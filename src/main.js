import Vue from 'vue'
import app from './App.vue'
import router from './router'
// import Home from '../src/views/Home.vue'
// 引入css初始化
import './assets/css/base.css'
// 引入js适配移动端
// import './assets/js/phone'
// 引入 vant 库
import './plugins/vant.js'
// 挂载原型上
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

// 使用开发的分插件
import echarts from './plugins/echarts.js'
Vue.use(echarts)

// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// 中央系统
// import Bus from './components/eventBus.js'
import Bus from './utils/event-bus.js'
Vue.prototype.$bus = Bus


Vue.config.productionTip = false

new Vue({
  router,
  render:h=>h(app)
}).$mount('#app')
