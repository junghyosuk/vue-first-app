<!-- views/EventProduct.vue -->
<template>
    <div>
      <CategoryTitle title="특가 혜택" />
      <ProductList :products="eventProducts" />
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
        eventProducts: [
          { id: 201, name: '특가 상품 1', image: '/assets/img_product/burner1_main.jpg', price: 9900 },
          { id: 202, name: '특가 상품 2', image: '/assets/img_product/burner2_main.jpg', price: 18900 },
          { id: 203, name: '특가 상품 3', image: '/assets/img_product/burner3_main.jpg', price: 22900 }
        ]
      };
    }
  };
  </script>
  