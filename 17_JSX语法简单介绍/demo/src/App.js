import React, { Component } from 'react'
import './App.css'

class App extends Component {
    render (){
        return (
            // <div id="container">
            //     <div id="main">
            //         <span>Hello World !</span>
            //     </div>
            //     <label>输入替换文本: <input type='text' /></label>
            //     <button>替换文本</button>
            // </div>
            <ul className='ul'>
                <li>{ false ? 'WuHao.com' : '吴浩.com'}</li>
                <li>This is React</li>
            </ul>
        )
    }
}

export default App