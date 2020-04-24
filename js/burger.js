$(".js-switch").click(function() {
    $(".js-sect").toggleClass("active");
});

$(".js-card").click(function() {
    $(this).toggleClass("active");
    $(this).siblings().removeClass('active');
});

