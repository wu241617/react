const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');//导入在内存中自动生成index页面的插件

//创建一个插件的实例对象
const htmlPlugin = new  HtmlWebPackPlugin({
	template: path.join(__dirname, './src/index.html'),//源文件
	filename: 'index.html' //生成的内存中首页的名称
})

// 向外暴露一个打包的配置对象,webpack基于node构建的，所以支持所有Node API和语法
module.exports = {
	mode: 'development', //development production
	plugins: [
		htmlPlugin
	],
	module: {//所有第三方模块的配置规则
		rules: [
			{test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/}//千万别忘记添加exclude排除项
		]
	}
}