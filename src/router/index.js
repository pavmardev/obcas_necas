import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'
import PageDetailView from '../views/PageDetailView.vue'
import InfoPageView from '../views/InfoPageView.vue' // Jediný nový komponent

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/clanok/:id', name: 'ArticleDetail', component: ArticleDetailView, props: true },
  { path: '/stranka/:slug', name: 'PageDetail', component: PageDetailView, props: true },

  { path: '/kontakt', component: InfoPageView, props: { slug: 'kontakt' } },
  { path: '/o-nas', component: InfoPageView, props: { slug: 'o-nas' } },
  { path: '/ochrana-sukromia', component: InfoPageView, props: { slug: 'ochrana-sukromia' } },
  { path: '/univerzita', component: InfoPageView, props: { slug: 'univerzita' } },
]

const router = createRouter({
  history: createWebHistory('/obcas_necas/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
