# ES6新增的两种数据结构
## Map
    类似于一个js对象  {}    一一对应
    作用:优化逻辑判断 switch/if-else
    被新的api支持   URLSearchParams
    map方法
        set(),get(),delete(),has(),keys(),values(),entries() key和value的集合

区别：
    {}的key是字符串 symbol 其它类型在遍历 key的时候出现toString()的问题 app[object,HTMLelement]
    Map() key 支持所有类型


Object.keys(obj)   获取obj对象中所有的key值