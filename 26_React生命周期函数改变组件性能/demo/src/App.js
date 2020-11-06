// 导入 React 文件
import React, { Component } from 'react';
// 导入子组件
import Appitem from './Appitem'
// 书写父组件类
class App extends Component {
    // 构造函数
   constructor(props){
       // 继承父类 props
       super(props)
       // 数据项
       this.state = {
           inputValue: '',
           list: ['IOS', 'Andrid', 'React-Native']
       }
   }
   // 渲染函数
    render() { 
        return (
           <div>
                <input type='text' value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addListItem.bind(this)}>Add</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <Appitem
                                 key={item+index} 
                                 content={item}
                                 index={index}
                                 callback={this.deleteListItem.bind(this)}
                                ></Appitem>
                            )
                        })
                    }
                </ul>
           </div>
        );
    }
    // 输入框文本改变函数
    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    // 添加子项函数
    addListItem(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    // 删除 index 对应的子项
    deleteListItem(index){
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
 // 导出组件模块
export default App;