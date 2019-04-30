import config from './config'
import * as Mock from './mock'

const DEFAULT_REQUEST_OPTIONS={
    url:'',
    data:{},
    header:{
        "Content-Type":"application/json"
    },
    method:"GET",
    dataType:"json"
}

let util={
    isDev:config.isDev,
    log(){
        this.isDev && console.log(...arguments)
    },
    // 定义弹出框
    alert(title="提示",content=config.defaultAlertMessage){
        if('object'===typeof content){
            content=this.isDev&&JSON.stringify(content)||config.defaultAlertMessage
    }
    wx.showModal({
        title:title,
        content:content
    })
    },
    // 递归  获取本地存储
    getStorageData(key,cb){
        let self=this
        wx.getStorageData({
            key:key,
            success(res){
                cb && cb(res.data)

            },
            // 若果没有获取到本地数据 重新调用本身
            fail(err){
                let msg=err.errMsg||'';
                if(/getStorage:fail/.test(msg)){
                    self.getStorageData(key)
                }
            }

        })
    },
    setStorageData(key, value = ''){
        wx.setStorage({
            key:key,
            data:value,
            success(){
                cb && cb();
            }
        })
    },
    //封装request方法
    request(opt){
        let {url,data,header,method,dataType,mock = false} = opt; //mock=true 为开发环境
        let self = this;
        return new Promise((resolve,reject)=>{
            if(mock){
                let res = {
                    statusCode:200,
                    data:Mock[url]   //取Mock对象中的url属性
                }
                if(res && res.statusCode === 200 && res.data){//接口请求成功
                    resolve(res.data)
                }else{  //接口请求不成功
                    self.alert('提示',res)
                    reject(res)
                }
            } else {
                wx.request({
                    url:url,
                    data:data,
                    header:header,
                    method:method,
                    dataType:dataType,
                    success:function(res){
                        if(res && res.statusCode == 200 && res.data){//接口请求成功
                            resolve(res.data)
                        }else{  //接口请求不成功
                            self.alert('提示',res)
                            reject(res);
                        }
                    },
                    fail:function(err){
                        self.log(err)
                        self.alert('提示',err)
                        reject(arr)
                    }
                })
            }
        })
    }
}
export default util //抛出util对象