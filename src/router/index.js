import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },
  {
    path: '/monitor',
    component: Layout,
    redirect: '/monitor/index',
    name: 'monitor',
    meta: { title: '系统监控', icon: 'el-icon-odometer' },
    children: [
      {
        path: 'index',
        name: 'monitor',
        component: () => import('@/views/monitor/index'),
        meta: { title: '系统监控', icon: 'el-icon-odometer' }
      }
    ]
  },

  {
    path: '/cluster',
    component: Layout,
    redirect: '/cluster/index',
    name: 'cluster',
    meta: { title: 'Broker管理', icon: 'el-icon-eleme' },
    children: [
      {
        path: 'index2',
        name: 'cluster',
        component: () => import('@/views/cluster/index'),
        meta: { title: '系统配置', icon: 'el-icon-setting' }
      }
      ,
      {
        path: 'index',
        name: 'cluster',
        component: () => import('@/views/cluster/index'),
        meta: { title: '集群管理', icon: 'el-icon-set-up' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/manage/index',
    name: 'manage',
    meta: { title: '用户管理', icon: 'el-icon-user' },
    children: [
      {
        path: '/manage/index',
        name: 'Table',
        component: () => import('@/views/user/manage/index'),
        meta: { title: '用户管理', icon: 'el-icon-s-custom\n' }
      },
      {
        path: '/auth/index',
        name: 'auth',
        component: () => import('@/views/user/auth/index'),
        meta: { title: '授权', icon: 'el-icon-s-check' }
      }
    ]
  },
  {
    path: '/connect',
    component: Layout,
    redirect: '/connect/index',
    name: 'connect',
    meta: { title: '连接管理', icon: 'el-icon-connection' },
    children: [
      {
        path: 'index',
        name: 'connect',
        component: () => import('@/views/connect/index'),
        meta: { title: '连接管理', icon: 'el-icon-connection' }
      }
    ]
  },{
    path: '/blacklist',
    component: Layout,
    redirect: '/blacklist/index',
    name: 'blacklist',
    meta: { title: '黑名单', icon: 'el-icon-close-notification' },
    children: [
      {
        path: 'index',
        name: 'blacklist',
        component: () => import('@/views/blacklist/index'),
        meta: { title: '黑名单', icon: 'el-icon-close-notification' }
      }
    ]
  },{
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    name: 'about',
    meta: { title: '关于', icon: 'el-icon-cold-drink' },
    children: [
      {
        path: 'index',
        name: 'about',
        component: () => import('@/views/about/index'),
        meta: { title: '关于', icon: 'el-icon-cold-drink' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
