<template>
  <h2 class="screen_out">메인 콘텐츠</h2>
  <div class="section_banner">
    <div class="slide_banner banner1">
      <div class="inner_slide">
        <strong>네이쳐기어 신규 행사</strong>
        <p>
          런칭 기념<br>
          한 달간 텐트 구매 시 알전구 증정<br>
          2024-07-31 ~ 2024-08-31
        </p>
        <span>※리뷰 작성 필수※</span>
      </div>
    </div>
    <div class="slide_banner banner2">
      <div class="inner_slide">
        <strong>네이쳐기어 회원가입 혜택</strong>
        <p>
          회원가입 쿠폰 증정<br>
          10% 할인 쿠폰 증정<br>
          10만원 이상 구매 시
        </p>
        <span>※첫구매 이후부터 사용가능※</span>
      </div>
    </div>
    <div class="slide_banner banner3">
      <div class="inner_slide">
        <strong>네이쳐기어 특별 이벤트</strong>
        <p>
          캠핑 용품 대할인<br>
          모든 상품 20% 할인<br>
          2024-08-01 ~ 2024-08-15
        </p>
        <span>※선착순 100명 한정※</span>
      </div>
    </div>
  </div>
  <div class="section_comm section_newly">
    <div class="inner_section">
      <h3 class="tit_section"><span>WEEKLY</span> 신상품</h3>
      <ul class="list_product slick_list">
        <li>
          <a href="#" class="link_product">
            <span class="wrap_img">
              <img src="/assets/img_product/box1_main.jpg" alt="신상품 1" class="img_product">
            </span>
            <span class="name_product">신상품 1</span>
          </a>
          <span class="screen_out">가격</span><span class="product_price">100,000원</span>
        </li>
        <li>
          <a href="#" class="link_product">
            <span class="wrap_img">
              <img src="/assets/img_product/box1_main.jpg" alt="신상품 2" class="img_product">
            </span>
            <span class="name_product">신상품 2</span>
          </a>
          <span class="screen_out">가격</span><span class="product_price">150,000원</span>
        </li>
        <li>
          <a href="#" class="link_product">
            <span class="wrap_img">
              <img src="/assets/img_product/box1_main.jpg" alt="신상품 3" class="img_product">
            </span>
            <span class="name_product">신상품 3</span>
          </a>
          <span class="screen_out">가격</span><span class="product_price">200,000원</span>
        </li>
        <li>
          <a href="#" class="link_product">
            <span class="wrap_img">
              <img src="/assets/img_product/box1_main.jpg" alt="신상품 4" class="img_product">
            </span>
            <span class="name_product">신상품 4</span>
          </a>
          <span class="screen_out">가격</span><span class="product_price">250,000원</span>
        </li>
      </ul>
      <a href="#" class="link_total">더보기 &#62;</a>
    </div>
  </div>
  <div class="section_comm section_brand">
    <div class="inner_section">
      <h3 class="tit_section"><span>브랜드</span> 스토리</h3>
      <div class="brand_story">
        <strong class="screen_out">트루버</strong>
        <p class="screen_out">
          감성 캠퍼들을 위한 브랜드<br>
          탄/카키 색상으로 사하라 사막의 감성을 더하다<br>
          작은 디테일의 차이로 자신만의 감성을 완성해 보세요
        </p>
      </div>
    </div>
  </div>
  <div class="section_comm section_best">
    <div class="inner_section">
      <h3 class="tit_section"><span>BEST</span> 상품</h3>
      <ul class="list_product">
        <li>
          <a href="#" class="link_product">
            <span class="wrap_img">
              <img src="/assets/img_product/box1_main.jpg" alt="베스트 상품 1" class="img_product">
            </span>
            <span class="name_product">베스트 상품 1</span>
          </a>
          <span class="screen_out">가격</span><span class="product_price">300,000원</span>
        </li>
        <li>
          <a href="#" class="link_product">
            <span class="wrap_img">
              <img src="/assets/img_product/box1_main.jpg" alt="베스트 상품 2" class="img_product">
            </span>
            <span class="name_product">베스트 상품 2</span>
          </a>
          <span class="screen_out">가격</span><span class="product_price">350,000원</span>
        </li>
        <li>
          <a href="#" class="link_product">
            <span class="wrap_img">
              <img src="/assets/img_product/box1_main.jpg" alt="베스트 상품 3" class="img_product">
            </span>
            <span class="name_product">베스트 상품 3</span>
          </a>
          <span class="screen_out">가격</span><span class="product_price">400,000원</span>
        </li>
        <li>
          <a href="#" class="link_product">
            <span class="wrap_img">
              <img src="/assets/img_product/box1_main.jpg" alt="베스트 상품 4" class="img_product">
            </span>
            <span class="name_product">베스트 상품 4</span>
          </a>
          <span class="screen_out">가격</span><span class="product_price">450,000원</span>
        </li>
      </ul>
      <a href="#" class="link_total">더보기 &#62;</a>
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick } from 'vue';
import $ from 'jquery';
import 'slick-carousel'; // slick-carousel 로드

export default {
  name: 'MainHome',
  setup() {
    // slick 초기화 함수
    const initSlick = () => {
      nextTick(() => {
        // 배너 슬라이드
        $(".section_banner").not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: "linear",
          autoplay: true,
          autoplaySpeed: 3000
        });

        // 상품 리스트 슬라이드 (문제되는 부분)
        $(".slick_list").not('.slick-initialized').slick({
          infinite: true,
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true
        });
      });
    };

    onMounted(() => {
      initSlick();
    });
  }
};
</script>
