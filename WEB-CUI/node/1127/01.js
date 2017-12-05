// 文件系统fs
//     1\引入文件系统模块
//        2\使用fs文件系统模块方法读取文件
//                fs.readFile()  //以异步方式读取文件
//                 fs.readFileSync()  //以同步方式读取文件
//同步和异步
 //    1）同步：程序上从上向下执行，必须上一行执行完成，才会继续执行
//     2）异步：程序上从上向下执行，当遇到异步语句（比较复杂）时异步的任务另外开一个任务线程单独执行
var fs=require('fs');


//异步读取
console.log(11111)
fs.readFile('./package.json',function (err,txt) {
    console.log("这是异步读取的内容："+txt.toString())
})
console.log(11111)


//同步方法读取文件内容
// var data=fs.readFileSync('./package.json')
// console.log(111)
// console.log("这是同步读取的内容："+data.toString())
// console.log(111)
