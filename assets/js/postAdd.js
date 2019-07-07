$(function () {
  //  效果：获取所有分类的数据，再渲染到页面中
  $.ajax({
    type: 'get',
    url: '/admin/getCateList',
    dataType: 'json',
    success: function (res) {
      // 先定义一个字符串
      var htmlStr = ''
      // 将数据拼接到字符串中
      for (var i = 0; i < res.data.length; i++) {
        htmlStr += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
      }
      // 把数据渲染到页面中
      $('#category_id').html(htmlStr)
    }
  })

  // 效果：初始化富文本框：用富文本框覆盖.ejs中的textare文本
  CKEDITOR.replace('content');

  // 实现文件的上传
  $('#fileimg').on('change', function () {
    // 1. 获取当前所有被选择文件对象
    var myfile = document.querySelector('#fileimg').files[0]
    //  2.创建formdata
    var formdata = new FormData();
    //  3. 追加参数
    formdata.append('img', myfile)
    // 4.发起ajax请求
    $.ajax({
      type: 'post',
      url: '/uploadFile',
      data: formdata,
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function (res) {
        // 判断
        if (res.code == 0) {
          // 将res.img的数据保存到hidden标签中
          $('#feature').val(res.img)
          // 实现预览
          $('.thumbnail').attr('src', '/uploads/' + res.img).show()
        }
      }
    })
  })


  // 保存文章数据--实现文章的新增
  $('.btnsub').on('click', function (event) {
    //  先组织submit的默认行为
    event.preventDefault()
    // 同步数据：将富文本框中的数据与textarea中的数据进行同步
    CKEDITOR.instances.content.updateElement()
    // console.log($('.row').serialize())

    // 发送ajax请求
    $.ajax({
      type: 'post',
      url: '/addPost',
      data: $('.row').serialize(),
      dataType: 'json',
      success: function (res) {
        location.href = '/admin/posts'
      }
    })
  })


})