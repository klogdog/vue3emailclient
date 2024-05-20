import { createRouter, createWebHistory } from 'vue-router'
import Inbox from '@/pages/Inbox.vue'
import Sent from '@/pages/Sent.vue'
import Drafts from '@/pages/Drafts.vue'
import Compose from '@/pages/Compose.vue'
import Index from '@/pages/index.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/inbox', component: Inbox },
  { path: '/sent', component: Sent },
  { path: '/drafts', component: Drafts },
  { path: '/compose', component: Compose },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
