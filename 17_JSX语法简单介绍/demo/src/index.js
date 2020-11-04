import React from 'react'
import ReactDOM from 'react-dom'
// 自定义组件要大写字母开头
import App from './App'

// JSX : javascript and xml
// 遇到 < ,解析为html ;  遇到 { ,解析为javascript ;
ReactDOM.render(<App />, document.querySelector('#root'))