// 年终奖
// 绩效 s   5个月
// A    3
// B    2
// C    1
// D
var perfomanceX = function(salary){
    return salary * 60;
}
var perfomanceS = function(salary){
    return salary * 5;
}
var perfomanceA = function(salary){
    return salary * 3;
}
var perfomanceB = function(salary){
    return salary * 2;
}
var perfomanceC = function(salary){
    return salary * 1;
}
var perfomanceD = function(salary){
    return salary * 0;
}
var calculateBounce = function(perfomanceLevel,salary){
    switch(perfomanceLevel){
        case 'X':return perfomanceX(salary);
        case 'S':return perfomanceS(salary);
        case 'A':return perfomanceA(salary);
        case 'B':return perfomanceB(salary);
        case 'C':return perfomanceC(salary);
        case 'D':return perfomanceD(salary);
    }
    obj:{
        S:perfomanceX(salary);
    }
}
// 如何优化 分支太多  计算简陋

console.log(calculateBounce('A',20000))