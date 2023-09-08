$(function () {

    // 토글 스위치 클릭시 버튼 효과 구현
    $("#notification-toggle-switch").click(function () {
        var toggleBtnLeft = $(".toggle-btn").css("left") === "4px" ? "calc(100% - 34px)" : "4px";       // 토글버튼 left 지정
        var toggleBtnBgColor = $(".toggle-btn").css("left") === "4px" ? "white" : "#F6E3CE";            // 토글 버튼 배경색
        var toggleSwtBgColor = $(".toggle-btn").css("left") === "4px" ? "#F6E3CE" : "white";            // 토글 스위치 배경색
        var toggleChecked = $("#toggle").prop("checked");                                               // checkbox 체크했는지

        $(".toggle-btn").css({
            "left": toggleBtnLeft,
            "backgroundColor": toggleBtnBgColor,
        });

        $(this).css("backgroundColor", toggleSwtBgColor);

        $("#toggle").attr("checked", !toggleChecked);
    });
});