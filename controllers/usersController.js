// 引用module用户模块
const usersModules = require('../modules/usersModules.js')
module.exports = {

  //  获取用户登录信息
  loginInfo(req, res) {
    let obj = req.body;

    // 调用用户module方法
    usersModules.loginInfo(obj.email, (err, data) => {
      if (err) {
        res.json({
          code: 1,
          msg: '服务器异常'
        })
      } else {
        if (data) {
          if (data.password == obj.password) {
            req.session.islogin = true
            req.session.currentUser = data
            res.end(JSON.stringify({
              code: 0,
              msg: '登录成功'
            }))
          } else {
            res.json({
              code: 1,
              msg: '密码输入错误'
            })
          }
        } else {
          res.json({
            code: 1,
            msg: '邮箱输入错误'
          })
        }
      }
    })

  }
}