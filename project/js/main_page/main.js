// 클릭했을때 작동 하는지 확인하기 위해 만든 script 페이지 필요 없으면 없애도 됩니다.
$(document).ready(function () {
    $(".bar_item, .class_item").on("click", function () {
        alert("클릭되었습니다."); // 임의 값
    });
})
