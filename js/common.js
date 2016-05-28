
$(document).ready(function(){
    RESPONSIVEUI.responsiveTabs();
  
    $('.menu-menu').click(function(){
        $('.header-top__menu-unpressed').toggleClass('header-top__menu-pressed');
        
        if(!$('.header-top__menu-unpressed').hasClass('header-top__menu-pressed')){
            //alert(1);
            $('.header-top__menu-unpressed').addClass('header-top__menu-pressed2');
            setTimeout("$('.header-top__menu-unpressed').removeClass('header-top__menu-pressed2')",1000);
        } else {
            
        }

        setTimeout("$('.header-top__menu-unpressed ul').toggleClass('menu-list-pressed')",500);
        $('body').toggleClass('bodyPad');
        //$('#icon1').toggleClass('ae-dispnone');
        setTimeout("$('#icon1').toggleClass('ae-dispnone')",500);
        setTimeout("$('#icon2').toggleClass('ae-dispnone')",500);

        //$('.bodyPad').toggleClass('mask');
        
        //$('#imagehide1').toggleClass('col-sm-8');
        //$('#imagehide2').toggleClass('col-sm-4');
        //$('#imagehide1').toggleClass('col-sm-12');
        //$('#imagehide2').toggleClass('col-sm-12');
        //$('.ae-absolute').toggleClass('ae-absolute-temp');
        //$('#h1-temp').toggleClass('h1-temp');
        //$('.ae__margin6').toggleClass('ae__margin5-temp');
        //$('.ae__margin6 ul').toggleClass('ae__margin5');
        //$('.ae-relative').toggleClass('ae-relative-temp');

    });

    $('.ae-menu__margin2-show').click(function(e){
        if ($(this).css('display') == "block"){
           $(this).parent().parent().parent().parent().parent().parent().find('.ae-hide-show').slideToggle("fast");
        }
    });


    $(".single_image").fancybox();

    $("a[rel=group]").fancybox({
      'transitionIn' : 'none',
      'transitionOut' : 'none',
      'titlePosition' : 'over',
      'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
       return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
       }
    });
    $("a[rel=group2]").fancybox({
      'transitionIn' : 'none',
      'transitionOut' : 'none',
      'titlePosition' : 'over',
      'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
       return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
       }
    });

    $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        $('#mask').fadeTo("slow",0.8); 
        var winH = $(window).height();
        var winW = $(window).width();
        posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        $(id).css('top',  posTop+150);
        $(id).css('left', winW/2-$(id).width()/2);
        $(id).fadeIn(500); 
    });

    $('a[name=modal-card]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        $('#mask').fadeTo("slow",0.8); 
        var winH = $(window).height();
        var winW = $(window).width();
        posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        $(id).css('top',  posTop+100);
        $(id).css('left', winW/2-$(id).width()/2);
        $(id).fadeIn(500); 
    });
     
    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#mask, .window').hide();
        $('.window').hide();
    }); 
      
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    }); 
    
// ******************* Карусель для Главной страницы ********************
    $('.homepage-slider').owlCarousel({
        loop: true,
        margin:30,
        responsiveClass:true,
        nav: true,
       
        navText:['',''],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.news-slider').owlCarousel({
        loop: true,
        margin:30,
        responsiveClass:true,
        nav: true,
       
        navText:['',''],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.red-arrow').click(function(){
        
        var val = $(this).html();
        if (val.trim() == '<span class="red-arrow-down"></span>') {
            $(this).parent().parent().parent().find('.downpage__bottom').slideToggle();
            $(this).html('<span class="red-arrow-up"></span>');
        }else{
            $(this).parent().parent().parent().find('.downpage__bottom').slideToggle();
            $(this).html('<span class="red-arrow-down"></span>');
        }

        
        return false;
    }); 

    $('.red-arrow-2').click(function(){
        
        var val = $(this).html();
        if (val.trim() == '<span class="red-arrow-down"></span>') {
            $(this).parent().parent().parent().parent().parent().parent().find('.downpage__bottom').slideToggle();
            $(this).html('<span class="red-arrow-up"></span>');
        }else{
            $(this).parent().parent().parent().parent().parent().parent().find('.downpage__bottom').slideToggle();
            $(this).html('<span class="red-arrow-down"></span>');
        }

        
        return false;
    }); 

});
