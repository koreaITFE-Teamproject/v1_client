$(function () {
  $("#header").load("/project/views/common/header.html");
  $("#footer").load("/project/views/common/footer.html");

  // header position fixed로 인한 겹침을 헤더의 높이만큼 전체 마진줌 + 30px
  // 130으로 줬을때 마진탑이 60px으로 적용되는 페이지도 있음- 이부분만 수정해도될듯함
  $("main").css("margin-top", "130px");
  
  $(".textarea").on("keypress",function(e){
    var content = $(this).val();
		$(".js_num").text(content.length); //실시간 글자수 카운팅
		if ($(this).val().length > 300) {
      e.preventDefault();
			alert("최대 300자까지 입력 가능합니다.");
			// 현상태 문제 글자 수가 지워졌을때 글자수 변경 안됨.
      // 태진쌤 조언 : 드래그로 없앨수 있으니 그때그때마다 애가 숫자를 세도록 해야한다.
      // (this).val().length를 매번 세는 로직을 만들어야함.
		}
  })

});
