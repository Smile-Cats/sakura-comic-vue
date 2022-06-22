import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/MovieHome.vue')
  },
  {
    path: '/movtype/:movtype',
    component:  () => import('../views/MoviePage.vue'),
    props: true
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/MovieKeywordPage.vue')
  },
  {
    path: '/movdetail/:vod_id',
    name: 'movdetail',
    component: () => import('../views/MovDetailPage.vue'),
    props: true
  },
//   {
//     path: '/film',
//     component: () => import('../views/Film.vue')
//   }
];


const router = createRouter({
  history: createWebHashHistory(),  // hash路由模式
  // history: createWebHistory(),  // history路由模式
  routes
});

export default router;
