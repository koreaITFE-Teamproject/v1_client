$(function () {
  $("#header").load("/project/views/common/header.html");
  $("#footer").load("/project/views/common/footer.html");
  $("#logo_header").load("/project/views/common/logo_header.html");
  $("#banner_div").load("/project/views/common/floating_banner.html");
  
  // header position fixed로 인한 겹침을 헤더의 높이만큼 전체 마진줌 + 30px
  // 130으로 줬을때 마진탑이 60px으로 적용되는 페이지도 있음- 이부분만 수정해도될듯함
  $("main").css("margin-top", "143px");
  

});
