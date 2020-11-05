// 入口文件
// 导入用到的 React 相关包
import React from 'react'
import ReactDOM from 'react-dom'
// 导入父组件
import Jishu from './Jishu'

// 调用 ReacgDOM.render() 方法，将组件渲染都页面对应根节点上
ReactDOM.render(<Jishu />, document.querySelector('#root'))