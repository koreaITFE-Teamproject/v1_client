$(document).ready(function () {
    // 마우스 모양 변경
    $('.x_icon').mouseover(function () {
        $(this).css('cursor', 'pointer');
    })
    $('.chat_q').mouseover(function () {
        $(this).css('cursor', 'pointer');
    })

    // 1:1 고객상담페이지 클릭시 작동되는 코드
    $('#one_by_one').on('click', function () {
        alert('고객상담센터')
        // 고객 상담페이지로 연결되게 수정해야함.
    })
})