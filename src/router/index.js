import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

// 异步 
const Hesuan = ()=> import('../views/Hesuan/index.vue')
const Area = () => import('../views/Area/index.vue')
const Pervention = () => import('../views/Prevention/index.vue')
const Citys = () => import('../views/Citys/Citys.vue')
const Travel = () => import('../views/Trave/Trave.vue')
const SelectCity = () => import('../views/SelectCity/SelectCity.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/hesuan',
    name:'Hesuan',
    component:Hesuan
  },
  {
    path:'/area',
    name:'Area',
    component:Area
  },
  {
    path:'/pervention',
    name:'Pervention',
    component:Pervention
  },
  {
    path:'/citys/:cityname',
    name:'Citys',
    component:Citys,
    props:true
  },
  {
    path:'/travel',
    name:'Travel',
    component:Travel
  },
  {
    path:'/selectCity',
    name:'SelectCity',
    component:SelectCity
  }

]

const router = new VueRouter({
  routes
})

export default router