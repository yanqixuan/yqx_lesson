new的时候发生了什么
构造函数的运行方式 是以new的方式被运行,所以函数内部的this是动态的    指向实例化后的this
    开始时为空对象,之后拿到了构造函数里定义的属性,最后又拿到了prototype上定义的属性和方法

对象    由属性和方法构成

1. 实例化一个新的对象,并且是这外类的实例
2. 构造函数被执行,this指向实例,constructor运行慢半拍    在面向对象里(构造函数)是为他人服务的,为this服务
    this由函数的运行方式决定    this->实例  new的方式   this->任何对象  call的方式

3. Otaku.prototype  是对象  原型对象  任何函数都有一个prototype属性,才能构造类
    火车    constructor 车头,