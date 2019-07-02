// 引用PostModules模块
const postController = require('../modules/postModules.js')

module.exports = {
  //  获取所有文章信息
  getPostList(req, res) {
    //  调用PostModules方法
    postController.getPostList((err, data) => {
      if (err) res.json({
        'code': 1,
        'msg': '获取所有文章失败'
      })
      res.json({
        'code': 0,
        'msg': '获取所有文章成功',
        'data': data
      })
    })
  }
}