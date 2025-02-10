<!-- views/NewlyProduct.vue -->
<template>
    <div>
      <CategoryTitle title="신상품" />
      <ProductList :products="newlyProducts" />
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
        newlyProducts: [
          { id: 1, name: '신상품 1', image: '/assets/img_product/box1_main.jpg', price: 19900 },
          { id: 2, name: '신상품 2', image: '/assets/img_product/box2_main.jpg', price: 29900 },
          { id: 3, name: '신상품 3', image: '/assets/img_product/box3_main.jpg', price: 39900 }
        ]
      };
    }
  };
  </script>
  