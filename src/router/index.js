import { createRouter, createWebHashHistory } from 'vue-router'
//引入布局框架
import Layout from '@/layout'

// //引入动态路由
// import asyncRouter from './modules/async'

// //设置固定路由
// export const constantRoutes = [{
//   path: '/login',
//   component: () => import("@/views/login/index"),
//   hidden: true  //是否在菜单中隐藏
// }]

// //设置初始路由
// export const startRoutes = [
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/home',
//     children: [{
//       path: 'home',
//       component: () => import('@/views/home/index'),
//       name: 'home',
//       meta: {
//         title: 'home',
//         icon: 'home',
//         affix: true
//       }
//     }]
//   },
//   {
//     path: '/404',
//     component: () => import('@/views/error-page/404'),
//     hidden: true
//   },
// ]

// //设置结束路由 --当路由找不到对应页面时重定向到404页面(需要放在路由最后)
// export const endRoutes = [
//   {
//     path: '*',
//     redirect: '/404',
//     hidden: true
//   }
// ]

const router = createRouter({
  history: createWebHashHistory(),//hash 模式
  routes: [
    {
      path: '/',
      component: Layout,
      redirect:'/home',
      children:[{
        path:'home',
        component:()=>import('@/views/home/Index.vue'),
        name:'home'
      }]
    }
  ]
})

export default router