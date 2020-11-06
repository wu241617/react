import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    state = {  }
    componentDidMount(){
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda').then((res) => {
            console.log('axios 获取数据成功: ' + JSON.stringify(res))
        }).catch((error) => {
            console.log('axios 获取数据失败: ' + error)
        })
    }
    render() { 
        return (
            <h1>Hello</h1>
        );
    }
}
 
export default App;

// npm install xxx (下载到 node_modules 中，但是在 package.json 中不会写入依赖项)

// npm install -g xxx  （包安装到全局）

// npm install -save xxx （生产环境需要的包，下载到 node_modules 中，但是在 package.json 中写入依赖项）

// npm install -save-dev xxx （dev,开发环境需要的包）