###前端安全

sql注入
- 表单
    from -> 触发onsubmit -> url POST data:{email:'zm@163.com',password:'123'}

    escape()加密
    unescape()

- 后端
    登录过程有一个sql查找的过程  sql语言报错,服务器出错

    后端用编码解码

- 问题
    用户的输入不可信任
    password'   导致了sql的提前结束或多了一个'  导致500语法错误

- 转码后    select * from users = where email = 'zm@163.com' and password = 'password%27'