// 달력 렌더링 코드, 가능한 제이쿼리로 수정해볼 예정

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // 달 뷰 형식
    locale: 'ko', // 한국어 설정
    aspectRatio: 0.6, //달력 비율
    
    
  });
  calendar.render();
});



