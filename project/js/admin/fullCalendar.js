// 달력 렌더링 코드, 가능한 제이쿼리로 수정해볼 예정

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});

// 라이브러리 객체 소스 가지고 요소의 절대적 크기를 줄인다음에 css를 가지고 놀아야함. css만으로는 자동으로 사이즈 확대/축소가 안됨.

