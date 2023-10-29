import { createRouter, createWebHistory, RouterView } from 'vue-router';
import Home from '../view/Home.vue';
import Tr from "@/i18n/translation"

const routes = [
  {
    path: "/:locale?",
    component: RouterView,
    beforeEnter: Tr.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.VITE_BASE_URL),
  routes
})

export default router;