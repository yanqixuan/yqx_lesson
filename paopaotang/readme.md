class 类 js 现在也有
es5 没有class关键字  怎么做面向对象
js 是面向对象的,Function 是一等对象
普通函数 Player() 
new Player(); 作为类的构造函数被运行,function Player(){ this }, this一直都在,是函数里的一个常在(指针),指向一个Obejct,{}
               this.name=name;
函数运行方式的不同,里面this指向不同.
    作为一个普通函数运行时,this指针没有使命,为undefined,指向全局。在前端指向window,后端node指向global。
    作为构造函数被运行时(new Player())。this会指向实例化的对象,构造函数需要的过程。

- 函数可以用来构造类        js借,通过this   this是一直存在的,是一个指针。函数的运行方式会导致this指向不一样。
                           普通函数 this=>全局window|global
                           如果代码启动严格模式("use strict"),this则undefined
- new 过程中发生了什么      this =>{} constructor   this.name = name    初始化过程(构造过程)
                           this指向Player{}
- 构造函数