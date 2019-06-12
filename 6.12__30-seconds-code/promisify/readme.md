## promisify 
  node中的promise
  原始回调版本:fs.readFile('',(err,data)=>{});
  使用promisify:readFile('').then()
  让符合(err,data)=>{} 的样式     回调函数是最后一个参数的函数，包裹之后返回promise版本的函数

## 实现这样一个 promisify