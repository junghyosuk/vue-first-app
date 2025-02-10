<template>
  <HeaderComponent />
  <div id="content" class="cont" :class="{ main: $route.name === 'MainHome' }">
    <router-view></router-view>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/layout/HeaderComponent.vue'; // 변경된 이름으로 import
import FooterComponent from './components/layout/FooterComponent.vue'; // 변경된 이름으로 import

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style>

</style>


<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->











