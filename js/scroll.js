$(document).ready(function() {

    $('.scrollDown').click(function() {      // When arrow is clicked
        $('html, body').animate({
            scrollTop: $(document).height()-$(window).height()                       // Scroll to bottom of body
        }, 5000);
        return false;
    });

}); // ready() END