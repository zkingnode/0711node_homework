/**
 * Created by 20150129 on 2016/11/1.
 */
var path = require("path");
var fs = require("fs");
function readFile(p){
    fs.readdir(p, function (err,files) {
        if(err)
        {
            console.log(err);
            console.log("读取错误");
        }
        else{
            console.log(path.resolve(p));
            console.log(path.basename(p));
            console.log(files);
            files.forEach(function(file,index) {
                if(fs.lstatSync(path.join(p, file)).isDirectory())//判断是否为文件夹
                {
                    readFile(path.join(p, file));
                }
            });
        }
    });
}
readFile("F:/2-web/web/nodetext");