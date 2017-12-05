// 作用http模块发起请求

var https=require('https');
https.get('https://www.baidu.com/',function (res) {
    var html='';
    //真正的拿数据需要绑定data时间
    res.on('data',function (txt) {
        console.log('---------------------')
        console.log(txt.toString())
        console.log(txt.length)
        //html+=txt;
    });


    //绑定end时间，当服务器所有的数据发送完完毕时触发
    res.on('end',function () {
        console.log(html);
    })

});
