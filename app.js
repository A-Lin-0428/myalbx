// 1. 引入express 模块
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

// 引用用户模块
const router = require('./router')

// 2. 创建app实例对象
const app = express();

// 引用ejx渲染引擎
app.set('view engine', 'ejs')

app.set('views', 'views')

// 给bodyParser注册中间件
app.use(bodyParser.urlencoded({
  extended: false
}))

// 托管静态资源
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

// 3.开启服务器，监听端口
app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
})

//  4. 注册中间件 
app.use(router);