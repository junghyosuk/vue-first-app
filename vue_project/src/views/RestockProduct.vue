<!-- views/RestockProduct.vue -->
<template>
    <div>
      <CategoryTitle title="재입고 상품" />
      <ProductList :products="restockProducts" />
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
        restockProducts: [
          { id: 301, name: '재입고 상품 1', image: '/assets/img_product/lantern1_main.jpg', price: 15900 },
          { id: 302, name: '재입고 상품 2', image: '/assets/img_product/lantern2_main.jpg', price: 25900 },
          { id: 303, name: '재입고 상품 3', image: '/assets/img_product/lantern3_main.jpg', price: 35900 }
        ]
      };
    }
  };
  </script>
  