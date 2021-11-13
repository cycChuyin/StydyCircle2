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
      },
      {
        path: 'activity-content/:id',
        name: 'ActivityContent',
        component: () => import('../views/Activity/ActivityContent.vue'),
        props: (route) => {
          // console.log(route)
          return {
            Id: route.params.id
          }
        }
      },
      {
        path: 'register-success',
        name: 'RegisterSuccess',
        component: () => import('../views/Activity/RegisterSuccess.vue')
      }
    ]
  },
  {
    path: '/activity',
    name: 'Activity',
    props: (route) => {
      console.log(route)
      return {
        type: route.name
      }
    },
    redirect: '/activity/online',
    component: () => import('../views/Activity/ThreeThemeActivity.vue'),
    children: [
      {
        path: 'online',
        name: 'Online',
        component: () => import('../views/Activity/OnlineActivity.vue')
      },
      {
        path: 'entity',
        name: 'Entity',
        component: () => import('../views/Activity/EntityActivity.vue')
      },
      {
        path: 'workshop',
        name: 'Workshop',
        component: () => import('../views/Activity/WorkShop.vue')
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    redirect: '/profile/my-activity/:UserId',
    props: (route) => {
      console.log(route)
      return {
        UserId: route.params.UserId
      }
    },
    component: () => import('../views/Profile/ProfileOverview.vue'),
    children: [
      {
        path: 'my-activity/:UserId',
        name: 'MyActivityOverview',
        props: (route) => {
          console.log(route)
          return {
            UserId: route.params.UserId
          }
        },
        component: () => import('../views/Profile/MyActivityOverview.vue')
        // children: [
        //   {
        //     path: 'coming-soon/:UserId',
        //     name: 'ComingSoon',
        //     component: () =>
        //       import('../views/Profile/MyActivity/ComingSoon.vue'),
        //     props: (route) => {
        //       console.log(route)
        //       return {
        //         UserId: route.params.UserId
        //       }
        //     }
        //   },
        //   {
        //     path: 'un-opinion',
        //     name: 'UnOpinion',
        //     component: () => import('../views/Profile/MyActivity/UnOpinion.vue')
        //   },
        //   {
        //     path: 'had-collected',
        //     name: 'HadCollected',
        //     component: () =>
        //       import('../views/Profile/MyActivity/HadCollected.vue')
        //   },
        //   {
        //     path: 'had-finished',
        //     name: 'HadFinished',
        //     component: () =>
        //       import('../views/Profile/MyActivity/HadFinished.vue')
        //   },
        //   {
        //     path: 'had-deleted',
        //     name: 'HadDeleted',
        //     component: () =>
        //       import('../views/Profile/MyActivity/HadDeleted.vue')
        //   }
        // ]
      },
      {
        path: 'study-partner',
        name: 'StudyPartnerOverview',
        component: () => import('../views/Profile/StudyPartnerOverview.vue')
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
