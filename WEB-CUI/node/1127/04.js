/*    删除文件
* 1、引入FS模块
* 2、找到要删除的内容
* 3、开始删除
*    fs.writeFile();//异步写文件
*    fs.writeFileSync();//同步写文件

 */

var fs=require('fs');


fs.unlink('./0999999999999999999999999999999999.json',function (err) {
    if(err){
        throw err;
    }else {
        console.log("文件删除成功")
    }
})