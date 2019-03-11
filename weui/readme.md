# WEUI
    来自于微信的前端开发框架,
    - 微信生态 公众号 小程序
    weui.css 在基础上做开发
    - App生态
    内嵌的html
    - PC生态 传统网站 Bootstrap

    - 界面的编写过程
     - html结构，独立于样式 DOM文档流 从左到右，从上到下
      - 取类名很重要    BEM规范
        Block 区块  weui-cell   weui-button //30-50个复用的组件
        Element 元素    weui-cell__hd   weui-cell__bd   weui-cell__ft
        通用的词汇  hd+bd+ft
     - 再写样式

    - 离开文档流
        用伪元素做边框
        里面的元素不再受其影响,before脱离了正常的文档流,
        weui-cells border-top 使用盒子模型,元素在页面上的占位,需要综合考虑    内容w*h padding border margin position的定位
    - 1px 边框
        css 像素 1px 硬件物理像素 retina 2px  3倍retina 3px
        transform scaleY(0.5) 压缩  变细        transform-origin:基点,哪个点不动
        浏览器不会处理小数点像素

    - flex
        不受块级的约束,内部是一个新的世界   弹性布局是父与子们的一起的布局
        好用的对齐方式  align-items 纵轴对齐 居中
                       justify-content 横轴
        在一堆子元素中,只给一个元素设置flex:1  这个元素成为主元素,其他元素占完自己该占的盒子模型的内容后,余下的空间都交给主体元素。