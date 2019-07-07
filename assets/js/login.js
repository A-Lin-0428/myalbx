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
      beforeSend: function () {
        if (!/\w+[@]\w+[.]\w+/.test(email)) {
          // window.confirm('邮箱输入错误，请重新输入')
          $('.alertLogin > span').text('邮箱输入错误')
          $('.alertLogin').fadeIn(500).delay(2000).fadeOut(500)
        }
        if (password.trim().lenght == 0) {
          $('.alertLogin > span').text('请输入密码')
          $('.alertLogin').fadeIn(500).delay(2000).fadeOut(500)
        }
      },
      data: {
        email: email,
        password: password,
      },
      dataType: 'json',
      success: function (res) {
        if (res.code == 1 && res.msg == '密码输入错误') {
          // window.confirm('密码输入错误，请重新输入')
          $('. alertLogin > span').text('密码输入错误，请重新输入')
          $('.alertLogin').fadeIn(500).delay(2000).fadeOut(500)
        } else if (res.code == 0) {
          location.href = '/admin'
        }
      }
    })
  })

})