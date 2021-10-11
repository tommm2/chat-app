import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'Index',
    path: '/',
    component: () => import('/@/views/Index.vue'),
    redirect: '/login',
    children: [
      {
        name: 'Login',
        path: 'login',
        component: () => import('/@/views/Login.vue'),
      },
      {
        name: 'Chat',
        path: 'chat',
        component: () => import('/@/views/Chat.vue'),
        meta: { requiresAuth: true },
      },
      {
        name: 'Register',
        path: 'register',
        component: () => import('/@/views/Register.vue'),
      }
    ]
  },
  { path: '/:catchAll(.*)', redirect: '/login' }
]

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savePosition) {
    return { top: 0 }
  }
})

export default router
