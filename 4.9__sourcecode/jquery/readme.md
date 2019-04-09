DOM 树 有html结构，再加上css，dom树将被生成，静态页面就有了。
触发 document DOMContentLoaded  有了元素节点,就可以做js交互了
页面上还依赖于其它的一些资源,js是阻碍下载。
img 是网页性能的杀手
window.onload 此时写js 就晚了。
如果不等事件的发生,js 操作有可能无效

把所有的JS代码写在DOM Ready之后是最佳时机.