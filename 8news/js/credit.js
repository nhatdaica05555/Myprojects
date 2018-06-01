$(function() {

    $(window).scrollTop(0);
    var cdai = $(window).width();
    $(window).resize(function(event) {
        /* Act on the event */
        var cdai = $(window).width();

    });

    if (cdai < 576) {
        //jQuery.fx.off = true;
        $('.affix').remove();

    }

    $('#topabout').click(function(e) {
        $('html').animate({
            scrollTop: $('#footcredit').offset().top
        }, 1000)
        return false;
    });

    $('#topcontact').click(function(e) {
        $('html').animate({
            scrollTop: $('.contact').offset().top
        }, 1000)
        return false;
    });

    $('.tophome').click(function(e) {
        $('html').animate({
            scrollTop: 0
        }, 1000)
        return false;
    });

    $('.topthegioi').click(function(e) {
        $('html').animate({
            scrollTop: 751
        }, 1000)
        return false;
    });

    $('.topphimanh').click(function(e) {
        $('html').animate({
            scrollTop: 1160
        }, 1000)
        return false;
    });

    $('.topamnhac').click(function(e) {
        $('html').animate({
            scrollTop: 1160
        }, 1000)
        return false;
    });

    $('.topcongnghe').click(function(e) {
        $('html').animate({
            scrollTop: 1820
        }, 1000)
        return false;
    });




})