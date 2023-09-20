$(function(){
    $(".options>div>i:nth-child(2)").hide();


    $(".options>div").click(function(){
       $(this).children("i").toggle();
    });
});