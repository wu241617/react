// 导入用到的 React 包
import React, { Component, Fragment } from 'react'
// 导入子组件
import Jishuitem from './Jishuitem'
// 导入外部样式文件
import './Jishu.css'
// 父组件类
class Jishu extends Component {
    // 构造函数
    constructor(props){
        // 继承父类（Component）的 props
        super(props)
        // 数据项
        this.state = {
            inputValue: '',
            list: ['HTML', 'CSS', 'GIT']
        }
    }
    // 渲染函数
    render(){
        return (
            <Fragment>
                {/* 添加类，行内样式书写 */}
                <div className="search" style={{background: '#999'}}>
                    {/* 属性绑定，onChange 事件 */}
                    <input 
                    ref={(input) => {this.input = input}}
                    type='text' 
                    value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}
                    />
                    {/* 增加按钮点击事件 */}
                    <button onClick={this.addListItem.bind(this)}>增加技术</button>
                </div>
                <ul 
                ref={(ul) => {this.ul = ul}}
                className="search" 
                style={{background: '#666', color: 'white'}}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                //  调用子组件，父组件向子组件传数据和操作函数
                                <Jishuitem 
                                content={item}
                                index={index}
                                callback={this.deleteListItem.bind(this)}
                                key={item+index}
                                ></Jishuitem>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    // 输入框显示函数
    inputChange(e) {
        this.setState({
            inputValue: e.target.value // this.input.value 
        })
    }
    // 添加技术选项函数
    addListItem(){
        // setState为异步操作，需要消耗一定时间
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log('共有 ' + this.ul.querySelectorAll('li').length + ' 项。')
        })
    }
    // 删除技术选项函数（根据对应的 index）
    deleteListItem(index){
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
// 导出组件模块
export default Jishu