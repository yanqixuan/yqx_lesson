- MVVM  前端新贵
    model 数据  Page({data:{
        legends:[]
    }})
    view  视图  Wxml
    VM    编译,占位符  {{}}     wx:for ....

- MVC   经典的Web开发模式
    Model   =>  SQL
    View    =>  静态页面
    Controller  =>  路由


- WebServer   是一个软件，程序
    对应web硬件服务器运行WebServer程序。
    ip  通过ip实现http协议
    http://127.0.0.1:3000    (启动了一个webserver)
    端口 不只一个服务
    3306 MYSQL,数据库
    80   Web 服务

    创建一个http服务
    http
    .createServer(function(request,response){
        response.end('hello world');    返回回复，http本质，不是常连接，完成即断开
    })
    .listen(3000)

    request  用户 N Web一直在 3000 端口号上服务
    request 就能找到此地,每位用户到达,触发事件,调用createServer上的回调函数,request用户身份。
    response   响应请求,http响应后就断开
    