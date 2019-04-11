// fs模块  是node后端开发的一部分  专门用来读取文件
const fs = require('fs');
// 读取文件内容是异步的(需要花时间)  使用回调函数，读取完文件后才能执行   第一个参数为err

// fs.readFile('./a.txt', 'utf8', function (err, data) {    //路径 格式
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
//     fs.readFile('./b.txt', 'utf8', function (err, data) {
//         console.log('---------------', data);
//     })
// })

// 将callback处理异步的方案抛弃
// promise 封装一个异步任务
const fileAPromise = new Promise((resolve, reject) => {
    // 花时间的诺言  耗时任务
    fs.readFile('./a.txt', 'utf8', (err, data) => {
        // 代码流程的控制权交接
        resolve(data);
    })
})

const fileBPromise = new Promise((resolve,reject)=>{
    fs.readFile('./b.txt','utf8',(err,data)=>{
        if(err){    //如果出错
            reject(err);
        }else{
            resolve(data);
        }
    })
})

// .then  将内部的耗时任务运行
fileAPromise
    .then(data =>{
    console.log(data);
    return fileBPromise;
    })
    .then(data =>{
        console.log(data);
    })
