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
        path: 'register-success/:activityId',
        name: 'RegisterSuccess',
        component: () => import('../views/Activity/RegisterSuccess.vue'),
        props: (route) => {
          // console.log(route)
          return {
            ActivityId: route.params.activityId
          }
        }
      }
    ]
  },
  // 三個主題活動頁
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
        // meta: {
        //   keepAlive: true // 需要被緩存
        // }
      },
      {
        path: 'entity',
        name: 'Entity',
        component: () => import('../views/Activity/EntityActivity.vue')
        // meta: {
        //   keepAlive: true // 需要被緩存
        // }
      },
      {
        path: 'workshop',
        name: 'Workshop',
        component: () => import('../views/Activity/WorkShop.vue')
        // meta: {
        //   keepAlive: true // 需要被緩存
        // }
      }
    ]
  },
  // 搜尋、官方推薦頁面
  {
    path: '/activities',
    name: 'Layout',
    redirect: 'search/:split/:page/:type/:classify/:area/:sorting/:query',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        // 從搜尋框點擊到的頁面
        path: 'search/:split/:page/:type/:classify/:area/:sorting/:query',
        name: 'SearchActivity',
        component: () => import('../views/Activity/SearchActivity.vue'),
        props: (route) => {
          console.log(route)
          return {
            Split: route.params.split,
            Page: route.params.page,
            Type: route.params.type,
            Classify: route.params.classify,
            Area: route.params.classify,
            Sorting: route.params.sorting,
            Query: route.params.query
          }
        }
      },
      {
        path: 'more/recommend/:variety/:type/:split/:page',
        name: 'ActivityRecommend',
        component: () => import('../views/Activity/MoreRecommend.vue'),
        props: (route) => {
          console.log(route)
          return {
            Variety: route.params.variety,
            Type: route.params.type,
            Split: route.params.split,
            Page: route.params.page
          }
        }
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
        component: () => import('../views/Profile/MyActivityOverview.vue'),
        props: (route) => {
          console.log(route)
          return {
            UserId: route.params.UserId
          }
        }
      },
      {
        path: 'study-partner/:UserId',
        name: 'StudyPartnerOverview',
        component: () => import('../views/Profile/StudyPartnerOverview.vue'),
        props: (route) => {
          console.log(route)
          return {
            UserId: route.params.UserId
          }
        }
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log(to, from, savedPosition)
    return {
      top: 0
    }
  }
})

export default router
