import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //默认路由
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    meta: {
      title: '主页'
    },
    component: (resolve) => require(['../views/Home.vue'], resolve)
  },
  {
    path: '/Introduction',
    meta: {
      title: '文档'
    },
    component: (resolve) => require(['../views/Introduction.vue'], resolve)
  },
  {
    path: '/DataVisualization',
    meta: {
      title: '经编数据可视化'
    },
    component: (resolve) => require(['../views/DataVisualization.vue'], resolve)
  },
  {
    path: '/AIalgorithm',
    meta: {
      title: 'AI调度算法'
    },
    component: (resolve) => require(['../views/AIalgorithm.vue'], resolve)
  },
  {
    path: '/About',
    meta: {
      title: '作者简介'
    },
    component: (resolve) => require(['../views/About.vue'], resolve)
  },
  {
    path:"/Loading",
    meta:{
      title:'登录界面'
    },
    component: (resolve) => require(['../views/Loading.vue'], resolve)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
