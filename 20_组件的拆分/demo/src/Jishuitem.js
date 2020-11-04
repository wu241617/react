// 快捷键：imrc + Enter
import React, { Component } from 'react'; 
// 快捷键：cc + Enter
class Xiaojiejieitem extends Component { 
    // constructor(props){
    //     super(props)
    //     this.deleteItem=this.deleteItem(this)
    // }
    render() { 
        return (
            <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>
        )
    }
    handleClick(index){
        // 接收父组件传来的函数和参数
        this.props.deleteItem(this.props.index)
    }
}
// 导出模块组件 
export default Xiaojiejieitem;