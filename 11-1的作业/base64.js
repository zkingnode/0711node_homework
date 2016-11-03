/**
 * Created by Administrator on 2016/11/2.
 */
var b64=base64Code('卓京');
function base64Code(context) {
    var str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str+=str.toLowerCase();
    str+="0123456789";
    str+='+/';
    var path1=[];
    var path2=[];
    var b=new Buffer(context);
    console.log(path1);
    console.log(b);
//遍历Buffer并转换成2进制数
    b.forEach(function (item,index) {
        console.log(item.toString(2)+":"+index);
        //把转换成二进制数的拼接起来
        path1+=item.toString(2);
    });
    console.log(path1);
    console.log(path2+"a");
    console.log(path1.length);
    for (var i=0,j=0;i<=path1.length-1;i+=6)
    {
        //利用循环切割6位数字每段并转换成十进制数，并匹配str数组里的对应字符
        path2+=str[parseInt(path1.slice(i,j+=6),2)];
    }
    return path2;
}
console.log(b64);