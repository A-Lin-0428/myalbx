$(function () {
  // 定义页码变量
  var pagenum = 1;
  //  定义每一页的数据量
  var pagesize = 2;

  // 效果：实现用户数据的筛选
  $('.btn-search').on('click', function (event) {
    //  阻止submit按钮的默认行为
    event.preventDefault()
    // 获取两个筛选信息
    query = {}
    //  判断用户有没有选择指定的筛选条件
    if ($('.cate_list').val() != 'all') {
      query.cate = $('.cate_list').val();
    }
    if ($('.statu_list').val() != 'all') {
      query.statu = $('.statu_list').val();
    }
    // 发起请求
    init(query)
  });

  init({});
  // 效果，发送ajax请求，把文章数据渲染到posts页面上
  function init(query) {
    $.ajax({
      type: 'get',
      url: '/admin/getPostList',
      data: {
        pagenum: pagenum,
        pagesize: pagesize,
        cate: query.cate,
        statu: query.statu
      },
      dataType: 'json',
      success: function (res) {
        // 通过template模板引擎，将数据渲染到页面
        var htmlStr = template('postsListTemp', res.data)
        // console.log(res)
        $('tbody').html(htmlStr)
        //生成分页结构
        setPage(Math.ceil(res.data.total / pagesize))
      }
    })
  }


  // 效果：利用bootstrappaginator插件，设计分页效果
  function setPage(count) {
    $(".pagination").bootstrapPaginator({
      //设置版本号
      bootstrapMajorVersion: 3,
      // 显示第几页
      currentPage: pagenum,
      // 总页数
      totalPages: count,
      //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
      onPageClicked: function (event, originalEvent, type, page) {
        // 把当前点击的页码赋值给currentPage, 调用ajax,渲染页面
        pagenum = page

        // 重新获取数据
        init({})
      }
    })
  };

  // 效果：将分类信息渲染到下拉菜单中,自调用函数，来实现加载
  (function () {
    $.ajax({
      type: 'get',
      url: '/admin/getCateList',
      dataType: 'json',
      success: function (res) {
        // 先定义一个字符串
        var htmlStr = '<option value="all">所有分类</option>'
        // 将数据拼接到字符串中
        for (var i = 0; i < res.data.length; i++) {
          htmlStr += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
        }
        // 把数据渲染到页面中
        $('.cate_list').html(htmlStr)
      }
    })
  })();

  // 效果：实现点击删除按钮，根据id删除文章数据
  // 采用事件委托的办法
  $('tbody').on('click', '.del_post', function () {
    //获取id
    var id = $(this).attr("data_id")
    $.ajax({
      type: 'get',
      url: '/deletePostById',
      data: {
        id: id
      },
      dataType: 'json',
      success: function (res) {

      }
    })
  })


})