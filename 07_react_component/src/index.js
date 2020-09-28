// 导入包
import React from 'react';
import ReactDOM from 'react-dom';

// 导入Hello组件
// 默认，如果不做单独配置，不能省略.jsx后缀名
// 在webpack中配置，让可以省略后缀名.jsx
import Hello from './components/Hello';
// @ 符号，表示项目根目录下，src目录
import Footer from '@/components/Footer.jsx'
import '@/components/code'
import '@/components/code_1'

const user = {
	name: 'wuhao',
	age: 23,
	gender: '男'
}
const obj = {
	name: 'xiner',
	age: 19,
	gender: '女'
}
const obj1 = {
	name: 'Link',
	age: 23,
	gender: '女'
}

// 第二种创建组件的方法，如果通过class 创建组件，必须要让自己的组件继承React.Component
class Main extends React.Component {
	// 在组件内部必须有render函数,作用是渲染当前组件所对应的虚拟DOM元素
	// 构造器
	constructor(){
		super();
		this.state = {
			msg: '大家好，我是 Class 创建的组件'
		}; // 这个，就相当于Vue中的data(){return {}}
	}
	render(){
		// render函数中必须返回合法的JSX虚拟DOM结构
		// 在class关键字创建的组件中，如果想使用外界传过来的propsc参数，直接通过this.props.xxx来访问
		// 在class组件内部，this表示当前组件的实例对象
		// 在class创建的组件中，props只读；state可读可写
		this.state.msg = '信息已被修改！！！';
		return <div>这是Main组件 --- {this.props.name} --- {this.props.age} --- {this.props.gender}<h3>{this.state.msg}</h3></div>;
	}
}

ReactDOM.render(<div>
{/* 直接把组件名称，以标签形式，丢到页面上即可*/}
<Hello name={user.name} age={user.age} gender={user.gender}></Hello>
<hr/>
<Main {...obj1}></Main>
<hr/>
<Footer {...obj}></Footer>
</div>,document.querySelector('#app'));