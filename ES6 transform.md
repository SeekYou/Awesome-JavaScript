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