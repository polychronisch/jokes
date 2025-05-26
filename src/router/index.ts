import { createRouter, createWebHistory } from 'vue-router'
import JokeCollectionView from '../views/JokeCollectionView.vue'
import JokeDiscoveryView from '@/views/JokeDiscoveryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'discover',
      component: JokeDiscoveryView,
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('../views/JokeCollectionView.vue'),
    },
  ],
})

export default router
