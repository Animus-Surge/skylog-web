import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../pages/dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      component: dashboard
    }
  ],
})

export default router
