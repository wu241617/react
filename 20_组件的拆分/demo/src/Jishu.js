// 导入使用的 react 相关文件，并解构赋值其内部组件
import React, { Component, Fragment } from 'react'
// 导入子组件
import JishuItem from './Jishuitem'
// 书写父组件类
class Jishu extends Component {
    // 构造函数
    constructor(props){
        // 继承父组件 Component
        super(props)
        // 数据项
        this.state = {
            inputValue: '',
            list: ['HTML', 'CSS', 'Javascript']
        }
    }
    // 渲染函数
    render(){
        return (
            <Fragment>
                 <div>
                     {/* 属性值和操作函数绑定 */}
                    <input type='text' 
                    value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}
                    />
                    {/* 操作函数的绑定要注意，改变 this 指向为当前的组件类 */}
                    <button onClick={this.addItem.bind(this)}>增加技术</button>
                 </div>
                 <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <JishuItem 
                                key={item+index} 
                                content={item} 
                                index={index}
                                deleteItem={this.deleteItem.bind(this)}
                                />
                            )
                        })
                    }
                 </ul>
            </Fragment>
        )
    }
    // 改变输入值的函数
    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    // 新增技术项函数
    addItem(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    // 删除对应技术项函数，根据传过来的 index 值
    deleteItem(index){
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
// 导出模块组件,供外部使用
export default Jishu