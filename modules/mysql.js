// 引用mysql模块
const mysql = require('mysql')

// 连接数据库
let conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'baixiu',
})

module.exports = conn