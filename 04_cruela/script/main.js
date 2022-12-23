// APPROCAH 
$(window).on('scroll resize', function(){
    var scrollpos = 0;
    scrollpos = $(document).scrollTop();
    fix();
    fixheader();

    function fix(){
        if(scrollpos > 1250){
            $('.text_fix .text').addClass('on');}
        else{$('.text_fix .text').removeClass('on');}
        if(scrollpos > 2700){$('.text_fix .text').removeClass('on');}
    }

    function fixheader(){
        if(scrollpos > 80){$('header').addClass('on');}
        else($('header').removeClass('on'));
    }
});

// TOP SCROLL
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 70 ){
            $('.btn-top').addClass('active');
        }
        else{
            $('.btn-top').removeClass('active');
        }
    });
});

// scrolla script
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false
    });
});

$(function(){
    Splitting();
});

// GNB menu
$(function(){
    $('header .gnb-btn').on('click',function(){
        $('header nav.gnb').toggleClass('on');
        $('.contents').on('click',function(){
            $('header nav.gnb').removeClass('on');
        });
    });
});


















































