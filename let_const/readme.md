#作用域 Scope
document DOM
    getElementsByTagName
    getElementsByClassName
    querySelector
    querySelectorAll
window BOM
    全局定义了 var name="yh";   
    全局变量    前端 js window
    局部变量    function(){}
    window      js是一个脚本语言，内嵌在浏览器中，它与其他语言不一样的地方在于有一个顶级的window
                全局变量挂载在window上      console.log(name);  console.log(window.name);
                window类型  typeof window
                基本类型    数值，字符串，布尔，unll，undefined，symbol     object
const let
    比var 优秀的地方 遵守块级作用域     全局->函数局部->块级作用域
    scope 范围

setTimeout 异步的内置函数
    for 循环 立即同步执行
    1s之后  i var 变成了10
    使用let时，创建了一个块级作用域 for{块级作用域let}
    1s之后  能找到之前的i