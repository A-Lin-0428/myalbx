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
  // 获取文章信息
  getPostList(params, callback) {
    // 准备sql语句，查找多表数据
    let sql = `SELECT posts.title,posts.feature,posts.created,posts.status,categories.name,users.nickname FROM posts 
    INNER JOIN categories on posts.category_id=categories.id
    INNER JOIN users on posts.user_id=users.id 
    LIMIT ${ (params.pagenum-1) * params.pagesize },${params.pagesize}
    `
    // 调用方法
    conn.query(sql, (err, result) => {
      if (err) return callback(err)
      callback(null, result)
    })
  }
}