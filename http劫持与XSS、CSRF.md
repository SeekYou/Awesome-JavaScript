### HTTP 劫持
#### http 劫持
正常的数据流中插入网络数据报文
#### dns 劫持
劫持DNS服务器，获得某域名的解析记录控制权，由原IP地址转到修改后的IP地址


解决办法：  

嵌入了iframe
```
if(window.self != window.top){
  window.top.location = location.href //重定向到我们的页面
}
```
白名单放行  
父级页面url`document.referrer`，可以拿到跨域父页面的url  

url中添加运营商劫持标记，伪装被劫持

----

### XSS 跨站脚本 Cross-site scripting
向web页面中注入恶意代码

建立关键词黑名单，扫描内联脚本，拦截可疑事件，注销代码  

#### 利用高级API，进行节点检测
1. MutationObserve  
将一个时间片段内出现的所有元素，一起传过来，使用白名单放行

2. 拦截动态脚本  
重写`Element.prototype.setAttribute`  
保留原有接口，当有元素调用setAttribute时，白名单检验，对放行的元素执行原生的setAttribute

3. 遇到新建的iframe时，对setAttribute进行保护重写，MutationObserve  
重写传入的window下的setAttribute，安装一个MutationObserve，对未来可能创建的iframe进行监听，

4. 重写document.write

5. 锁死apply和call
```
Object.defineProperty(Function.prototype,'call',{
  value: Function.prototype.call,
  writable: false,
  configurable: false,
  enumerable: true
})
apply同上
```

----

### CSRF 跨站请求伪造 Cross-site request forgery

----

## HTTPS 与 CSP

#### CSP
 content security policy，内容安全策略，定义可以加载的资源

#### HTTPS
http over SSL



[参考](http://www.cnblogs.com/yangxiaolan/p/5784266.html)




