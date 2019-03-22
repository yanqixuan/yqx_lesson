# BFC 是一个什么概念
Block Formatting Context (块级格式化上下文)

# BFC 的原理(渲染规则)
1.正常的文档流会存在边距折叠的问题(父容器与子容器,兄弟容器),水平方向的外边距不存在折叠情况(因为水平方向不存在块级元素)
2.BFC容器不会与浮动元素的box重叠
3.BFC在页面上是一个独立的容器,最显著的效果是建立一个隔离的空间,外面的元素不会影响里面的元素,反之,里面的元素也不会影响外面的元素
4.计算BFC容器高度时,浮动元素也会参与高度的计算(也是通常清除浮动的原理)

# 创建BFC的条件
1. body 根元素
2. 浮动元素：float 除 none 以外的值
3. 绝对定位元素：position (absolute、fixed)
4. display 为 inline-block、table-cells、flex
5. overflow 除了 visible 以外的值 (hidden、auto、scroll)
