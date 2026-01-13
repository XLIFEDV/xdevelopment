$(document).ready(function() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.index').addClass('mobile');
    };
});
const pagearea = document.getElementById('page_area');
const footerspace = document.getElementById('footer_space');
pagearea.addEventListener("scroll", () => {
    const scrollTop = pagearea.scrollTop;
    const scrollHeight = pagearea.scrollHeight;
    const clientHeight = pagearea.clientHeight;

    // HEADER STATE
    if(scrollTop > 0){
        if(!$('.index').hasClass('header')){
            $('.index').addClass('header');
        };
        if($('.index #page_area > .hero').hasClass('scroll')){
            $('.index #page_area > .hero.scroll').removeClass('scroll');
        };
    }else{
        if(!$('.index #page_area > .hero').hasClass('scroll')){
            $('.index #page_area > .hero').addClass('scroll');
        };
        if($('.index').hasClass('header')){
            $('.index').removeClass('header');
        };
    };
    
    // FOOTER STATE (scroll sonu)
    if(scrollTop + clientHeight >= (scrollHeight - footerspace.scrollHeight) - 1){
        if(!$('.index').hasClass('footer')){
            $('.index').addClass('footer');
        };
        const height = ((scrollTop + clientHeight) - (scrollHeight - footerspace.scrollHeight));
        $('.index .footer_area').css({
            "bottom":0,
            "height":height+"px"
        });
    }else{
        if($('.index').hasClass('footer')){
            if(!$('.index #page_area > .hero').hasClass('scroll')){
                $('.index #page_area > .hero').addClass('scroll');
            };
            $('.index').removeClass('footer');
            $('.index .footer_area').css({
                "bottom":"-5px",
                "height":0
            });
        };
    };
});
$(document).ready(()=>{
    $('.index #page_area > .hero').css('height', pagearea.clientHeight+'px');
    $('#year').text(new Date().getFullYear());
});
let block = false;
$(document).on('click','.index .header_area > .button',function(){
    if(block){return}
    block = true;
    $(this).addClass('active');
});