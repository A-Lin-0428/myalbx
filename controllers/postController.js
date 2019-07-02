// 引用PostModules模块
const postController = require('../modules/postModules.js')

module.exports = {
  //  获取所有文章信息
  getPostList(req, res) {
    //先接收get请求发送过来的数据
    let obj = req.query;
    // console.log(obj);
    //  调用PostModules方法
    postController.getPostList(obj, (err, data) => {
      console.log(err);
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