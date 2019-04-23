var Bounce = function(salary){
    this.salary = salary;
}
Bounce.prototype.setStrategy = function(strategy){
    this.strategy = strategy;
}
Bounce.prototype.getStrategy = function(){
    return this.strategy.calculate(this.salary);
}
var PerfomanceS = function(){
    

    
}
PerfomanceS.prototype.calculate = function(salary){
    return salary*5;
}
var perfomanceA = function(){}
perfomanceA.prototype.calculate = function(salary){
    return salary*3;
}
var perfomanceB = function(){}
perfomanceB.prototype.calculate = function(salary){
    return salary*2;
}
var perfomanceC = function(){}
perfomanceC.prototype.calculate = function(salary){
    return salary*1;
}
var perfomanceD = function(){}
perfomanceD.prototype.calculate = function(salary){
    return salary*0;
}

var bounce = new Bounce(20000);
bounce.setStrategy(new PerfomanceS());
console.log(bounce.getStrategy());