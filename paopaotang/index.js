//Player类,构造函数
"use strict"//使用严格模式
function Player(name){
    //constructor  
    //console.log(this);  //全局||指向的对象
    //Player{}  this代表{},对象
     this.name= name;
     this.enemy= null;
    
}
//原型链添加方法,方法要定义在prototype上
Player.prototype.win = function(){
    console.log(this.name + "win"); 
    console.log(this.name+"的敌人是"+this.enemy);
}
Player.prototype.lose = function(){
    console.log(this.name + "lose");
    console.log(this.name+"的敌人是"+ this.enemy);
}

//Player("皮蛋");  //普通函数调用
var player1=new Player("皮蛋");
var player2=new Player("小怪");
player1.enemy=player2.name;
player2.enemy=player1.name;
// console.log(player1.name);
//win函数作为对象的方法被调用,this会指向对象本身
player1.win();
player2.lose();