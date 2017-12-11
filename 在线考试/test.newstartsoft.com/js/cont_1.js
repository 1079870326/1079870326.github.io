// JavaScript Document
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            wp: u.indexOf('IEMobile') > -1, //是否wp
            symbianos: !!u.match(/SymbianOS.*/), //是否SymbianOS
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.symbianos || browser.versions.wp) {



  //  $(".caidan").hide();
 //   $(".app_header").show();
    $(".tab").css("width", "100%");
    $(".tab1 li").css("width", "33.33%");
$(".hd img").css("min-height","125px")
 }
	
 else {

   // $(".caidan").show();
   // $(".app_header").hide();
  
}

  
try{
var browser=navigator.appName 
var b_version=navigator.appVersion 
var version=b_version.split(";"); 
var trim_Version=version[1].replace(/[ ]/g,""); 
  
if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") 
{ 
 layer.confirm('浏览器版本过低，为了更好的体验，请使用<span style="color:red">IE9</span>以上浏览器或最新版 FireFoxGoogle Chrome！', {btn: ['确定'] 
        });
} 
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") 
{ 
 layer.confirm('浏览器版本过低，为了更好的体验，请使用<span style="color:red">IE9</span>以上浏览器或最新版 FireFox，Google Chrome！', {btn: ['确定']
  });
       
} 

}catch (e) {
console.log(e);
}

$(".qiehuan_left,.qiehuan_right").find("img").each(function(){
$(this).mouseenter(function(){

$(this).attr("src","/Content/New/img/jiantou_hover.png");
});
$(this).mouseleave(function(){

$(this).attr("src","/Content/New/img/jiantou.png");
});
});

$("ul.c-tab-title1 a:eq(0)").click(function (b) {
    $(".comm-course-list:eq(0)").show();
    $(".comm-course-list:eq(1)").hide();
    $(".comm-course-list:eq(2)").hide();
    $(".comm-course-list:eq(3)").hide();
    $("ul.c-tab-title1 a:eq(0)").addClass("active").show();
    $("ul.c-tab-title1 a:eq(1)").removeClass("active");
    $("ul.c-tab-title1 a:eq(2)").removeClass("active");
    $("ul.c-tab-title1 a:eq(3)").removeClass("active");
    $(this).addClass("active");
});


$("ul.c-tab-title1 a:eq(1)").click(function (c) {
    $(".comm-course-list:eq(0)").hide();
    $(".comm-course-list:eq(1)").show();
    $(".comm-course-list:eq(2)").hide();
    $(".comm-course-list:eq(3)").hide();
    $("ul.c-tab-title1 a:eq(0)").removeClass("active");
    $("ul.c-tab-title1 a:eq(1)").addClass("active").show();
    $("ul.c-tab-title1 a:eq(2)").removeClass("active");
    $("ul.c-tab-title1 a:eq(3)").removeClass("active");
    $(this).addClass("active");
});


$("ul.c-tab-title1 a:eq(2)").click(function (a) {
    $(".comm-course-list:eq(0)").hide();
    $(".comm-course-list:eq(1)").hide();
    $(".comm-course-list:eq(2)").show();
    $(".comm-course-list:eq(3)").hide();
    $("ul.c-tab-title1 a:eq(0)").removeClass("active");
    $("ul.c-tab-title1 a:eq(1)").removeClass("active");
    $("ul.c-tab-title1 a:eq(2)").addClass("active").show();
    $("ul.c-tab-title1 a:eq(3)").removeClass("active");
    $(this).addClass("active");
});

$("ul.c-tab-title1 a:eq(3)").click(function (c) {
    $(".comm-course-list:eq(0)").hide();
    $(".comm-course-list:eq(1)").hide();
    $(".comm-course-list:eq(2)").hide();
    $(".comm-course-list:eq(3)").show();
    $("ul.c-tab-title1 a:eq(0)").removeClass("active");
    $("ul.c-tab-title1 a:eq(1)").removeClass("active");
    $("ul.c-tab-title1 a:eq(2)").removeClass("active");
    $("ul.c-tab-title1 a:eq(3)").addClass("active").show();
    $(this).addClass("active");
});
$('.carousel').carousel();

function CenterImgTab(tabid, obj) {
    $(".centerText").hide();
    $(".centerImg").show();
    $("#centerText" + tabid).show();
    $(obj).hide();
}
function CenterTextTab(tabid, obj) {
    $("#centerImg" + tabid).show();
    $(obj).hide();
}
$(function () {
    AddDivTab();
});
function AddDivTab() {
    $("#centerDiv").find(".centerImg").each(function (i) {
        var index = i;
        $(this).attr("id", "centerImg" + i);

        $(this).mouseenter(function () {
            CenterImgTab(index, this);
        });
        //$(this).attr("onMouseMove","CenterImgTab('"+i+"',this)");
    });
    $("#centerDiv").find(".centerText").each(function (i) {
        var index = i;
        $(this).attr("id", "centerText" + i);
        $(this).mouseleave(function () {
            CenterTextTab(index, this);
        });
        //	$(this).attr("onMouseOut","CenterTextTab('"+i+"',this)");
    });
}

function ShowNull(){
layer.confirm('此功能暂无体验，请联系客服体验！', {btn: ['确定'] });
}




