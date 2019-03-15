import Vue from 'vue'
import Router from 'vue-router';
import { Customers, Hubs, Signin } from '../pages';

Vue.use(Router);

const routes = [
  {
    name: 'Customers',
    path: '/customers',
    component: Customers,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'Hubs',
    path: '/hubs',
    component: Hubs,
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'Signin',
    path: '/signin',
    component: Signin,
    meta: {
      requiresAuth: false
    }
  }
];

export default new Router({ mode: 'history', routes });
