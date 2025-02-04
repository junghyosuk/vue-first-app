// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // Vue 3에 맞게 import
import HomePage from '../views/Home.vue'; // 변경된 Home 컴포넌트

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(), // Vue 3에 맞는 history 모드 설정
  routes
});

export default router;
