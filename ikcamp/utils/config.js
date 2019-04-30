'use strict'
const env='dev'

// 页面没有加载成功 m默认
const defaultAlertMessage='服务器开小差了 请再试一次'

const defaultShareText={
    en:'默认的分享文案'
}

const defaultBarTitle={
    en:'ikcamp英语学习'
}

const defaultImg={
    // 当页面崩溃时，图片加载默认图片
    articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
    coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
}

let core={
    env:env,
    defaultAlertMessage:defaultAlertMessage,
    defaultShareText:defaultShareText['en'],
    defaultBarTitle:defaultBarTitle['en'],
    defaultImg:defaultImg,
    // 定义生产坏境和开发环境
    isDev:env==='dev',
    isProduction:env==='production'
}

// 抛出对象 通过import引入
export default core