//管道：从一个流将数据流入另外一个流
//复制效果
var fs=require('fs');


var s1=fs.createReadStream('./package.json')
var s2=fs.createWriteStream('./package1.json')

s1.pipe(s2);