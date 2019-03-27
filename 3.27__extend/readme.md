Person  由prototype属性来解决它自身构造之外的 原型上的属性或方法
    原型对象会有它的构造函数  Person.prototype.constructor属性
第三者:实例
实例  跟Person 有什么关系,Person.prototype  有关系
    zl.__proto__ === Person.prototype

Js的实例跟类 不是java等语言的血缘关系
实例是通过new Person()出来的    
1. Person函数运行 以new的方式, this->new Object();
2. zl(实例) 怎么拿到 Person.prototype原型对象上定义的方法    __proto__ 属性
3. 方法有prototype属性,值为对象 对象上可以开支
4. 任何对象都一定有 __proto__ 属性,指向它的原型对象
5. 原型对象上 有 constructor 属性,指向谁是它的构造函数


原型链