import Vue from 'vue'
import Router from 'vue-router';
import { Customers, Hubs } from '../pages';

Vue.use(Router);

const routes = [
  {
    name: 'Customers',
    path: '/customers',
    component: Customers
  },
  {
    name: 'Hubs',
    path: '/hubs',
    component: Hubs
  }
];

export default new Router({ mode: 'hash', routes });
