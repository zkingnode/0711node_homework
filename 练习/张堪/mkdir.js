/**
 * Created by 20150129 on 2016/11/1.
 */
var fs = require("fs");
//创建文件夹时，要求父文件夹一定要存在
//fs.mkdirSync("./123");


//fs.mkdir("./3/a", function (err) {
//    if(err)
//    {
//        console.log("文件夹创建不成功");
//    }
//    else{
//        console.log("文件夹创建成功");
//    }
//});

//  创建任意目录的文件夹
// 同步创建
//function makeDirSync(path){
//    var dirs = path.split("/");
//    dirs.forEach(function (item,index) {
//       var pathL=dirs.slice(0,(index+1)).join("/");
//        console.log(pathL);
//        var exits=fs.existsSync(pathL);
//        if(!exits){
//            fs.mkdirSync(pathL);
//        }
//    });
//}makeDirSync("./21/12/1");

// 异步创建
//function makeDir(path) {
//    var dirs = path.split("/");
//    for (var i = 0; i < dirs.length; i++) {
//        maker(i);
//    }
//
//    function maker(i) {
//        var pathL = dirs.slice(0, i + 1).join("/");
//        fs.exists(pathL, function (exits) {
//            console.log(exits);
//            if (!exits) {
//                fs.mkdir(pathL, function (err) {
//                    //console.log(err);
//                    console.log("文件夹创建成功");
//                });
//            }
//        });
//    }
//}
function makeDir(path) {
    var dirs = path.split("/");
    dirs.forEach(function (item, index) {
        var pathL = dirs.slice(0, (index + 1)).join("/");
        fs.exists(pathL, function (exits) {
            if (!exits) {
                fs.mkdir(pathL, function (err) {
                    if(err){
                        makeDir(pathL);
                    }
                });
            }
        });
    });
}
makeDir("./21/12/1");