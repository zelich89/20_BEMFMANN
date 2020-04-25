$(".js-button-1").click(function() {
    if (!$(".js-card-1").hasClass('active')) {
        $(".js-card-1").addClass('active');
        $(".js-card-1").removeClass('middle');
    }

    if (!$(".js-card-2").hasClass('active') && !$(".js-card-2").hasClass('middle')) {
        $(".js-card-2").addClass('middle');
    }

    if ($(".js-card-2").hasClass('active')) {
        $(".js-card-2").removeClass('active');
        $(".js-card-2").addClass('hide');
        setTimeout (function() {
            $(".js-card-2").removeClass('hide');
        }, 200);
    }

    if (!$(".js-card-3").hasClass('active') && !$(".js-card-3").hasClass('middle')) {
        $(".js-card-3").addClass('middle');
    }

    if ($(".js-card-3").hasClass('active')) {
        $(".js-card-3").removeClass('active');
        $(".js-card-3").addClass('hide');
        setTimeout (function() {
            $(".js-card-3").removeClass('hide');
        }, 200);
    }

    if (!$("js-button-1").hasClass('active')) {
        $(".js-button-1").addClass('active');
        $(".js-button-2").removeClass('active');
        $(".js-button-3").removeClass('active');
    }
})



$(".js-button-2").click(function() {
    if (!$(".js-card-2").hasClass('active')) {
        $(".js-card-2").addClass('active');
        $(".js-card-2").removeClass('middle');
    }

    if (!$(".js-card-3").hasClass('active') && !$(".js-card-3").hasClass('middle')) {
        $(".js-card-3").addClass('middle');
    }

    if ($(".js-card-3").hasClass('active')) {
        $(".js-card-3").removeClass('active');
        $(".js-card-3").addClass('hide');
        setTimeout (function() {
            $(".js-card-3").removeClass('hide');
        }, 200);
    }

    if (!$(".js-card-1").hasClass('active') && !$(".js-card-1").hasClass('middle')) {
        $(".js-card-1").addClass('middle');
    }

    if ($(".js-card-1").hasClass('active')) {
        $(".js-card-1").removeClass('active');
        $(".js-card-1").addClass('hide');
        setTimeout (function() {
            $(".js-card-1").removeClass('hide');
        }, 200);
    }

    if (!$("js-button-2").hasClass('active')) {
        $(".js-button-2").addClass('active');
        $(".js-button-1").removeClass('active');
        $(".js-button-3").removeClass('active');
    }
})



$(".js-button-3").click(function() {
    if (!$(".js-card-3").hasClass('active')) {
        $(".js-card-3").addClass('active');
        $(".js-card-3").removeClass('middle');
    }

    if (!$(".js-card-1").hasClass('active') && !$(".js-card-1").hasClass('middle')) {
        $(".js-card-1").addClass('middle');
    }

    if ($(".js-card-1").hasClass('active')) {
        $(".js-card-1").removeClass('active');
        $(".js-card-1").addClass('hide');
        setTimeout (function() {
            $(".js-card-1").removeClass('hide');
        }, 200);
    }

    if (!$(".js-card-2").hasClass('active') && !$(".js-card-2").hasClass('middle')) {
        $(".js-card-2").addClass('middle');
    }

    if ($(".js-card-2").hasClass('active')) {
        $(".js-card-2").removeClass('active');
        $(".js-card-2").addClass('hide');
        setTimeout (function() {
            $(".js-card-2").removeClass('hide');
        }, 200);
    }

    if (!$("js-button-3").hasClass('active')) {
        $(".js-button-3").addClass('active');
        $(".js-button-1").removeClass('active');
        $(".js-button-2").removeClass('active');
    }
})

/*$(".js-button-2").click(function() {
    if (!$(".js-card-2").hasClass('active')) {
        $(".js-card-2").addClass('active');
        $(".js-card-2").removeClass('middle');
        $(".js-card-1").removeClass('active');
        $(".js-card-3").removeClass('active');
    }
    else {
    }

    if ($(".js-card-1").hasClass('active')) {
        $(".js-card-1").removeClass('active');
    }
    if ($(".js-card-1").hasClass('middle')) {
        $(".js-card-1").removeClass('middle');
    }

    if (!$(".js-card-3").hasClass('active') && !$(".js-card-3").hasClass('middle')) {
        $(".js-card-3").addClass('middle');
    }

    if (!$("js-button-2").hasClass('active')) {
        $(".js-button-2").addClass('active');
        $(".js-button-1").removeClass('active');
        $(".js-button-3").removeClass('active');
    }
})*/



/*$(".js-button-3").click(function() {
    if (!$(".js-card-3").hasClass('active')) {
        $(".js-card-3").addClass('active');
        $(".js-card-3").removeClass('middle');
        $(".js-card-1").removeClass('active');
    }
    else {
    }

    if ($(".js-card-2").hasClass('active')) {
        $(".js-card-2").removeClass('active');
    }
    if ($(".js-card-2").hasClass('middle')) {
        $(".js-card-2").removeClass('middle');
    }

    if (!$(".js-card-1").hasClass('active') && !$(".js-card-1").hasClass('middle')) {
        $(".js-card-1").addClass('middle');
    }

    if (!$("js-button-3").hasClass('active')) {
        $(".js-button-3").addClass('active');
        $(".js-button-1").removeClass('active');
        $(".js-button-2").removeClass('active');
    }
})*/
