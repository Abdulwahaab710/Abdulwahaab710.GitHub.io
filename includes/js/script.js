$(document).ready(function() {
    
    let sections = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight();
    $(window).scroll(() => {
        if ($(window).scrollTop() > $(".parallax-container").height()) {
            $('#navbar').addClass('navbar-fixed');
            $('.aboutMe').addClass('padding');
        }
        if ($(window).scrollTop() < $(".parallax-container").height()+1) {
            $('#navbar').removeClass('navbar-fixed');
            $('.aboutMe').removeClass('padding');
            $('.active').removeClass('active');
            $('#homeLink').addClass('active');
            // $('#mobile-demo').hide();
        }
        let cur_pos = $(this).scrollTop();
        sections.each(function() {
            let top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
         
            if (cur_pos >= top && cur_pos <= bottom && $(window).width() > 768) {
              nav.find('a').removeClass('active');
              sections.removeClass('active');
         
              $(this).addClass('active');
              nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });

    let height = $(window).height()-$(".navbar").height();
    $("#navbg").css("height", height);
    $(".outer").css("height", height);
    $(window).resize( () =>{
        height = $(window).height()-$(".navbar").height();
        $("#navbg").css("height", height);
        $(".outer").css("height", height);
    });

    $(".nav-link-hash").click( (e) =>{
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(e.target.hash).offset().top
        }, 1000);
    });
    
    $('.button-collapse').click( (e) => {
        e.preventdefault;
        if($('#mobile-demo').css('display') == 'none'){
            $('#mobile-demo').css('display', 'block');
            $('.button-collapse').css('background', '#0093ef');
        }else{
            $('#mobile-demo').css('display', 'none');
            $('.button-collapse').css('background', '#222125');
        }
    });

    $('.mobile-nav-links').click((e) =>{
        $('#mobile-demo').hide();
        $('.button-collapse').css('background', '#222125');
    });
});







