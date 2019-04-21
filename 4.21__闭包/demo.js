// 全局变量污染

const mult =(function(){
    const cache = {};
    return function(...args){
        let key = Array.prototype.join.call(args,',');
        if(key in cache){
            return cache[key];
        }
        let a =1;
        for (let i =0,l=args.length;i<l;i++){
            a = a * args[i];
        }
        cache[key] = a;
        return a ;
    }
})()
console.log(mult(1,2,3))