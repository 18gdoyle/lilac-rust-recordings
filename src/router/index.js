import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InstrumentalsView from '@/views/InstrumentalsView.vue'
import StudioServicesView from '@/views/StudioServicesView.vue'
import PastProjectsView from '@/views/PastProjectsView.vue'
import WebDesignView from '@/views/WebDesignView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/instrumentals',
      name: 'instrumentals',
      component: InstrumentalsView
    },
    {
      path: '/studioservices',
      name: 'studioservices',
      component: StudioServicesView
    },
    {
      path: '/pastprojects',
      name: 'pastprojects',
      component: PastProjectsView
    },
    {
      path: '/webdesign',
      name: 'webdesign',
      component: WebDesignView
    },
  ]
})

export default router
