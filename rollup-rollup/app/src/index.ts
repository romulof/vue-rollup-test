import Vue from 'vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    { path: '/', component: () => import('./View1.vue') },
    { path: '/b', component: () => import('./View2.vue') },
  ]
});

new Vue({ router })
  .$mount('#app')
