import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Portfolio.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/LoginForm.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Registration.vue'),
    },
  ],
});
