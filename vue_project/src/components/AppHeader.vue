<template>
  <div id="wrapHead" class="wrap_head">
        <div class="wrap_top">
            <div class="inner_top">
                <a href="#" class="link_top">로그인</a>
                <a href="#" class="link_top">회원가입</a>
                <span><span class="login_name">[사용자 이름]</span>님, 환영합니다.</span>
                <a href="#" class="link_top">로그아웃</a>
                <a href="#" class="link_top type2">관리자 페이지</a>
            </div>
        </div>
        <div class="inner_head clear_fix">
            <h1>
                <span class="screen_out">네이쳐기어</span>
                <a href="#" class="link_tit"><img src="images/logo_camp.png" alt="네이쳐기어"></a>
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
                            <img src="images/top_mypage.png" alt="마이페이지">
                            <span>마이페이지</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="link_menu">
                            <img src="images/top_cart.png" alt="장바구니">
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
                            <a href="#" class="link_cate">텐트</a>
                            <ul class="list_cate_sub">
                                <li><a href="#" class="link_cate">돔텐트</a></li>
                                <li><a href="#" class="link_cate">쉘터</a></li>
                                <li><a href="#" class="link_cate">거실형텐트</a></li>
                                <li><a href="#" class="link_cate">티피텐트</a></li>
                                <li><a href="#" class="link_cate">팝업텐트</a></li>
                                <li><a href="#" class="link_cate">에어텐트</a></li>
                                <li><a href="#" class="link_cate">차박텐트</a></li>
                                <li><a href="#" class="link_cate">루프탑텐트</a></li>
                                <li><a href="#" class="link_cate">텐트소품</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="link_cate">랜턴</a>
                            <ul class="list_cate_sub">
                                <li><a href="#" class="link_cate">랜턴 종류</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="link_cate">매트/침낭/해먹</a>
                            <ul class="list_cate_sub">
                                <li><a href="#" class="link_cate">침낭 종류</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="link_cate">화로대/버너</a>
                        </li>
                        <li>
                            <a href="#" class="link_cate">박스/웨건/가방</a>
                        </li>
                    </ul>
                </div>
                <div class="wrap_gnb">
                    <h2 class="screen_out">서비스 주요 메뉴</h2>
                    <ul class="list_gnb">
                        <li><a href="#" class="link_gnb">신상품</a></li>
                        <li><a href="#" class="link_gnb">베스트</a></li>
                        <li><a href="#" class="link_gnb">특가혜택</a></li>
                        <li><a href="#" class="link_gnb">재입고</a></li>
                        <li><a href="#" class="link_gnb">리퍼</a></li>
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
  name: 'AppHeader' // 다단어 이름 사용
};
</script>
