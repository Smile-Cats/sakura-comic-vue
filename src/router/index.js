import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/MovieHome.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/personSapce/:user_id',
    name: 'personSapce',
    component: () => import('../views/PersonalSapcePage.vue'),
    props: true,
    meta: {
      title: "用户空间",
      needLogin: true //需要登录
    }
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

// 全局路由守卫
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.meta.needLogin) { // 判断该路由是否需要登录权限
    if (token) { // 判断是否已经登录
      next()
    }
    else {
      next({path: '/login'}) //跳转到登录页
    }
  } else { 
  	next()
  }
})

export default router;
