import Vue from 'vue'
import VueRouter from 'vue-router'
// 组件引入分 懒加载 和 非懒加载, 使用场景?
// 使用频率高: 非懒 - 例如首页

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue'),
    meta:{
      title:'餐饮 -- 首页',
    },
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/Activity.vue'),
    meta:{
      title:'餐饮 -- 活动中心',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);

  document.title=to.meta.title

  next();
})

export default router
