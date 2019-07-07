// 引用PostModules模块
const postModules = require('../modules/postModules.js')

module.exports = {
  //  获取所有文章信息
  getPostList(req, res) {
    //先接收get请求发送过来的数据
    let obj = req.query;
    //  调用PostModules方法
    postModules.getPostList(obj, (err, data) => {
      // console.log(err);
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
  },
  // 根据id删去文章信息
  detelePostById(req, res) {
    let {
      id
    } = req.query;
    // 调用module的方法
    postModules.detelePostById(id, err => {
      if (err) res.json({
        'code': 1,
        'msg': '删除文章失败'
      })
      res.json({
        'code': 0,
        'msg': '删除文章成功',
      })
    })
  },

  // 添加文章
  addPost(req, res) {
    let post = {
      views: 0,
      likes: 0,
      user_id: req.session.currentUser.id,
      ...req.body
    }
    postModules.addPost(post, err => {
      if (err) res.json({
        code: 1,
        msg: '增加文章失败'
      })
      res.json({
        code: 0,
        msg: '增加文章成功'
      })
    })
  }
}