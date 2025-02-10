// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // Vue 3에 맞게 변경
import Home from '../views/MainHome'; // 변경된 Home 컴포넌트
import newlyProduct from '../views/newlyProduct';

const routes = [
  {
    path: '/',
    name: 'MainHome',
    component: Home
  },
  {
    path: '/newlyProduct',
    name: 'newlyProduct',
    component: newlyProduct
  }
];

const router = createRouter({
  history: createWebHistory(), // Vue 3에 맞는 history 모드 설정
  routes
});

export default router;
