import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import BasicLayout from '../layouts/BasicLayout.vue'
import TheLayout from "../layouts/TheLayout";
import Content from "../components/Content";
import Workspaces from "../components/Workspaces";

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/basicLayout',
    name: 'BasicLayout',
    component: BasicLayout
  },
  {
    path: '/',
    name: 'home',
    component: TheLayout,
    meta: { icon: 'home' },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Content
      },
      {
        path: '/workspaces',
        name: 'Workspaces',
        component: Workspaces
      }
    ]
  },
]

const index = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default index
