<!-- views/TentProduct.vue -->
<template>
    <ProductList title="텐트" :products="tentProducts" />
  </template>
  
  <script>
  import ProductList from "@/components/ProductList.vue";
  
  export default {
    components: { ProductList },
    data() {
      return {
        tentProducts: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          name: `텐트 ${i + 1}`,
          image: `/assets/img_product/tent${i + 1}_main.jpg`,
          price: (i + 1) * 10000 + 5000
        }))
      };
    }
  };
  </script>
  