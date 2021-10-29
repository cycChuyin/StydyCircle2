import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/studyCircle',
    children: [
      {
        path: 'studyCircle',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      },
      {
        path: 'signUp',
        name: 'SignUp',
        component: () => import('../views/SignUp.vue')
      },
      {
        path: 'reset-password',
        name: 'ResetPassword',
        component: () => import('../views/ResetPassword.vue')
      },
      {
        path: 'auth-mail',
        name: 'AuthMail',
        component: () => import('../views/AuthMail.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splittingÎ
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../views/Layout.vue')
  },
  {
    path: '/searchActivity',
    name: 'SearchActivity',
    component: () => import('../views/Activity/SearchActivity.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
