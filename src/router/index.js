import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home/Home.vue';
import History from '../components/history/History.vue';
import Planning from '../components/planning/Planning.vue';
import Categories from '../components/categories/Categories.vue';
import PageNotFound from '../views/system/PageNotFound.vue';
import Record from '../components/record/Record.vue';
import Detailrecord from '../components/history/detail-record/Detailrecord.vue';
import Profile from '../components/profile/Profile.vue';
import Login from '../components/authorization/Login.vue';
import Registration from '../components/authorization/Registration.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/history',
    component: History,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'detailrecord',
        name: 'Detailrecord',
        component: Detailrecord,
      },
    ],
  },
  {
    path: '/planning',
    name: 'Planning',
    component: Planning
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/record',
    name: 'Record',
    component: Record
  },
  {
    path: '/404',
    component: PageNotFound,
  },
  {
    path: '*',
    redirect: '/404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
