import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from "@/views/AppHome";
import AppCows from "@/views/AppCows";
import AppChicken from "@/views/AppChicken";
import AppPigs from "@/views/AppPigs";

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
  },
  {
    path: '/chicken',
    name: 'chicken',
    component: AppChicken
  },
  {
    path: '/pigs',
    name: 'pigs',
    component: AppPigs
  },
]

const router = new VueRouter({
  routes
})

export default router
