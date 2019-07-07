// 1. 引入express 模块
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session')


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

// 让app应用使用session的方式来进行状态保持
app.use(session({
  //name: 'hhw',
  // 对session加密：加盐，可以设置一个只有你自己知道的字符串
  //  md5加密
  secret: '加什么都没有所谓',
  //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
  resave: false,
  //强制“未初始化”的会话保存到存储。 
  saveUninitialized: false,

}))


// 托管静态资源
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))


// 在路由中间中进行session数据的判断

// 3.开启服务器，监听端口
app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
})
// 在路由中间件中进行session数据的判断
app.use(function (req, res, next) {
  if (req.session.islogin && req.session.islogin == true || req.url == '/admin/login' || req.url.indexOf('/admin') == -1) {
    next()
  } else {
    res.redirect('/admin/login')
  }
})
//  4. 注册中间件 
app.use(router);