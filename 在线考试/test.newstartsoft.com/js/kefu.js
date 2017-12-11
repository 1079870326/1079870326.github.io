// document.writeln("<div id=\"contactWeContainer\" style='top:20%;width: 390px;'>");
// document.writeln("        <div id=\"contactContext\">");
// document.writeln("            <div class=\"contactWe\">");
// document.writeln("                <ul>");
// document.writeln("                    <li><a target=\"_blank\" href=\"\#\" class='getsale'>");
// document.writeln("                        <img border=\"0\" src=\"http://wpa.qq.com/pa?p=2:2904555322:52\" alt=\"点击这里给我发消息\" ");
// document.writeln("                          title=\"点击这里给我发消息\" /> QQ客服</a></li>");
// document.writeln("                    <li><a target=\"_blank\" href=\"\http://p.qiao.baidu.com/im/index?ucid=6998652&siteid=4290248&bid=bb2013bbf59b012a08cbf512&bid=bb2013bbf59b012a08cbf512\" >");
// document.writeln("                        <img border=\"0\" src=\"http://www.jisupeixun.com/Content/img2_0/index/index_layout2_10.png\" width=\"20px\" style='background-color: #1BA1E2;border-radius: 5px;' alt=\"点击这里给我发消息\" ");
// document.writeln("                          title=\"点击这里给我发消息\" /> 在线客服</a></li>");
//
// document.writeln("                    <li style='display: none;'><a style='cursor: pointer;'>");
// document.writeln("                        <img border=\"0\" src=\"http:www.newstartsoft.com/Content/images/zy.png\" width=\"20px\" alt=\"点击这里给我发消息\" ");
// document.writeln("                          title=\"点击这里给我发消息\" /> 电话咨询</a>");
// document.writeln("                          <span style='color:red;font-weight: 700;padding: 3px 0;'>010-59497600</span>");
// document.writeln("                      </li>");
//
// document.writeln("                    <li style='border:0px;'><a style='display: block;cursor: pointer;'>");
// document.writeln("                        <img border=\"0\" src=\"http://www.newstartsoft.com/Content/images/wxicon.png\" width=\"20px\" alt=\"点击这里给我发消息\" ");
// document.writeln("                          title=\"点击这里给我发消息\" />微信客服</a>");
// document.writeln("                        <img border=\"0\" src=\"http://www.newstartsoft.com/Content/images/weixin.jpg\" width=\"100%;\" class=\"weixin\" alt=\"关注我们,更多惊喜\" />");
// document.writeln("                    <div class='big_weixin' style='display:none;position: absolute;float: left;right: 90px;width: 258px;z-index: 100;top: 100px;padding: 5px;'><img border=\"0\" src=\"http://www.newstartsoft.com/Content/images/weixin.jpg\" width=\"100%;\" class=\"weixin\" alt=\"关注我们,更多惊喜\" /></div>");
// document.writeln("</li>");
//
//
// document.writeln("                </ul>");
//
// document.writeln("                <ul id=\"applyTryout\">");
// document.writeln("                    <li class=\"ct_Last\" style='border-bottom: 1px solid #CCC !important;'><a href=\"http://www.newstartsoft.com/home/apply\" target=\"_blank\" class=\"ct_Apply\">人工演示</a></li>");
// //document.writeln("                    <li class=\"ct_Last\" style='border-bottom: 1px solid #CCC !important;'><a href=\"http://www.newstartsoft.com/home/apply?\"  target=\"_blank\" class=\"ct_Apply\">申请上门</a></li>");
// document.writeln("                    <li class=\"ct_Last\"><a href=\"http://console.jisupeixun.com/user/register.html\" class=\"ct_Apply\">自助试用</a></li>");
// document.writeln("                </ul>");
// document.writeln("                <ul style='padding-bottom:0; border-bottom:5px solid #1BA1E2;'>");
// document.writeln("                    <li class=\"ct_Title\">电话咨询</li>");
// document.writeln("                    <li class=\"ct_Last\">");
// document.writeln("                        <label id=\"phone1\" style='margin-bottom:0;padding: 5px 0;color: red;'>");
// document.writeln("                            010-68465811</label></li>");
//
// document.writeln("                </ul>");
// document.writeln("            </div>");
// document.writeln("            <div>");
// document.writeln("                <a id=\"ct_Link\" href=\"javascript:void(0)\" data=\"1\">在线客服<br />");
// document.writeln("                    <span id=\"ct_Arrow\">&lt;&lt;</span></a>");
// document.writeln("            </div>");
// document.writeln("            <div class=\"clear\">");
// document.writeln("            </div>");
// document.writeln("        </div>");
// document.writeln("    </div>");
// var isChrome = navigator.userAgent.toLowerCase().match(/chrome/) != null; //判断是否是chrome浏览器
// $(function() {
//     var browser = {
//         versions: function() {
//             var u = navigator.userAgent, app = navigator.appVersion;
//             return {         //移动终端浏览器版本信息
//                 trident: u.indexOf('Trident') > -1, //IE内核
//                 presto: u.indexOf('Presto') > -1, //opera内核
//                 webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
//                 gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
//                 mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
//                 ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//                 android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
//                 iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
//                 iPad: u.indexOf('iPad') > -1, //是否iPad
//                 wp: u.indexOf('IEMobile') > -1, //是否wp
//                 symbianos: !!u.match(/SymbianOS.*/), //是否SymbianOS
//                 webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
//             };
//         } (),
//         language: (navigator.browserLanguage || navigator.language).toLowerCase()
//     }
//     if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.symbianos || browser.versions.wp) {
//         var $ctLinkObj1 = $(".contactWe");
//         var $linkPrompt1 = $("#ct_Arrow");
//         $ctLinkObj1.stop().animate({ width: 0, opacity: 0 }, function() {
//             $linkPrompt1.text("<<");
//         });
//         $("#ct_Link").attr("data", 0);
//     }
//
//     //二级菜单
//     $("#headMenu>li").each(function() {
//         var menuMore = $(this).children('.menuMore');
//         if (menuMore.length > 0) {
//             var menuLink = $(this).children('a');
//             menuMore.css({ 'left': (menuLink.width() - menuMore.width()) / 2 });
//             menuLink.css('text-decoration', 'none');
//             if (menuMore.children('.mm_imgList').length < 1) {
//                 menuMore.children('.mm_LinkList').css('border-left', 'none');
//             }
//             $(this).hover(function() {
//                 menuLink.addClass('menuHover');
//                 menuMore.stop().css('display', 'block');
//             }, function() {
//                 menuMore.css('display', 'none');
//                 menuLink.removeClass('menuHover');
//             });
//         }
//     });
//     $(".weixin").mousemove(function() {
//         $(".big_weixin").show();
//     });
//     $(".weixin").mouseout(function() {
//         $(".big_weixin").hide();
//     });
//     //QQ客服
//     var $windowObj = $(window);
//     function bindHeightAndWidth() {//自动宽高拉伸方法
//         var topHeight = $(".headhight").height() + $(".Minibanner").height() + 96; //96是页面其它元素的高度，把这些高度全部减去
//         if ($(".IndexMainN_left").length > 0 && $(".IndexMainN_right").length > 0) {
//             var $leftObj = $(".IndexMainN_left");
//             var $rightObj = $(".IndexMainN_right");
//             if ($leftObj.height() < ($windowObj.height() - topHeight) && $rightObj.height() < ($windowObj.height() - topHeight)) {
//                 //                        alert("系统：" + $windowObj.height() + "，右侧：" + $rightObj.height() + "，系统减后：" + ($windowObj.height() - topHeight) + "，上高：" + topHeight);
//                 $leftObj.height($windowObj.height() - topHeight + 59);
//                 $rightObj.height($windowObj.height() - topHeight);
//                 if ($(".contextList").length > 0) {
//                     $(".contextList").height($windowObj.height() - (topHeight + 80));
//                 }
//             } else {
//
//                 if ($rightObj.height() > ($leftObj.height() + 59)) {//右侧大于左侧
//                     $leftObj.height($rightObj.height() + 59);
//                 } else {//左侧大于右侧
//                     $rightObj.height($leftObj.height() - 59);
//                 }
//             }
//         } else if ($(".contextList").length > 0) {
//             var mainObj = $(".contextList");
//             if (mainObj.height() < ($windowObj.height() - topHeight + 80)) {
//                 mainObj.height($windowObj.height() - (topHeight + 80));
//             }
//         }
//     }
//     if (!isChrome) bindHeightAndWidth(); //如果不是chrome浏览器，则在DOM加载完毕即可绑定自动拉伸宽高事件，否则只能在onload中加载，因为chrome渲染img是在onload之后
//     else window.onload = bindHeightAndWidth;
//     //右侧列表相关（申请试用）
//     var $ctLinkObj = $(".contactWe");
//     $("#ct_Link").click(function() {
//         var $linkPrompt = $("#ct_Arrow");
//         switch (parseInt($(this).attr("data"))) {
//             case 0: //当前显示，隐藏操作
//                 $ctLinkObj.stop().animate({ width: 97, opacity: 1 }, function() {
//                     $linkPrompt.text(">>");
//                 });
//                 $("#contactWeContainer").css("width", "390px");
//                 $(this).attr("data", 1);
//                 break;
//             default: //当前隐藏，显示操作
//                 $ctLinkObj.stop().animate({ width: 0, opacity: 0 }, function() {
//                     $linkPrompt.text("<<");
//                 });
//                 $("#contactWeContainer").css("width", "auto");
//
//                 $(this).attr("data", 0);
//                 break;
//         }
//         return false;
//     });
//     //    $(".ct_Apply").click(function () {
//     //        $("#masking").fadeIn(300);
//     //        $("#userForm").fadeIn(300, function () {
//     //            $("#userName").focus();
//     //        });
//     //        return false;
//     //    });
//
//     var $pt = $("#promptData"); //获取提示框对象
//     $("#userName,#userPhone").keydown(function(e) {
//         $pt.text("");
//         var event = e || event; //兼容性处理
//         if (e.keyCode == 13) {
//             $("#uf_Submit").click();
//         } else if (e.keyCode == 27) {
//             $("#uf_Close").click();
//             return false;
//         }
//     });
//     $("#masking").dblclick(function() {//蒙版双击事件
//         $("#uf_Close").click();
//     });
//     $("#uf_Close").click(function() {
//         $("#userForm").fadeOut(300);
//         $("#masking").fadeOut(300);
//         $("#promptData").html("&nbsp;");
//         $("#userName,#userPhone").val("");
//         return false;
//     });
//     //提交
//     $("#uf_Submit").click(function() {
//         if (jQuery.trim($("#userName").val()) == "") {
//             $pt.text("姓名不能为空");
//             return false;
//         }
//         reg = /^(\+\d{2,3}\-)?\d{11}$/;
//         if (!reg.test($("#userPhone").val())) {
//             $pt.text("电话(手机)格式不正确");
//             return false;
//         }
//         $("#uf_Submit").attr("disabled", "disabled");
//         $pt.text("正在提交...");
//         //        $.ajax({
//         //            url: "http://www.newstartsoft.com/Home/UserContact",
//         //            type: "get",
//         //            async: false,
//         //            contentType: "application/json",
//         //            dataType: "jsonp",
//         //            jsonp: 'jsoncallback',
//         //            data: 'userName=' + jQuery.trim($("#userName").val()) + '&userPhone=' + jQuery.trim($("#userPhone").val()),
//         //            success: function (data) {
//         //                if (parseInt(data) < 1) {
//         //                    $pt.text("提交失败，请检查您的数据或网络");
//         //                } else {
//         //                    $pt.text("提交成功");
//         //                    $("#userName,#userPhone").val("");
//         //                    setTimeout(function () { $("#uf_Close").click(); }, 500);
//
//         //                }
//         //            },
//         //            error: function (e) {
//         //                $pt.text("提交异常，请检查您的网络");
//         //            }
//         //        });
//         var url = "http://www.newstartsoft.com/Home/UserContact?userName=" + jQuery.trim($("#userName").val()) + '&userPhone=' + jQuery.trim($("#userPhone").val());
//         $.ajax({
//             url: url,
//             dataType: 'jsonp',
//             jsonp: 'jsoncallback',
//             processData: false,
//             type: 'get',
//             success: function(data) {
//                 if (parseInt(data) < 1) {
//                     $pt.text("提交失败，请检查您的数据或网络");
//                 } else {
//                     $pt.text("提交成功");
//                     $("#userName,#userPhone").val("");
//                     setTimeout(function() { $("#uf_Close").click(); }, 500);
//                 }
//             },
//             error: function(d, msg) {
//                 $pt.text("提交异常，请检查您的网络");
//             }
//         });
//
//         return false;
//     });
//     getsale();
// });
// function tiyanshow() {
//     $('#Experience').slideDown();
//     $('#Experience li').each(function (index) {
//         $(this).delay(index).animate({
//             width: '230px',
//             opacity: 1
//         }, (index) * 200);
//     });
// }
// function getsale() {
//     var saleqq = new Array("1726887870", "2904555322", "2308318889");
//     var index = Math.floor((Math.random() * saleqq.length));
//     var href = "http://wpa.qq.com/msgrd?v=3&uin=" + saleqq[index] + "&site=qq&menu=yes";
//     $(".getsale").attr("href", href);
// }
//
// $('#Experience li').mouseenter(function () {
//     $("#hover_bg").stop().animate({ left: $(this).position().left - 10, top: $(this).position().top + 5 }, 300);
// })