$(function () {
    console.log($(".discussion-rooms-list").css("maxHeight"));
    console.log($(".user-rooms-wrap>ul").css("height"));

    /*
        <ul><li>9</li><li>방이름9</li><li>방장이름9</li></ul>
    */

    // 테스트용 방 생성
    for (var i = 0; i < 20; i++) {
        $(".user-rooms-wrap").append(`<ul><li>${i + 1}</li><li>방이름${i + 1}</li><li>방장이름${i + 1}</li></ul>`)
    }

    var listHeight = parseInt($(".discussion-rooms-list").css("maxHeight"));
    var ulHeight = 0;

    $(".user-rooms-wrap>ul").each(function () {
        ulHeight += parseInt($(this).css("height"));
    });


    if (listHeight < ulHeight) {
        $(".room-title-wrap>ul:last-child").css("paddingRight", "5px");
    } else {
        $(".room-title-wrap>ul:last-child").css("paddingRight", "0");
    }
});