/**
 * Created by 20150129 on 2016/11/1.
 */
var strs ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
strs+=strs.toLowerCase();
strs+="0123456789";
strs +="+/";

function change64(str){
    var arr=str.split("");
    for(var i=0 ; i<arr.length ; i++)
    {
        var a=new Buffer(arr[i]);
        var str1="";
        var arrs=[];
        for(var j=0 ; j< a.length ; j++)
        {
            var str2=a[j].toString(2);
            str1+=str2;
        }
        //console.log(str1);
        for(var x=0 ; x<str1.length ;)
        {
            arrs.push(strs[parseInt(str1.slice(x,x+6),2)]);
            x=x+6;
        }
        var result=arrs.join("");
        console.log(result);
        arrs=[];
    }
}
change64("djk炸啥の的a");