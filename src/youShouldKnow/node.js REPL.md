# REPL(交互式解释器)
类似终端，我们可以在上面输入命令，并接受系统的响应
## node自带了交互式解释器，可以执行以下任务:
1.读取-----读取用户输入并存在内存中

2.执行-----执行输入语句

3.打印-----打印结果

4.循环-----循环上述步骤，直到按两次*Ctrl+C*退出

## 可以用node的交互式解释器很好的调试js代码
### 通俗易懂的理解：在终端输入node进入node环境后，可以在该环境下运行js代码并输出结果
eg:
```angularjs
mqdeiMac:~ mq$ node
> 3+2
5
> x = 10
10
> y = 100
100
> x+y
110
> var g = 33
undefined
> x+g
43
> do{
... y++;
... console.log('y:'+y);
... }while(y<105)
y:101
y:102
y:103
y:104
y:105
undefined
> 
```
>注：...是node自动生成的，点击回车后node会自己判断语句有没有写完
 
### 可以使用下划线（_）来获取运算结果
```angularjs
> x+y
121
> console.log(_)
121
undefined
> 
```
## REPL命令
*ctrl+c*:退出当前终端

*ctrl+c*按两次/*ctrl+d*： 退出Node REPL




