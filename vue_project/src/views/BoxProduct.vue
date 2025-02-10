<!-- views/BoxProduct.vue -->
<template>
    <ProductList title="박스/웨건/가방" :products="boxProducts" />
  </template>
  
  <script>
  import ProductList from "@/components/ProductList.vue";
  
  export default {
    components: { ProductList },
    data() {
      return {
        boxProducts: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          name: `박스/웨건/가방 ${i + 1}`,
          image: `/assets/img_product/box${i + 1}_main.jpg`,
          price: (i + 1) * 11000 + 7000
        }))
      };
    }
  };
  </script>
  