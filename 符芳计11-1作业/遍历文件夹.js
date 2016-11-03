/**
 * Created by Administrator on 2016/11/3.
 */
var fs=require('fs');
var path=require('path');
function travel(dir) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDirectory()) {
            console.log(pathname);
            travel(pathname);
        } else {
            console.log(pathname);
        }
    });
}
travel("../.");