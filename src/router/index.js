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
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main'},
    component: Profile,
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: {layout: 'main'},
    component: Registration,
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty'},
    component: Login,
  },
  {
    path: '/history',
    component: History,
    meta: {layout: 'main'},
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
    meta: {layout: 'main'},
    component: Planning
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {layout: 'main'},
    component: Categories
  },
  {
    path: '/record',
    name: 'Record',
    meta: {layout: 'main'},
    component: Record
  },
  {
    path: '/404',
    meta: {layout: 'empty'},
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
