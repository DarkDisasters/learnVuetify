import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PythonBasic from '@/views/pythonSubview/PythonBasic'
import Tornado from '@/views/pythonSubview/Tornado'
import ThreejsBasic from '@/views/threejsSubview/ThreejsBasic'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/python/basic',
    name: 'python basic',
    component: PythonBasic
  },
  {
    path: '/python/tornado',
    name: 'tornado',
    component: Tornado
  },
  {
    path: '/threejs/basic',
    name: 'threejs basic',
    component: ThreejsBasic
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
