import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PvView from '@/views/PvView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { bodyClass: 'public-bg' },
    },
    {
      path: '/private',
      name: 'private',
      component: PvView,
      meta: { bodyClass: 'private-bg' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.body.className = ''
  if (to.meta.bodyClass) {
    document.body.classList.add(to.meta.bodyClass)
  }
})

export default router
