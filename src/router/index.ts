import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Templates from '../views/Templates.vue'
import Jobs from '../views/Jobs.vue'
import Job from '../views/Job.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'templates',
    component: Templates
  },
  {
    path: '/templates/:templateUUID/jobs',
    name: 'jobs',
    component: Jobs,
  },
  {
    path: '/templates/:templateUUID/job/:containerId',
    name: 'job',
    component: Job,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
