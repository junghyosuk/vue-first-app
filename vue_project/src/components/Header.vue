<template>
  <header>
    <div id="wrapHead" class="wrap_head">
      <!-- 로그인 상태에 따라 다른 UI 표시 -->
      <div v-if="!isLoggedIn">
        <a href="#" class="link_top">로그인</a>
        <a href="#" class="link_top">회원가입</a>
      </div>
      <div v-else>
        <span>{{ userName }}님, 환영합니다.</span>
        <a href="#" class="link_top">로그아웃</a>
      </div>
      <!-- 기타 헤더 내용 -->
    </div>
  </header>
</template>