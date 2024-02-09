import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/Home.vue')  },
    { path: '/chats', name: 'chats' },
    { path: '/page-1', name: 'page-1' },
    { path: '/page-2', name: 'page-2' },
    { path: '/page-3', name: 'page-3' },
    { path: '/page-4', name: 'page-4' },
    { path: '/page-5', name: 'page-5' },
  ]
})

export default router
