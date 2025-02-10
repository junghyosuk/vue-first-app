<!-- views/BurnerProduct.vue -->
<template>
    <ProductList title="화로대/버너" :products="burnerProducts" />
  </template>
  
  <script>
  import ProductList from "@/components/ProductList.vue";
  
  export default {
    components: { ProductList },
    data() {
      return {
        burnerProducts: Array.from({ length: 10 }, (_, i) => ({
          id: i + 1,
          name: `화로대/버너 ${i + 1}`,
          image: `/assets/img_product/burner${i + 1}_main.jpg`,
          price: (i + 1) * 12000 + 5000
        }))
      };
    }
  };
  </script>
  