import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CarView from '../views/CarView.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
      component: AboutView
    },
    {
      path: "/cars/:id",
      name: "car",
      component: CarView
    }
  ]
})

export default router
