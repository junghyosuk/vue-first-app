// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // Vue 3에 맞게 변경
import Home from '@/views/MainHome'; // 변경된 Home 컴포넌트
import NewlyProduct from '@/views/NewlyProduct';
import BestProduct from '@/views/BestProduct';
import EventProduct from '@/views/EventProduct';
import RestockProduct from '@/views/RestockProduct';
import RipperProduct from '@/views/RipperProduct';
import TentProduct from '@/views/TentProduct.vue';
import LanternProduct from '@/views/LanternProduct.vue';
import MatProduct from '@/views/MatProduct.vue';
import BurnerProduct from '@/views/BurnerProduct.vue';
import BoxProduct from '@/views/BoxProduct.vue';

const routes = [
  {
    path: '/',
    name: 'MainHome',
    component: Home
  },
  { path: '/newly', name: 'NewlyProduct', component: NewlyProduct },
  { path: '/best', name: 'BestProduct', component: BestProduct },
  { path: '/event', name: 'EventProduct', component: EventProduct },
  { path: '/restock', name: 'RestockProduct', component: RestockProduct },
  { path: '/ripper', name: 'RipperProduct', component: RipperProduct },
  { path: '/tent', component: TentProduct },
  { path: '/lantern', component: LanternProduct },
  { path: '/mat', component: MatProduct },
  { path: '/burner', component: BurnerProduct },
  { path: '/box', component: BoxProduct }
];

const router = createRouter({
  history: createWebHistory(), // Vue 3에 맞는 history 모드 설정
  routes
});

export default router;
