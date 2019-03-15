import Vue from 'vue'
import Router from 'vue-router';
import { Customers, Hubs } from '../pages';

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
  }
];

export default new Router({ mode: 'hash', routes });
