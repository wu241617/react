// 1，导入包：注意：这两个导入的时候，接收的成员名称，必须这么写
import React from 'react'; // 创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的组件和虚拟DOM 放到页面上展示

// 2，创建虚拟DOM元素
// 参数1：创建的元素的类型，字符串，表示元素的名称
// 参数2：是一个对象或null，表示当前这个DOM的属性
// 参数3：子节点（包括其他虚拟DOM，或文本子节点）
// 参数n:其他子节点
// <h1 id="myh1" title="this is a h1">这是一个大大的H1</h1>
const myh1 = React.createElement('h1',{id:'myh1',title:'this is a h1'},'这是一个大大的H1');
const mydiv = React.createElement('div',null,'这是一个div元素',myh1);

// ====渲染页面上的DOM结构，最好的方式，就是写HTML代码 ,在JS文件中，默认不能写类似HTML标记，为了解决这个问题，可以使用babel，来转换这些JS中的标签。这种在JS中，混合写入类似于HTML的语法，叫做JSX语法；符合XML规范的JS；JSX语法本质，还是在运行的时候被转换成了React.createElement()形式来执行。=====
let num = 10;
let str = 'hello world';
let flag = false;
let title = '显示 P 标签'
const h1 = <h3>这是一个奇迹</h3>
const arr = [<h3>这是第一个H3</h3>,<h3>这是第二个H3</h3>]
const arr1 = ['xiner','wuhao','fangyuan','zhangsan']
// 定义一个空数组，将来用来存放名称标签
const nameArr = [];
//react中需要把key添加给，被forEach或map或for循环绑定的元素
arr1.forEach(item => {
	const temp = <h5 key={item}>{item}</h5>;
	nameArr.push(temp);
})

// 调用render函数，JSX XML比 HTML 严格，要求标签都自闭合。
/*
const mytest = <div id="name" title="this is my name"><h1>这是一个H1标签区域</h1>wuhao<hr/><span>number:{num + 13}</span><hr/><span>string:{str}</span><hr/><span>bool:{flag.toString()}</span><hr/><p title={title}>这是P标签</p><hr/>{h1}<hr/>{arr}<hr/>{nameArr}<hr/></div>
*/
// 什么情况下需要使用{},总结当我们需要在JSX控制的区域内，写JS表达式，则需要把JS代码写入到{}内。


// 3，使用ReactDOM把虚拟DOM，渲染到页面上
// 参数1：要渲染的那个虚拟DOM元素
// 参数2：指定页面上一个容器(DOM元素对象)
ReactDOM.render(<div id="name" title="this is my name">
<h1>这是一个H1标签区域</h1>
	wuhao
<hr/>
	<span>number:{num + 13}</span>
<hr/>
	<span>string:{str}</span>
<hr/>
	<span>bool:{flag.toString()}</span>
<hr/>
	<p title={title}>这是P标签</p>
<hr/>
	{h1}
<hr/>
	{/*arr*/}
	{nameArr}
<hr/>
	{arr1.map(item => <h4 key={item}>{item}</h4>)}
<hr/>
	<p className="my">QWERTY</p>
	<label htmlFor="error">2222</label>
<hr/>	
</div>, document.querySelector('#app'));