import React from 'react';
import ReactDOM from 'react-dom';

const myDiv = React.createElement('div',null,'这是一个DIV元素!');
const myTest = <h6><a href="#">这是一个跳转链接</a></h6>; 

ReactDOM.render(<div>
{myTest}
{myDiv}
</div>,document.querySelector('#app'));