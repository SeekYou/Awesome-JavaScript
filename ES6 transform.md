const foo = ({hello: {world: bar}}) => ({bar})

const foo = function(_ref) {
	var bar = _ref.hello.world;
	return {bar: bar};
}

{bar}  属性的简洁表示法  {bar: bar}

({hello: {world: bar}})  解构赋值
arguments: {
	hello: {
		world: bar
	}
}
箭头函数不存在arguments对象！！！



`const {counterCaption} = action;`
```
var _action = action;
var counterCaption = _action.counterCaption;
```

`const {caption} = this.props;`
`var caption = undefined.props.caption;`

`const {caption, onIncrement, onDecrement, value} = this.props;`
```
"use strict";

var _undefined$props = undefined.props;
var caption = _undefined$props.caption;
var onIncrement = _undefined$props.onIncrement;
var onDecrement = _undefined$props.onDecrement;
var value = _undefined$props.value;
```