// 导入要用的 React 包
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 导入样式文件
import './Jishu.css'
// 书写子组件类
class Jishuitem extends Component {
    // 渲染函数，内部 JSX
    render() {
        return (
             <li 
                onClick={this.handle.bind(this)}
        >{this.props.content}---{this.props.avname}</li>
        )
    }
    // 点击删除事件
    handle(){
        // 调用父组件传过来的操作函数和操作数据，来修改父组件中的数据（在子组件中父组件的数据只能被使用，不能被修改，单向数据流。）
        this.props.callback(this.props.index)
    }
}
// 传递的数据进行类型校验
Jishuitem.propTypes = {
    content: PropTypes.string, // 字符串类型
    index: PropTypes.number.isRequired, // 必须传递，并且时数字类型
    callback: PropTypes.func //函数类型
}
// 默认值
Jishuitem.defaultProps = {
    avname: '编程相关'
}

// 导出子组件模块
export default Jishuitem