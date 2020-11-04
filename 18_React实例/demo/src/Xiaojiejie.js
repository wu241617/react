// 导入用到的 React 文件
import React, {Component, Fragment} from 'react' 
// 导入外部样式文件
import './Xiaojiejie.css'

// 书写组件类
class Xiaojiejie extends Component {
    // 构造函数
    constructor(props){
        // 继承父类（Component）数据 props
        super(props)
        // 数据项
        this.state = {
            inputValue: '',
            list: ['HTML', 'CSS', 'Javascript']
        }
    }
    // 渲染函数
    // JSX 中注释：{/* xxx */}
    render(){
        return (
            <div id="container">
            {/* <Fragment> 外部标签包裹，不会渲染到页面上*/}
                <input type='text' 
                value={this.state.inputValue} 
                onChange={this.inputChange.bind(this)}
                />
                {/* 更改this指向 */}
                <button onClick={this.addList.bind(this)}>增加技术</button>
                {/* React 中列表数据项的渲染  */}
                <ul >
                    {/* {} 中书写 javascript 代码 */}
                   {
                       this.state.list.map((item, index) => {
                            return (
                                <p key={item+index} >
                                    <li dangerouslySetInnerHTML={{__html:item}}></li>
                                    <button 
                                    onClick={this.deleteItem.bind(this, index)}
                                    className='button'
                                    >删除</button>
                                </p>
                            )
                       })
                   }
                </ul>
            {/* </Fragment> */}
            </div>
        )
    }
    // 改变输入值函数
    inputChange(e){
        // 更改数据项
        this.setState({
            inputValue: e.target.value
        })
    }
    // 点击增加技能函数
    addList(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    // 点击子项删除对应项函数
    deleteItem(index){
        // 初始化一个局部变量 list (不能直接改变 this.state 中的数据)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

// 导出模块
export default Xiaojiejie