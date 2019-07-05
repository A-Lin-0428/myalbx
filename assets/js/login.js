$(function () {
  //  点击登录按钮，提交数据
  $('#btnLogin').on('click', function (e) {
    e.preventDefault()
    //  获取邮箱，和密码的值
    var email = $('#email').val();
    var password = $('#password').val();
    //  发送ajax请求
    $.ajax({
      type: 'post',
      url: '/login',
      data: {
        email: email,
        password: password,
      },
      dataType: 'json',
      success: function (res) {
        // console.log(res);
        if (res.code == 1 && res.msg == '邮箱输入错误') {
          window.confirm('邮箱输入错误，请重新输入')
        } else if (res.code == 1 && res.msg == '密码输入错误') {
          window.confirm('密码输入错误，请重新输入')
        } else if (res.code == 0) {
          location.href = '/admin'
        }
      }
    })

  })


})