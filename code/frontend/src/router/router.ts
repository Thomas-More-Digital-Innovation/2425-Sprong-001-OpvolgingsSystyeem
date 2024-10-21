import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Gebruikers from '../components/Gebruikers.vue'
import Adminpanel from '../components/Adminpanel.vue'
import GebruikerDetailPage from '../components/GebruikerDetailPage.vue'
import Materiaal from '@/components/Materiaal.vue'
import Rol from '@/components/Rol.vue'
import OpmerkingenPage from '@/components/OpmerkingenPage.vue'

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: Login,
  },
  {
    path: '/begeleider/:id',
    name: 'GebruikersPage',
    component: Gebruikers,
  },
  {
    path: '/adminpanel',
    name: 'AdminPanel',
    component: Adminpanel,
  },
  {
    path: '/gebruiker/:id',
    name: 'GebruikerDetail',
    component: GebruikerDetailPage,
  },
  {
    path: '/materiaal',
    name: 'Materiaal',
    component: Materiaal,
  },
  {
    path: '/rol',
    name: 'Rol',
    component: Rol,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
