import React, { Component } from 'react'

class App extends Component {
    constructor(props){
        console.log('------组件初始化')
        super(props)
        this.state = {
            list: []
        }
    }
    componentWillMount(){
        console.log('componentWillMount------组件将要挂载到页面的时刻')
    }
    render(){
        console.log('render------组件挂载中')
        return <h1> Hello </h1>
    }
    componentDidMount(){
        console.log('componentDidMount------组件挂载完成的时刻')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate------>组件更新之前的时刻')
        // 要求返回一个布尔值，返回false,则不往下执行
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate------>组件将要更新的时刻')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate------>组件更新完成的时刻')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount------>组件将要被删除的时刻')
    }
}

export default App