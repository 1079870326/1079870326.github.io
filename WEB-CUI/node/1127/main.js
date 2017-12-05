//一个文件就是一个模块,main.js 就是主模块
//require('./hello');//引入模块

var fs=require('fs');//引入文件系统模块
var http=require('http');//引入文件系统模块

var a=require('./hello');
console.log(a.username);



