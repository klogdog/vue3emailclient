import { createRouter, createWebHistory } from 'vue-router'
import Inbox from '@/pages/Inbox.vue'
import Sent from '@/pages/Sent.vue'
import Drafts from '@/pages/Drafts.vue'
import Compose from '@/pages/Compose.vue'
import EmailDetail from '@/pages/EmailDetail.vue'
import Index from '@/pages/index.vue'
import Login from '@/pages/Login.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/login', component: Login },
  { path: '/inbox', component: Inbox },
  { path: '/sent', component: Sent },
  { path: '/drafts', component: Drafts },
  { path: '/compose', component: Compose },
  { path: '/emails/:id', component: EmailDetail, name: 'emailDetail' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
