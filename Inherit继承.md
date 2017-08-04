### 一、原型链
基本思想:利用原型让一个引用类型继承另一个引用类型的属性和方法。  
不能用对象字面量重写原型方法。  

#### 问题:
1. 包含引用类型的的原型，因此要在构造函数中定义属性，而不是原型对象中。  
以被继承者原本的实例属性就变成了原型属性，继承者们都会共享此引用类型的属性。  
2. 在创建子类型的实例时，不能向超类型的构造函数中传参。没有办法在不影响所有对象实例的情况下，给超类型的构造函数传参。

### 二、借用构造函数
(伪造对象 || 经典继承)  
在子类型构造函数内部调用超类型构造函数，通过使用apply()和call()在新创建的对象上执行构造函数
```
function SuperType(){
	this.colors=['a','b','c'];
}
function SubType(){
	SuperType.call(this);
}

var instance1=new SubType();
instance1.colors.push('d');
console.log(instance1.colors);//[ 'a', 'b', 'c', 'd' ]
var instance2=new SubType();
console.log(instance2.colors);//[ 'a', 'b', 'c' ]
```
优势: 传递参数  
问题: 
1. 方法都是定义在超类型中，无法函数复用
2. 在超类型的原型中定义的方法，子类型不可见，所有类型都只能使用构造函数模式。

### 三、组合继承 （原型链+借用构造函数）
使用原型链实现对原型属性和方法的继承，再通过借用构造函数来实现对实例属性的继承。
```
function SuperType(name){
	this.name=name;
	this.colors=['a','b','c'];
}
SuperType.prototype.sayName=function(){
	console.log(this.name);
}
function SubType(name,age){
	//继承属性
	SuperType.call(this,name);
	this.age=age;
}

//继承方法
SubType.prototype=new SuperType();
SubType.prototype.constructor=SubType;
SubType.prototype.sayAge=function(){
	console.log(this.age);
}

var instance1=new SubType('NN',29);
instance1.colors.push('d');
console.log(instance1.colors);//[ 'a', 'b', 'c', 'd' ]
instance1.sayName();//NN
instance1.sayAge();//29

var instance2=new SubType('TT',21);
console.log(instance2.colors);//[ 'a', 'b', 'c' ]
instance2.sayName();//TT
instance2.sayAge();//21
```
js中最常用的继承模式  
#### 不足:
无论什么情况下，都会调用两次超类型构造函数:一次是在创建子类型原型的时候，一次是子类型构造函数内部。子类型最终会包含超类型对象的全部实例属性。子类型需重写这些属性。

### 四、原型式继承
```
function object(o){
	function F(){}//临时构造函数
	F.prototype=0;//将传入的对象作为这个构造函数的原型
	return new F();//返回这个临时类型的一个新实例
}
本质上讲，object()对传入其中的对象进行了一次浅复制
```
Object.creat()  
两个参数：第一个参数用作新对象原型的对象、第二个参数为新对象额外定义的属性的对象。 
问题: 包含引用类型值的属性始终会共享(就像使用原型模式构建对象)。
### 五、寄生式继承
不能做到函数复用
### 六、寄生组合式继承
借用构造函数来继承属性，通过原型链的混成形式来继承方法。