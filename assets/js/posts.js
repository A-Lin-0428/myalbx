$(function () {
  // 效果，发送ajax请求，把文章数据渲染到posts页面上
  $.ajax({
    type: 'get',
    url: '/admin/getPostList',
    data: {
      pagenum: 1,
      pagesize: 3,
    },
    dataType: 'json',
    success: function (res) {
      // 通过template模板引擎，将数据渲染到页面
      var htmlStr = template('postsListTemp', res)
      $('tbody').html(htmlStr)
    }
  })
})