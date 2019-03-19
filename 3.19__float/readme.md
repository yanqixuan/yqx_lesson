# 清楚浮动的几种方法
1. 在父元素底部加一行代码<div style="clear:both;"></div>
2. 利用BFC简称“块级格式化上下文”，在父元素属性加css属性   overflow:auto/hidden/scroll;  让父元素触发bfc块级格式化上下文
3. 给父元素添加clearfix类名伪元素   
                .clearfix::after{
                    content: '';
                    display: block;
                    clear: both;}
4. 给父元素增加一行css  .content{float:left;}   不用
5. 一个更优雅的改进     --尼古拉斯大师方法      display:table，可以创建一个表格单元，会默认触发BFC方法
    .clearfix:after{content:'';  display:table; clear:both;}