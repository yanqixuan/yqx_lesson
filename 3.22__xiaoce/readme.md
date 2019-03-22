## 界面大框架及经验
水平方向禁止滚动条，垂直方向出现滚动条
overflow-x:hidden;overflow-y:scoll
- 水平垂直两个方向都滚动,页面会摇晃,容易产生误操作。
- 垂直方向一直滚动是开发的主要方式
    垂直方向加上-webkit-overflow-scrolling: touch;

- margin: 0 auto;   max-width: 960px 美元
- flex 布局
    flex-grow比例放大    flex-basis     flex-shrink比例缩小     flex-wrap
    当网页由PC到mobile时,缩小阵仗

经验  简单适配PC->mobile  因为要照顾所有的用户
      PC端使用max-width margin:auto  padding  margin  
      mobile  flex-shrink  让关键部分坚挺一点