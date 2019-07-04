// 引用用户模块
const cateModules = require('../modules/cateModules.js')


module.exports = {
  //获取分页数据
  getCateList(req, res) {
    //获取id

    // 调用cateModule的方法
    cateModules.getCateList((err, data) => {
      if (err) res.json({
        'code': 1,
        'msg': '获取所有分类失败'
      })
      res.json({
        'code': 0,
        'msg': '获取所有分类成功',
        'data': data
      })
    })
  }
}