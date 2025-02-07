// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// src/main.js
// src/main.js
import { createApp } from 'vue'; // Vue 3에 맞게 import
import App from './App.vue';
import router from './router'; // 생성한 router 가져오기
import './assets/css/common.css'; // 전역 CSS 파일 import
import './assets/css/main.css'; // 전역 CSS 파일 import
import './assets/css/font.css'; // 전역 CSS 파일 import

const app = createApp(App);
app.use(router); // router 사용 설정
app.mount('#app');

