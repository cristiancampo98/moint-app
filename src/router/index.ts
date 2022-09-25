import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoUserView from '../views/InfoUserView.vue'
import DetailUser from '../views/DetailUser.vue'
import PersonalInformation from '../views/PersonalInformation.vue'
import UserInformation from '../views/UserInformation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/InfoUserView',
      name: 'InfoUserView',
      component: InfoUserView
    },
    {
      path: '/DetailUser',
      name: 'DetailUser',
      component: DetailUser
    },
    {
      path: '/PersonalInformation',
      name: 'PersonalInformation',
      component: PersonalInformation
    },
    {
      path: '/UserInformation',
      name: 'UserInformation',
      component: UserInformation
    },
  ]
})

export default router
