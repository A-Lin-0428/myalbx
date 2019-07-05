// 引用mysql模块
const mysql = require('mysql')

// 连接数据库
let conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'baixiu',
})


module.exports = {
  loginInfo(email, callback) {
    // 准备sql语句
    let sql = `SELECT * from users where email = '${email}'`;
    // 调用方法
    conn.query(sql, (err, reslut) => {
      // console.log(reslut)
      if (err) return callback(err)
      callback(null, reslut[0])
    })
  }

}