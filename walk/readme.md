读取src目录下的所有的文件

- readdir
    读目录里的内容  IO操作异步
- readdirSync  Sync同步  Async异步

- js是单线程的,用回调或promise,释放线程的控制权,主要因为js是前端DOM的编程，用户交互比较多，等到执行完后再通过event-loop机制，
    拿回控制权(callback / resolve)

- 来到node,js获取了服务器端的能力，readdirSync(),