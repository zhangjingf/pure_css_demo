import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/phone',
      name: 'phone',
      component: () => import('./views/Phone.vue')
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import('./views/Progress.vue')
    },
    {
      path: '/star',
      name: 'star',
      component: () => import('./views/Star.vue')
    },
    {
      path: '/plum',
      name: 'plum',
      component: () => import('./views/Plum.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('./views/Menu.vue')
    },
    {
      path: '/wave',
      name: 'wave',
      component: () => import('./views/Wave.vue')
    },
    {
      path: '/bar',
      name: 'bar',
      component: () => import('./views/Bar.vue')
    },
    {
      path: '/hover',
      name: 'hover',
      component: () => import('./views/Hover.vue')
    },
    {
      path: '/logo',
      name: 'logo',
      component: () => import('./views/Logo.vue')
    }
  ]
})
