<!-- views/MatProduct.vue -->
<template>
    <ProductList title="매트/침낭/해먹" :products="matProducts" />
  </template>
  
  <script>
  import ProductList from "@/components/ProductList.vue";
  
  export default {
    components: { ProductList },
    data() {
      return {
        matProducts: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          name: `매트/침낭/해먹 ${i + 1}`,
          image: `/assets/img_product/mat${i + 1}_main.jpg`,
          price: (i + 1) * 9000 + 6000
        }))
      };
    }
  };
  </script>
  