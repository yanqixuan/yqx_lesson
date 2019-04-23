var strategies = {
    's':function(salary){
        return salary*5;
    },
    'a':function(salary){
        return salary*3;
    },
    'b':function(salary){
        return salary*2;
    },
    'c':function(salary){
        return salary*1;
    },
    'd':function(salary){
        return salary*0;
    }
}
var calculateBounce = function(level,salary){
    return strategies[level](salary);
}
console.log(calculateBounce('s',10000));