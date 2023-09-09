$(function(){
    console.log($(".discussion-rooms-list").css("maxHeight"));
    console.log($(".user-rooms-wrap>ul").css("height"));

    var listHeight = parseInt($(".discussion-rooms-list").css("maxHeight"));
    var ulHeight = 0;

    $(".user-rooms-wrap>ul").each(function(){
        ulHeight += parseInt($(this).css("height"));
    });


    if(listHeight < ulHeight){
        $(".room-title-wrap>ul:last-child").css("paddingRight", "5px");
    } else {
        $(".room-title-wrap>ul:last-child").css("paddingRight", "0");
    }
});