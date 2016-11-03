/**
 * Created by 20150129 on 2016/11/3.
 */
var http = require('http');
var util=require("util");
var fs = require("fs");
var mime =require("mime");

http.createServer(
    function (request,response) {
        //  解析客户端的请求地址
        var url=request.url;
        response.setHeader("Connected-Type",""+mime.lookup(url)+";charset=utf-8");
        console.log(url);
        //  网站的路由导航
        if(url=="/index.html") {

            //   响应头中的Connected-Type一定要按照资源设置类型
            console.log(mime.lookup(url));
            fs.readFile("./index.html", "utf-8", function (err, data) {
                if (!err) {
                    response.write(data);
                    response.end();
                }
            });
        }
        else if(url=="/newList.html"){
            fs.readFile("./newList.html", "utf-8", function (err, data) {
                if (!err) {
                    response.write(data);
                    response.end();
                }
            });
        }
        else if(url=="/index.css") {
            fs.readFile("./index.css", "utf-8", function (err, data) {
                if (!err) {
                    response.write(data);
                    response.end();
                }
            });
        }
        else if(url=="/imgs/1.jpg") {
            fs.readFile("../imgs/1.jpg", function (err, data) {
                if (!err) {
                    response.write(data);
                    response.end();
                }
            });
        }
        else{
            response.statusCode=404;
            response.write("你所找的页面不存在");
            response.end();
        }
    }).listen(8080);