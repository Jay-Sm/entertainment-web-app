import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../views/Movie.vue')
  },
  {
    path: '/tv',
    name: 'tv',
    component: () => import('../views/TV.vue')
  },
  {
    path: '/bookmarked',
    name: 'bookmarked',
    component: () => import('../views/Bookmarked.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
