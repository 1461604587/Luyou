import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path:'/shou',
        component: () => import(/* webpackChunkName: "about" */ '../views/Shou.vue'),
        children:[
          {
            path:'/shou/guan',
        component: () => import(/* webpackChunkName: "about" */ '../views/Guan.vue'),
          },
          {
            path:'/shou/tui',
        component: () => import(/* webpackChunkName: "about" */ '../views/Tui.vue'),
          },
          {
            path:'/shou/re',
        component: () => import(/* webpackChunkName: "about" */ '../views/Re.vue'),
          }

        ]
      },
      {
        path:'/xiang',
        component: () => import(/* webpackChunkName: "about" */ '../views/Xing.vue')
      },
      {
        path:'/da',
        component: () => import(/* webpackChunkName: "about" */ '../views/Da.vue')
      },
      {
        path:'/xiao',
        component: () => import(/* webpackChunkName: "about" */ '../views/Xiao.vue')
      },
      {
        path:'/my',
        component: () => import(/* webpackChunkName: "about" */ '../views/My.vue')
      }
    ]
  },
  {
  path:'/detail/:id',
  name:'datail',
  component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
