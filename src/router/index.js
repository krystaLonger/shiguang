import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage'
// import Cinema from '@/views/Cinema'
import Mine from '@/views/Mine'
import Store from '@/views/Store'
import Hot from '@/views/films/Hot'
import Coming from '@/views/films/Coming'
import Error from '@/views/Error'
import Detail from '@/views/Detail'
// import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    component: HomePage,
    children: [
      {
        path: '/homepage/hot',
        component: Hot
      },
      {
        path: '/homepage/coming',
        component: Coming
      },
      {
        path: '',
        redirect: '/homepage/hot'
      }
    ]
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: Detail,
    props: true,
    children: [
      {
        name: 'actor',
        path: '/detail/:id/actor',
        component: () => import('@/views/detail/Actor'),
        props: true
      },
      {
        name: 'photo',
        path: '/detail/:id/photo',
        component: () => import('@/views/detail/stagephoto'),
        props: true
      }
    ]
  },
  {
    path: '/cinema',
    component: () => import('@/views/Cinema')
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/store',
    component: Store
  },
  {
    path: '/',
    redirect: '/homepage/hot'
  },
  {
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  // mode:'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/mine') {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
