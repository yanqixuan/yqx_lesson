const fs = require('fs');
const files = []; //收集文件的数组
// 一级级  目录走下去
const walk = function(path){
    fs
     .readdirSync(path)
     .forEach(file => {
         const newPath = path + '/' + file; //生成一个新的路径
         const stat = fs.statSync(newPath); //得到它的文件类型
        //  console.log(stat);
        if(stat.isFile()){
            if(/\.js$/.test(file)){ //匹配.js文件
                files.push(file);
            }
            console.log(file);
        } else if (stat.isDirectory()){
            walk(newPath);
        }
        //  if()
        //  文件?
        //     js文件? 正则表达式
        // 目录?
        //     递归
        //  console.log(file);
     })
    
    
    fs.readdir(path,function(err,items){
        // console.log(items);
    })
    console.log('lalala');
}

walk('./src');
console.log(files);