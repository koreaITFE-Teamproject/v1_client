$(function () {
    $(".options>div>i:nth-child(2)").hide();


    // $(".options>div").click(function () {
    //     $(this).children("i").toggle();
    // });


    // 일단 중복되게 구현함, 시간나면 수정 예정
    $("#notification-toggle-switch-1").click(function () {
        toggleSWT($(this));
    });

    $("#notification-toggle-switch-2").click(function () {
        toggleSWT($(this));
    });

    function toggleSWT($this) {
        $this.toggleClass("toggle-swt-checked");
        $this.children().toggleClass("toggle-btn-checked");
    }
});