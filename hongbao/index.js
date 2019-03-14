function hongbao(total,num){
    let restAmount = total;
    let restNum = num;
    const arr =[];
    for(let i=0;i<num-1;i++){
        //在平均值的两倍随机
        let money=parseFloat((Math.random()*(restAmount/restNum)*2)).toFixed(2);
        arr.push(money);
        restNum--;
        restAmount=restAmount-money;
    }
    arr.push(parseFloat(restAmount).toFixed(2) );
    return arr;
}
console.log(hongbao(20,10));