ECMAScript中有两种属性：
1. 数据属性
2. 访问器属性

#### 数据属性：
1. [[Configurable]]  默认为true
2. [[Enumerable]]  默认为true  能否通过for-in循环返回属性
3. [[Writable]]  默认为true
4. [[Value]]  默认为undefined

修改属性的默认特性--`Object.defineProperty()`
```
Object.defineProperty(person, 'name', {
	writable: false,
	value: 'gaga'
})
```
三个参数为：属性所在的对象、属性的名字、描述符对象(必须是这四个中的一个或多个)
调用`Object.defineProperty()`
时，如果不指定，这三种特性默认为false

#### 访问器属性
1. [[Configurable]]
2. [[Enumerable]]
3. [[Get]]  默认为undefined
4. [[Set]]  默认为undefined

*访问器属性只能使用`Object.defineProperty()`来定义*

定义多个属性`Object.defineProperties()`
两个对象参数：要添加或修改的对象、属性与第一个参数对象中要添加或修改的属性一一对应的对象。


读取属性的特性：`Object.getOwnPropertyDescriptor()`
两个参数：属性所在的对象、读取其描述符的属性。  
返回一个对象：如果是数据属性，返回configurable、enumerable、writable、value;如果是访问器属性，返回configurable、enumerable、get、set。
