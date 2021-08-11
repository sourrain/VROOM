import { createRouter, createWebHistory } from 'vue-router'
import Pricing from '../views/Pricing.vue'
import Community from '../views/Community.vue'
import Home from '../views/Home.vue'
import Theatre from '../views/Theatre.vue'
import Company from '../views/Company.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/theatre',
    name: 'Theatre',
    component: Theatre
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
