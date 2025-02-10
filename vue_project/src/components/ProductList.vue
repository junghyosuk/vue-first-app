<template>
  <div class="cont_product">
    <h3 class="tit_product">
      {{ title }}
    </h3>
    <div class="wrap_filter">
      <span class="total_num">상품 <b>{{ filteredProducts.length }}</b>개</span>
      <div class="inner_filter clear_fix">
        <ul class="list_filter">
          <li>
            <a href="#" @click.prevent="sortBy = 'date'" :class="{ on: sortBy === 'date' }">
              등록일순
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="sortBy = 'priceAsc'" :class="{ on: sortBy === 'priceAsc' }">
              낮은 가격순
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="sortBy = 'priceDesc'" :class="{ on: sortBy === 'priceDesc' }">
              높은 가격순
            </a>
          </li>
        </ul>
        <select class="select_filter" v-model="itemsPerPage">
          <option :value="20">20개씩 보기</option>
          <option :value="40">40개씩 보기</option>
          <option :value="60">60개씩 보기</option>
        </select>
      </div>
    </div>
    <ul class="list_product">
      <li v-for="product in paginatedProducts" :key="product.id">
        <a :href="`/product/${product.id}`" class="link_product">
          <span class="wrap_img">
            <img :src="product.image" :alt="product.name" class="img_product" />
          </span>
          <span class="name_product">{{ product.name }}</span>
        </a>
        <span class="screen_out">가격</span>
        <span class="product_price">{{ formatPrice(product.price) }}원</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      sortBy: "date", // 기본 정렬: 등록일순
      itemsPerPage: 20
    };
  },
  computed: {
    // 정렬된 상품 목록
    filteredProducts() {
      return [...this.products].sort((a, b) => {
        if (this.sortBy === "date") return new Date(b.date) - new Date(a.date);
        if (this.sortBy === "priceAsc") return a.price - b.price;
        if (this.sortBy === "priceDesc") return b.price - a.price;
        return 0;
      });
    },
    // 페이지네이션 적용된 상품 목록
    paginatedProducts() {
      return this.filteredProducts.slice(0, this.itemsPerPage);
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat().format(price);
    }
  }
};
</script>

<style scoped>
.on {
  font-weight: bold;
  color: red;
}
</style>
