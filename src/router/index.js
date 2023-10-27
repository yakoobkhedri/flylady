import {createRouter,createWebHistory} from 'vue-router';
import Home from '../view/Home.vue'

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    }
]

const router=createRouter({
  history:createWebHistory(import.meta.VITE_BASE_URL),
  routes
})

export default router;