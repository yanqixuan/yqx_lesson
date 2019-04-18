/**
 * @author 雷舒静
 * @desc 画星
 * 一个功能一个类  实现封装  一个类一个js文件
 * 实现多人协作  模块化
 * 业务代码  要抽离，封装
 */
function RoundItem(index,x,y,ctx){
    this.index = index;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.r = Math.random() * 2 + 1;
    let alpha = Math.floor(( Math.random() * 10)+1)/10/2;//透明度
    this.color = `rgba(255,255,255,${alpha})`;
}
RoundItem.prototype.draw = function(){
    this.ctx.fillStyle = this.color;
    this.ctx.shadowblur = this.r * 2;   //模糊度
    // 绘制的开始和结束
    this.ctx.beginPath();   
    this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
    this.ctx.closePath();
    this.ctx.fill();
}
RoundItem.prototype.move = function(){
    this.y -= 0.15;
    this.draw();
}