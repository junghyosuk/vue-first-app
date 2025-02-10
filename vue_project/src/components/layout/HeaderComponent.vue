<template>
  <div id="wrapHead" class="wrap_head">
    <div class="wrap_top">
      <div class="inner_top">
        <a href="#" class="link_top">로그인</a>
        <a href="#" class="link_top">회원가입</a>
        <!-- <span><span class="login_name">[사용자 이름]</span>님, 환영합니다.</span> -->
        <!-- <a href="#" class="link_top">로그아웃</a> -->
        <!-- <a href="#" class="link_top type2">관리자 페이지</a> -->
      </div>
    </div>
    <div class="inner_head clear_fix">
      <h1>
        <span class="screen_out">네이쳐기어</span>
        <router-link to="/" class="link_tit">
          <img src="/assets/images/logo_camp.png" alt="네이쳐기어">
        </router-link>
      </h1>
      <div class="wrap_search">
        <h2 class="screen_out">검색</h2>
        <form action="#" method="get" class="form_search">
          <fieldset>
            <legend class="screen_out">통합검색</legend>
            <input type="text" name="inpSearch" id="inpSearch" class="inp_search">
            <button type="submit" class="btn_search"><span>검색</span></button>
          </fieldset>
        </form>
      </div>
      <div class="wrap_menu">
        <ul class="list_menu">
          <li>
            <a href="#" class="link_menu">
              <img src="/assets/images/top_mypage.png" alt="마이페이지">
              <span>마이페이지</span>
            </a>
          </li>
          <li>
            <a href="#" class="link_menu">
              <img src="/assets/images/top_cart.png" alt="장바구니">
              <span>장바구니</span>
              <span class="screen_out">상품갯수</span><span class="num_product">0</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap_nav">
      <div class="inner_nav clear_fix">
        <div class="wrap_cate">
          <h2 class="all_cate">전체카테고리</h2>
          <ul class="list_cate">
            <li>
              <router-link to="/tent" class="link_cate">텐트</router-link>
            </li>
            <li>
              <router-link to="/lantern" class="link_cate">랜턴</router-link>
            </li>
            <li>
              <router-link to="/mat" class="link_cate">매트/침낭/해먹</router-link>
            </li>
            <li>
              <router-link to="/burner" class="link_cate">화로대/버너</router-link>
            </li>
            <li>
              <router-link to="/box" class="link_cate">박스/웨건/가방</router-link>
            </li>
          </ul>
        </div>
        <div class="wrap_gnb">
          <h2 class="screen_out">서비스 주요 메뉴</h2>
          <ul class="list_gnb">
            <li><router-link to="/newly" class="link_gnb">신상품</router-link></li>
            <li><router-link to="/best" class="link_gnb">베스트</router-link></li>
            <li><router-link to="/event" class="link_gnb">특가혜택</router-link></li>
            <li><router-link to="/restock" class="link_gnb">재입고</router-link></li>
            <li><router-link to="/ripper" class="link_gnb">리퍼</router-link></li>
          </ul>
        </div>
        <ul class="list_board">
          <li><a href="#" class="link_board">공지사항</a></li>
          <li><a href="#" class="link_board">고객문의</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent' // 다단어 이름 사용
};
</script>
