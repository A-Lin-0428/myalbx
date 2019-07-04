// 引用mysql模块
const mysql = require('mysql')

// 连接数据库
let conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'baixiu',
  dateStrings: true
})


module.exports = {
  // 获取categories表格中的name
  getCateList(callback) {
    // 准备sql语句
    let sql = 'SELECT * FROM categories '
    // 调用方法
    conn.query(sql, (err, result) => {
      if (err) return callback(err)

      callback(null, result)
    })
  }
}