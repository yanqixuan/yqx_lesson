let arr =[];   //数组:数据集合  在js中，数组是一个object
arr.push("{");
// console.log(arr,arr.length);
// console.log(typeof arr);
arr.push("}");
// console.log(arr);
arr.pop();      //弹出一个队尾数据
// console.log(arr);
arr.unshift("]");   //插入一个元素在最前面
console.log(arr);
arr.shift();
console.log('----',arr);
arr.forEach(item =>{
    console.log(item);
})
//如何来做匹配规则
let obj={};     //对象字面量JSON
obj ["{"] = "}";
obj ["["] = "]";
obj ["("] = ")";
let sta = ["("];
let s =")";
if(obj[sta[sta.length-1]]===s){
    sta.pop();
}
console.log(!sta.length);