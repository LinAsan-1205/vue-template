import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    meta: {},
    component: () => import('~/views/index.vue'),
  },
]
export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => {
    return {
      top: 0,
    }
  },
  routes,
})
