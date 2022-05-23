import { createRouter, createWebHistory } from 'vue-router'
import NavBar from "@/views/NavBar.vue"
import LogiN from "@/views/LogiN.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/saas',
      name: 'saas',
      component: LogiN
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: NavBar
    },

    {
    }
  ]
})

export default router
