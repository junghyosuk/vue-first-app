<template>
    <ul class="list_product">
      <li v-for="product in products" :key="product.id">
        <a :href="`/product/${product.id}`" class="link_product">
          <img :src="product.image" :alt="product.name" class="img_product" />
          <span class="name_product">{{ product.name }}</span>
        </a>
        <span class="product_price">{{ formatPrice(product.price) }}원</span>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      products: Array
    },
    methods: {
      formatPrice(price) {
        return new Intl.NumberFormat().format(price);
      }
    }
  };
  </script>
  