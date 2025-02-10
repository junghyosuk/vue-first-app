<!-- views/LanternProduct.vue -->
<template>
    <ProductList title="랜턴" :products="lanternProducts" />
  </template>
  
  <script>
  import ProductList from "@/components/ProductList.vue";
  
  export default {
    components: { ProductList },
    data() {
      return {
        lanternProducts: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          name: `랜턴 ${i + 1}`,
          image: `/assets/img_product/lantern${i + 1}_main.jpg`,
          price: (i + 1) * 8000 + 7000
        }))
      };
    }
  };
  </script>
  