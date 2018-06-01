import Main from '@/view/main'
// import parentView from '@/components/parent-view'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          hideInMenu: true,
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'social-buffer',
      title: '接口自动化'
    },
    component: Main,
    children: [
      {
        path: 'common_data',
        name: 'common_data',
        meta: {
          icon: 'clipboard',
          title: '通用数据'
        },
        component: () => import('@/view/Interface/common-data.vue')
      },
      {
        path: 'count_to',
        name: 'count_to',
        meta: {
          icon: 'ios-folder-outline',
          title: '项目'
        },
        component: () => import('@/view/Interface/projetc.vue')
      },
      {
        path: 'test-case',
        name: 'test-case',
        meta: {
          icon: 'ios-book-outline',
          title: '测试用例'
        },
        component: () => import('@/view/Interface/test-case.vue')
      },
      {
        path: 'test-experiment',
        name: 'test-experiment',
        meta: {
          icon: 'ios-flask-outline',
          title: '测试实验室'
        },
        component: () => import('@/view/Interface/test-experiment.vue')
      }
    ]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    meta: {
      icon: 'arrow-graph-up-right',
      title: 'UI自动化测试'
    },
    component: Main,
    children: [
      {
        path: 'level_2_1',
        name: 'level_2_1',
        meta: {
          icon: 'pie-graph',
          title: '二级-1'
        },
        component: () => import('@/view/multilevel/level-1.vue')
      }
    ]
  },
  {
    path: '/property',
    name: 'property',
    meta: {
      icon: 'bug',
      title: '性能自动化'
    },
    component: Main,
    children: [
      {
        path: 'test-property',
        name: 'test-property',
        meta: {
          icon: 'arrow-graph-up-right',
          title: '性能'
        },
        component: () => import('@/view/property/test-property.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/view/error-page/404.vue')
  }
]
