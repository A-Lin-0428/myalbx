const conn = require('./mysql.js')

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