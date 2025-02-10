<!-- views/RipperProduct.vue -->
<template>
    <div>
      <CategoryTitle title="리퍼 상품" />
      <ProductList :products="ripperProducts" />
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
        ripperProducts: [
          { id: 401, name: '리퍼 상품 1', image: '/assets/img_product/mat1_main.jpg', price: 12900 },
          { id: 402, name: '리퍼 상품 2', image: '/assets/img_product/mat2_main.jpg', price: 19900 },
          { id: 403, name: '리퍼 상품 3', image: '/assets/img_product/mat3_main.jpg', price: 26900 }
        ]
      };
    }
  };
  </script>
  