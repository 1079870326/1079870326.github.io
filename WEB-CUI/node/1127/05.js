/*
*以流的方式读取文件
*   fs.createReadStream()
*
 */

var fs=require('fs')
//创建可以读取的流
var stream=fs.createReadStream('./package.json')


//监听data事件，有数据读取出来时就会触发，可以收到数据
stream.on('data',function (txt) {
    console.log(txt.toString())
})


//监听end事件，当文件读取完毕时，触发该事件
stream.on('end',function (txt) {
    console.log("文件读取完毕")
})


//监听error事件，当文件读取完毕时，触发该事件
stream.on('error',function (txt) {
    console.log("文件读取失败")
})