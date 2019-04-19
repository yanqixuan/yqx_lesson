const http = require('http');   //入口
// require 关键字 引入一个模块
// COMMONJS    引入规范,引入模块的机制定义

let i = 0;
http
    .createServer(function(request,response){
        response.end(`Hello World!${++i}`);
    })
    .listen(3000);