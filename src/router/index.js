import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/util'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

const HAS_LOGINED = window.localStorage.getItem('HAS_LOGIN')

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  // 如果去的地址不是登录页,看你是否已经登录，已经登录就可以去，没有登录就跳转登录页
  // 如果去的地址是登录页，看你是否已经登录，登录了直接跳转Home页，没有就必须登录
  if (to.name !== 'login') {
    console.log(HAS_LOGINED)
    if (HAS_LOGINED) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    console.log(HAS_LOGINED)
    if (HAS_LOGINED) next({ name: 'home' })
    else {
      next()
    }
  }
})

export default router
