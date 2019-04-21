// 对象
const googleMap = {
    show(){
        console.log('开始渲染');
    }
}
const baiduMap ={
    // 为互换做准备
    show(){
        console.log('渲染百度');
    }
}
/**
 * 
 * @param {object} Map 
 */
const renderMap = (Map)=>{
    // map 检测
    if(Map.show && Map.show instanceof Function){
        Map.show();
    }
    
    // if(str === 'baidu'){
    //     baiduMap.show();
    // }
    // else if (str === 'google'){
    //     googleMap.show();
    // }
    // // (str+'Map').show();
}
renderMap(baiduMap);
renderMap(googleMap);