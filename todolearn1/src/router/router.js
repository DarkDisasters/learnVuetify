import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PythonBasic from '@/views/pythonSubview/PythonBasic'
import Tornado from '@/views/pythonSubview/Tornado'
import ThreejsBasic from '@/views/threejsSubview/ThreejsBasic'
import Shadow from '@/views/threejsSubview/Shadow'
import Pca from '../views/algorithmSubview/Pca'


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
  },
  {
    path: '/threejs/shadow',
    name: 'threejs shadow',
    component: Shadow
  },
  {
    path: '/algorithm/pca',
    name: 'PCA',
    component: Pca
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
