import React, { Component,Fragment } from 'react'
import './App.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            canDisplay: true
        }
    }
    render(){
        return (
            <Fragment >
                <div className={this.state.canDisplay ? 'show' : 'hide'} id="container">React中的CSS3动画</div>
                <div><button onClick={this.handle.bind(this)}>隐藏与显示</button></div>
            </Fragment>
        )
    }
    handle(){
        this.setState({
            canDisplay: !this.state.canDisplay
        })
    }
}

export default App 