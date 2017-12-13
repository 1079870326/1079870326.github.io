/*
*网络爬虫的实现原理
* 提取club.lenovo.com.cn首页中的所有图片
* 发起请求-读取首页html-提取所有图片的地址-向图片地址发起请求-获取图片数据-将图片保存到硬盘
*
* 需求：用node.js编写代码实现 下载 网站首页的所有的图片
* 开发思路：
*        1.使用http模块发起请求，获取到相应的数据
*        2.分析html数据，提取所有的图片地址
*        3.根据图片地址再次发起请求，获取图片文件保存到硬盘中
*
 */


var https=require('https');
var fs=require('fs');
var path=require('path');
//
https.get('https://www.meitulu.com',function (res) {

    var content=''
    //通过相应对象，得到HTML数据
    res.on('data',function (str) {
        content+=str
    })

    res.on('end',function () {
        // console.log(content)
        var reg=/src="(.*?\.jpg)"/img;
            // .*?   匹配所有
        var filename;
        while( filename=reg.exec(content)){
            getImage(filename[1])
            //下载图片的方法
        }
        
        // fs.writeFile('./test.txt',data,function () {
        //     console.log('写入成功')
        // })
        // //console.log(content.match(reg))

    })
})
//编写函数实现获取图片，并将图片保存到硬盘上
function getImage(url) {
     var obj=path.parse(url);
     var fn=obj.base;//获取到文件名
     var stream1=fs.createWriteStream('./files/'+fn)

    //兼容网址里面没有根目录的情况
     if(obj.root.length===0){
         url='/'+url
     }
     //拼接成一个完整的图片url，才能发起请求
    url='https://www.meitulu.com/'+url


    //向服务器发起请求 ，获取图片
    https.get(url,function (res) {
        res.pipe(stream1);
        console.log(fn+"读取完毕！")
    })

}

//https://ke.qq.com/webcourse/index.html#course_id=233099&term_id=100274928&taid=1447288014868107&vid=r1421lvv8i1

