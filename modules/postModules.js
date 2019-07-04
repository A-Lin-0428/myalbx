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
  // 现在的params是一个对象，一共有四个属性
  // { pagenum: '1', pagesize: '2', cate: '1', status: 'published' }
  getPostList(params, callback) {
    // 准备sql语句，查找多表数据
    let sql = `SELECT posts.id pid,posts.title,posts.feature,posts.created,posts.status,categories.name,users.nickname,users.id uid FROM posts 
    INNER JOIN categories on posts.category_id=categories.id
    INNER JOIN users on posts.user_id=users.id
    where 1=1 `
    // 在这里可以根据结构拼接筛选条件
    if (params.cate) {
      //拼接分类条件
      sql += ` and posts.category_id=${params.cate}`
    }
    if (params.status) {
      //拼接状态条件
      sql += ` posts.user_status=${params.status}`
    }

    sql += ` order by posts.id desc
    LIMIT ${ (params.pagenum-1) * params.pagesize },${params.pagesize}`

    // 调用方法
    conn.query(sql, (err, result) => {
      if (err) return callback(err)

      // 再定义一个sql语句，获取表单数量
      let sql = 'SELECT COUNT(*) pageSum FROM posts'
      // 再次调用方法
      conn.query(sql, (err1, datal) => {
        if (err1) return callback(err1)
        callback(null, {
          result: result,
          total: datal[0].pageSum
        })
        // console.log(result);
      })

    })
  },
  detelePostById(id, callback) {
    //  准备sql语句
    let sql = 'DELETE FROM posts WHERE id =' + id
    // 调用方法
    conn.query(sql, (err, result) => {
      if (err) return callback(err)
      callback(null)
    })
  }
}