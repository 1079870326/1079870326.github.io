jQuery(document).ready(function($) { 
	$('.pro-item ul li,.cp-cats ul li,.cp-list li').hover(function() {
		$(this).find('.pro-cat-con').stop().animate({top:0}, 500);
        },
        function() {
			$(this).find('.pro-cat-con').stop().animate({top:'100%'}, 500);
        });
		$(function(){
	$(window).scroll(function(){
	if($(window).scrollTop()>120){
	$("#side-bar .gotop").fadeIn();
	}
	else{
	$("#side-bar .gotop").fadeOut();
	}
	});
	$("#side-bar .gotop").click(function(){
	$('html,body').animate({'scrollTop':0},500);
	});
	});
	$('.single-content img').parent("a").addClass("fancybox").attr("data-fancybox-group","gallery");
	$('.fancybox').fancybox();	
  var swiper = new Swiper('#slider .swiper-container', {
        pagination: '#slider .swiper-pagination',
        paginationClickable: true,
        nextButton: '.icon-arrows-right',
        prevButton: '.icon-arrows-left',
		autoplay: 5000,
    });
	  var swiper = new Swiper('.cp-img  .swiper-container', {
        pagination: '.cp-img  .swiper-pagination',
        paginationClickable: true,
        nextButton: '.icon-arrows-right',
        prevButton: '.icon-arrows-left',
		autoplay: 5000,
    });
	
	var swiper = new Swiper('.inews-img  .swiper-container', {
        pagination: '.inews-img  .swiper-pagination',
        paginationClickable: true,
        nextButton: '.icon-arrows-right',
        prevButton: '.icon-arrows-left',
		autoplay: 5000,
    });
	 var swiper = new Swiper('.case .swiper-container', {
        pagination: '.case .swiper-pagination',
        paginationClickable: true,
        nextButton: '.icon-arrows-right',
        prevButton: '.icon-arrows-left',
		autoplay: 5000,
		slidesPerView : 4,
		spaceBetween : 20,
    });  

	$(function(){
	$(window).scroll(function(){
	if($(window).scrollTop()>120){
	$("#side-bar .gotop").fadeIn();
	}
	else{
	$("#side-bar .gotop").fadeOut();
	}
	});
	$("#side-bar .gotop").click(function(){
	$('html,body').animate({'scrollTop':0},500);
	});
	});
	$(function(){
		$(".dh").hover(function(){
		$(".hied_con").css("display","block");
		},function(){
    $(".hied_con").css("display","none");
	});
		
	});
	$(".cat-list").prepend(' <p><b></b></p>'); 
	$('.cat-list li:first,.single-pro-list li:first').addClass('on');
	$('.cat-list li').mouseover(function(){
		var liindex = $('.cat-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.pro-wrap div.pro-item').eq(liindex).fadeIn(150).siblings('div.pro-item').hide();
		var liWidth = $('.cat-list li').width();
		$('.cat-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
		$('.single-pro-list li').mouseover(function(){
		var liindex = $('.single-pro-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.pro-wrap div.pro-item').eq(liindex).fadeIn(150).siblings('div.pro-item').hide();
		var liWidth = $('.cat-list li').width();
		$('.cat-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
	$('.header-menu-con li').hover(function() {
           
			  $(this).find('ul').show();
        },
        function() {
			$(this).find('ul').hide();
        });
		function current(){ 
var d=new Date(),str=''; 
str +=d.getFullYear()+'年'; //获取当前年份 
str +=d.getMonth()+1+'月'; //获取当前月份（0——11） 
str +=d.getDate()+'日'; 
str +=d.getHours()+'时'; 
str +=d.getMinutes()+'分'; 
str +=d.getSeconds()+'秒'; 
return str; } 
setInterval(function(){$(".tool").html(current)},1000); 
	$('#close_im').bind('click',function(){
		$('#main-im').css("height","0");
		$('#im_main').hide();
		$('#open_im').show();
	});
	$('#open_im').bind('click',function(e){
		$('#main-im').css("height","272");
		$('#im_main').show();
		$(this).hide();
	});
	$('.go-top').bind('click',function(){
		$(window).scrollTop(0);
	});
	$(".weixing-container").bind('mouseenter',function(){
		$('.weixing-show').show();
	})
	$(".weixing-container").bind('mouseleave',function(){        
		$('.weixing-show').hide();
	});
$('.header-menu-con').slicknav({
		label: '',
	prependTo:'.mini'
});
});

