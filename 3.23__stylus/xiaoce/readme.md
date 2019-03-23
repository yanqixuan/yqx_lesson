不再写css，写的是css的预编译语言stylus
优点:快,一套语法支持现代css开发,有一个compile过程

1. 跟css的规则say goodbye   不用{} : ;  用tab 
2. stylus 提供嵌套  可以帮我们补上前面的选择器  现在我们的css就模块化了,从此css就有编程的感觉了
3. &运算符
    依然使用table缩进,但是它与上一级同级,适合于同一个元素多个类名,(.active)或者伪类,伪状态
4. 变量定义
    将常用的，重复使用的    在最上面统一定义后,可以修改一处,所有使用了此变量的地方都会跟着修改
    成为网站的风格


css 语法
1. overflow:hidden
2. flex align-items 搞定vertical-align有时搞不好的情况
                        vertical-align 兄弟之间 img+兄弟
3. text-rendering: optimizeLegibility;抗锯齿 高清手机上文字的边缘不出现锯齿
4. flex-shrink:0
5. flex-grow
6. 第几个元素的选择 伪类选择器  :first-child    奇数偶数:nth-child(2n) :nth-child(2n+1)
7. 苹果字体 -apple-system


运行:stylus style.styl -o style.css     把style.styl文件输出到style.css     -o(output)
    stylus -w style.styl -o style.css   一直监听style.styl文件的修改，实时的去生成style.css     -w(watch)