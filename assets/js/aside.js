$(function () {
  //  入口函数后，开始书写业务代码
  // 1.实现功能：在点击有下拉按钮的选项里面的li，可以维持下拉效果
  // 第一步：获取唯一的路径地址，分两种情况，一种是带/后的数据；一种是/后，且？前的数据
  var href = location.href;
  var routerName = baixiu.getRouterName(href);
  // console.log(routerName)
  // 第二步：文章板块：当routerName的值是 posts  post-add  categories 的时候，给menu-posts添加类 in，和添加属性
  if (routerName == 'posts' || routerName == 'post-add' || routerName == 'categories') {
    $('#menu-posts').addClass('in');
    $('#menu-posts').attr('aria-expanded', false);
  }
  // 第三步：设置板块：当routerName的值是nav-menus   slides  settings的时候，给menu-settings添加类和属性
  if (routerName == 'nav-menus' || routerName == 'slides' || routerName == 'settings') {
    $('#menu-settings').addClass('in');
    $('#menu-settings').attr('aria-expanded', false);
  }

  // 2.实现效果：当给确定跳转的标题增加一个类class="active"，用排他思想
  // 第一步：先排除所有
  $('li').removeClass('active');

  // 第二步：确定当前

  $('#' + routerName).addClass('active');
})