<!-- components/CategoryTitle.vue -->
<template>
    <h3 class="tit_product">{{ title }}</h3>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>
  