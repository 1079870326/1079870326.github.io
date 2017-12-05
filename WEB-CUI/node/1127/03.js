/*    写文件
* 1、引入FS模块
* 2、找到要写入的内容
* 3、开始写入
*    fs.writeFile();//异步写文件
*    fs.writeFileSync();//同步写文件

 */

var fs=require('fs');
var data="今天发生了一件大事！"

fs.writeFile('./0999999999999999999999999999999999.json',data,function (err) {
    if(err){
        throw err;
    }else {
        console.log("文件写入成功")
    }
})
