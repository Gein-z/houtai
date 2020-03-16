import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'
import Users from './components/user/Users.vue'
import Rights from './components/power/Rights.vue'
import Roles from './components/power/Roles.vue'
import Cate from './components/goods/Cate.vue'
import Params from './components/goods/Params.vue'
import Goods from './components/goods/Goods.vue'
import GoodsAdd from './components/goods/GoodsAdd.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home', component: Home, redirect: '/welcome', children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles },
        { path: '/categories', component: Cate },
        { path: '/params', component: Params },
        { path: '/goods', component: Goods },
        { path: '/goods/add', component: GoodsAdd },

        

      ]
    },
  ]
})
router.beforeEach((to, form, next) => {
  //to 将要访问路径
  //from 从哪个路径来
  // next（）放行 next(‘/’)强制跳转
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router