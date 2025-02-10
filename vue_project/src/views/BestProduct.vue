<!-- views/BestProduct.vue -->
<template>
    <div>
      <CategoryTitle title="베스트 상품" />
      <ProductList :products="bestProducts" />
    </div>
  </template>
  
  <script>
  import ProductList from '@/components/ProductList.vue';
  import CategoryTitle from '@/components/CategoryTitle.vue';
  
  export default {
    components: {
      ProductList,
      CategoryTitle
    },
    data() {
      return {
        bestProducts: [
          { id: 101, name: '베스트 1', image: 'assets/img_product/box4_main.jpg', price: 15900 },
          { id: 102, name: '베스트 2', image: 'assets/img_product/box5_main.jpg', price: 25900 },
          { id: 103, name: '베스트 3', image: 'assets/img_product/box6_main.jpg', price: 35900 }
        ]
      };
    }
  };
  </script>
  