try {

    $(window).resize(function () {
        var pagewidth = $(window).width();
        var pageheight = $(window).height();
        //location.reload();
    });

    $(window).scroll(function () {
        var scrollH = $(this).scrollTop();
    });

    $(".nav>ul>li").each(function () {
        $(this).hover(
            function () {
                //var heder_tag = $("#heder_tag").val();
                //var tag_index = 0;
                //switch (heder_tag) {
                //    case "dme":
                //        tag_index = 1;
                //        break;
                //    case "hst":
                //        tag_index = 2;
                //        break;
                //    case "ot5":
                //        tag_index = 3;
                //        break;
                //    case "cld":
                //        tag_index = 4;
                //        break;
                //    case "svr":
                //        tag_index = 5;
                //        break;


                //}
                $(this).find(".nav_c").stop();

               $(this).find(".nav_c").slideDown(300);

                $(this).find(".nav_t b").stop();
                $(this).find(".nav_t b").animate({ "bottom": "-5px" });

            }, function () {
                $(this).find(".nav_c").stop();

                $(this).find(".nav_c").slideUp(110);
                $(this).find(".nav_t b").stop();

                $(this).find(".nav_t b").animate({ "bottom": "5px" });
                //取消的时候还原
                //                    if (past_check) {
                //                        if (tag_index != 0) {
                //                            var diss_id = $(this).parents('li').parents('ul').children('li').eq//(tag_index);
                //                            $(diss_id).find('.nav_t a').css('color', 'rgb(255, 104, 0)');
                //                            //find(".nav_t").find("a").css('color', '#333')
                //                        }
                //                    }
            }
        );
    });
}
catch (e) { }
$(function () {
    var _width = $(window).width();
    if (_width > 760) {
        
    }
    else {
        $(".nav_t b").css("display", "none");
        $(".nav ul").css("background-color", "#f86d0d");
        $(".nav ul li .nav_t a").css("color", "#fff");
    }
});


//宽度<1402时客户箭头消失
$(function () {
    var _width = $(window).width();


    if (_width < 1400) {
        $(".qiehuan_left").css("display", "none");
        $(".qiehuan_right").css("display", "none");

    }
    var _width = $(window).width();
    if (_width <= 760) {
        $(".app_header").css("background-color", "#f86d0d");
        $(".navbar-default .navbar-nav > li > a").css("color", "#fff");

    }


});

$(function () {
    var _width = $(window).width();
    if (_width < 1100) {
        $(".foot-cont").css("display", "none");
        $(".xp_footer").css("display", "black");
    }
    else {
        $(".xp_footer").css("display", "none");
        $(".foot-cont").css("display", "black");
    }
    
    var $pt = $("#promptData"); //获取提示框对象
    $("#userName,#userPhone,#userEmail,#userContext").keydown(function (e) {
        $pt.text("");
        var event = e || event; //兼容性处理
        if (e.keyCode == 13) {
            $("#uf_Submit").click();
        }
    });
    $("#uf_Submit").click(function () {
        if (jQuery.trim($("#userName").val()) == "") {
layer.confirm('姓名不能为空', {btn: ['确定'] });
         //   $pt.text("姓名不能为空");
            return false;
        }
        reg = /^(\+\d{2,3}\-)?\d{11}$/;
        if (!reg.test($("#userPhone").val())) {
layer.confirm('电话(手机)格式不正确', {btn: ['确定'] });
           // $pt.text("电话(手机)格式不正确");
            return false;
        }
        $pt.text("正在提交...");
        $("#uf_Submit").attr('disabled', "true");
        $.ajax({
            url: "/Home/UserContact",
            type: "post",
            contentType: "application/json",
            dataType: "json",
            data: '{"userName":"' + jQuery.trim($("#userName").val()) + '","userPhone":"' + jQuery.trim($("#userPhone").val()) + '","userEmail":"' + jQuery.trim($("#userEmail").val()) + '","userContext":"' + jQuery.trim($("#userContext").val()) + '"}',
            success: function (data) {
                if (parseInt(data) < 1) {
                    layer.confirm('提交失败，请检查您的数据或网络！', { btn: ['确定'] });
                    $("#uf_Submit").attr('disabled', "false");
                   // $pt.text("提交失败，请检查您的数据或网络");
                } else {
layer.confirm('提交成功！', {btn: ['确定'] });
$("#uf_Submit").hide();
$("#uf_Submit").attr('disabled', "false");
                   // $pt.text("提交成功");
                    $("#userName,#userPhone,#userEmail,#userContext").val("");
                    //alert();
                    setTimeout(function () { $pt.text(""); }, 500);

                }
            },
            error: function (e) {
            layer.confirm('提交异常，请检查您的网络！', { btn: ['确定'] });
            $("#uf_Submit").attr('disabled', "false");
               // $pt.text("提交异常，请检查您的网络");
            }
        });
        return false;
    });
IHover();
});
function SuccessTab(page) {
    var index = 0;
    var str = $(".tab").find("a");
    $(".comm-course-list").each(function (i) {
        if (!$(this).is(":hidden")) {
            index = i + page;
        }
    });
    if (index < 0) {
        str[str.length - 1].click();
    }
    else if (index >= str.length) {
        str[0].click();
    } else {
        str[index].click();
    }
}
function GetGNMK(obj){
$("#gnmkGet").show();
$(obj).hide();
}
function IHover(){
$(".bt_w_y").find(".icon").each(function() {
               $(this).mouseenter(function() {
               $(this).parent().prev().addClass("iconHover");
               });
$(this).mouseleave(function() {
              $(this).parent().prev().removeClass("iconHover");
           });
           });

}


