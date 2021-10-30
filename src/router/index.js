import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/study-circle',
    children: [
      {
        path: 'study-circle',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/users/Login.vue')
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: () => import('../views/users/SignUp.vue')
      },
      {
        path: 'forget-password',
        name: 'ForgetPassword',
        component: () => import('../views/users/ForgetPassword.vue')
      },
      {
        path: 'reset-password',
        name: 'ResetPassword',
        component: () => import('../views/users/ResetPassword.vue')
      },
      {
        path: 'auth-mail',
        name: 'AuthMail',
        component: () => import('../views/users/AuthMail.vue')
      },
      {
        path: 'auth-password',
        name: 'AuthPassword',
        component: () => import('../views/users/AuthPassword.vue')
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
