// 缓存计算结果 不要重复计算，
let cache ={};
// json 里key类型为string

function mult(){
    let a=1;
    let key = Array.prototype.join.call(arguments,',');
    // args相关, 数组转成string key
    if(cache[key]){
        console.log('从缓存中取');
        return cache[key];
    }
    for(let i =0,l = arguments.length;i<l;i++){
        a *= arguments[i];
    }
    cache[key] = a;
    return a;
}
console.log( mult(1,2,3));
console.log( mult(1,2,3));