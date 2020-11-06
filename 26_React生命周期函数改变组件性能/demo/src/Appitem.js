// 导入 react 包
import React, { Component } from 'react'
// 书写子组件类
class Appitem extends Component {
    // 提高组件性能，优化
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }
    // 渲染函数
    render(){
        return (
            <li onClick={this.handle.bind(this)}>{this.props.content}</li>
        )
    }
    // 点击删除操作函数
    handle(){
        this.props.callback(this.props.index)
    }
}
// 导出组件模块
export default Appitem