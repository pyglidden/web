$(function() {
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
    $(window).scroll(function() {
    var max_width = 990;   
    if ($(window).width() < max_width) {
        $('.topBanner').css('margin-left', -$(this).scrollLeft() + "px");
    }
    });
});