const conn = require('./mysql.js')

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