import Vue from 'vue';
import Router from 'vue-router';
import dashboard from './views/dashboard/dashboard.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: dashboard
  }]
});