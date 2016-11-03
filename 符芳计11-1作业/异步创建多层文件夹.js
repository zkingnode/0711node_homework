/**
 * Created by Administrator on 2016/11/3.
 */
//异步
var fs=require('fs');
machdir("./a/b/c");
function  machdir(path){
    fs.mkdir(path,function(err){
        if (err){
            var dirs=path.split("/");
            console.log(dirs);
            dirs.forEach(function(item,index){
                var p=dirs.slice(0,index+1).join("/");
                var exits=fs.existsSync(p);
                if(!exits){
                    machdir(p);
                    return ;
                }
                return;
            });
            return;
        }
    });
}
