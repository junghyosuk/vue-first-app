<template>
    <div id="footer" class="wrap_foot">
      <h2 class="screen_out">회사정보 및 고객안내</h2>
      <div class="inner_foot">
        <div class="foot_quick">
          <a href="#" class="link_quick">회사소개</a>
          <a href="#" class="link_quick">이용약관</a>
          <a href="#" class="link_quick">개인정보처리방침</a>
          <a href="#" class="link_quick">이용안내</a>
          <a href="#" class="link_quick">고객센터</a>
          <a href="#" class="link_quick">광고 및 제휴문의</a>
        </div>
      </div>
      <div class="inner_foot">
        <div class="foot_etc">
          <div class="etc_cs">
            <h3 class="tit_etc">고객센터</h3>
            <strong>02-123-4567</strong>
            <span>평일 09:30 ~ 17:30</span>
          </div>
          <div class="etc_bank">
            <h3 class="tit_etc">계좌안내</h3>
            <strong>000-12342-12-000</strong>
            <span>아이티은행 / 예금주 : (주)네이쳐기어</span>
          </div>
          <div class="etc_notice">
            <h3 class="tit_etc"><a href="#">공지사항</a></h3>
            <ul class="list_notice">
              <li><a href="#" class="link_notice">공지사항 제목 1</a></li>
              <li><a href="#" class="link_notice">공지사항 제목 2</a></li>
              <li><a href="#" class="link_notice">공지사항 제목 3</a></li>
              <li><a href="#" class="link_notice">공지사항 제목 4</a></li>
            </ul>
            <a href="#" class="link_more">더보기 &#62;</a>
          </div>
        </div>
      </div>
      <div class="inner_foot">
        <div class="foot_info">
          <div class="wrap_img">
            <img src="/assets/images/logo_camp.png" alt="네이쳐기어 로고">
          </div>
          <div class="wrap_policy">
            <p>상호명 : NATURE GEAR : 이동환 사업자등록번호 : 111-11-11111 </p>
            <p>대표번호 : 02-777-7777 / 팩스번호 : 02-666-6666</p>
            <p>주소 : 서울시 강남구 / 메일 : abc@itwill.xyz</p>
            <p>copyright (c) naturegear.com all rights reserved.</p>
          </div>
        </div>
      </div>
      <button type="button" class="btn_top">
        <span class="screen_out">맨 위로 이동</span>
        top
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent' // 다단어 이름 사용
  };
  </script>
  