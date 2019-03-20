import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: (route) => ({
      food: route.query.food
    }),
    meta: {
      title: '主页'
    },
    beforeEnter: (to, from, next) => {
      if (from.name === 'about') {
        console.log('这是从关于页面跳转过来的~')
      } else {
        console.warn('这不是从关于页面跳转过来的~')
      }
      next()
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('../views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('../views/parent.vue'),
    meta: {
      title: '父级组件'
    },
    children: [{
      path: 'child',
      component: () => import('../views/child.vue')
    }]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: {
      name: 'parent'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('@/views/error.vue'),
    meta: {
      title: '错误页面'
    }
  }
]
