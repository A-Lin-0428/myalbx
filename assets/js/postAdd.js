$(function () {
  //  获取所有分类的数据，再渲染到页面中
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
      $('#category').html(htmlStr)
    }
  })


})