import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PythonBasic from '@/views/pythonSubview/PythonBasic'
import ThreejsBasic from '../views/threejsSubview/ThreejsBasic'


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
  // {
  //   path: '/python',
  //   name: 'python',
  //   children:[
  //     {path:'basic', component: PythonBasic},

  //   ]
  // },
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
