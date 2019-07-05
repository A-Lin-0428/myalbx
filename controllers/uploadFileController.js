const formidable = require("formidable");
const path = require('path')

module.exports = {
  // 上传文件
  uploadFile(req, res) {
    // 使用formidable来实现文件的上传操作

    // 1.创建文件上传对象
    // var form = new formidable.IncomingForm()
    var form = new formidable.IncomingForm()
    // 2.设置编码，这个模块不仅仅可以实现文件的上传，还可以实现普通参数的传递
    form.encoding = 'utf-8'

    // 3. 设置文件上传存储路径
    form.uploadDir = __dirname + '/../uploads'
    //  4. 设置保留文件扩展名
    form.keepExtensions = true;

    // 5.实现文件的上传操作
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.json({
          code: 1,
          msg: '文件上传失败'
        })
      } else {
        // console.log(files)
        var filename = path.basename(files.img.path)
        // console.log(filename)
        res.json({
          code: 0,
          msg: '文件上传成功',
          img: filename
        })
      }
    })
  }
}