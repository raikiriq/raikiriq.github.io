import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from "@/views/AppHome";
import AppCows from "@/views/AppCows";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome
  },
  {
    path: '/cows',
    name: 'cows',
    component: AppCows
  }
]

const router = new VueRouter({
  routes
})

export default router
