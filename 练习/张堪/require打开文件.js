/**
 * Created by 20150129 on 2016/10/29.
 */
setInterval(function () {
    console.log(1);
},1000);
var exiting=false;
var timer=null;
process.on('SIGINT', function () {
    if(exiting) {
       clearTimeout(timer);
        timer=null;
       //已经按下2次了，该退出程序
        console.log("退出");
        process.exit();
    }
    else{
        clearTimeout(timer);
        timer=null;
        console.log("第一次按下");
        exiting=true;
        timer=setTimeout(function () {
            exiting= false;
        },1000);
    }
});