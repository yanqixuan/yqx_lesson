如何实现红包算法
固定金额的红包,由若干人抢,规则
1.抢到金额之和等于红包金额,不能超过也不能少于
2.手气王,0.01 至少
3.金额随机,随机数,公平,每个人抢到金额的概率要相同

计算过程,变量计算的本质
总和total,剩下的钱restAmount,剩下的个数restNum-- = num
随机一次,restAmount=restAmout(total)-随机的金额
restNum--;
最后一个人拿最后的钱。 for(i=0;i<num-1;i++)
每次随机钱数是我们需要的,push数组里

Math 是数学对象     Math.random()   parseFloat()解析为浮点数
类型的转换 "23.1"=23.1s
0-9之间的整数
Math.floor(Math.randow()*10);
let max=100;let min=0;
min+Math.floor(Math.random()*(max-min));