// 引入router模块
const express = require('express');

// 创建路由模块对象
const router = express.Router();

// 引用pageController用户模板
const pageController = require('./controllers/pageController.js');
const postController = require('./controllers/postController.js');
const cateController = require('./controllers/cateController.js');
const addPostController = require('./controllers/addPostController.js');
const uploadFileController = require('./controllers/uploadFileController.js');
const usersController = require('./controllers/usersController.js');

// 返回前台页面
router.get('/', pageController.showIndexPage)
  .get('/detail', pageController.showDetailPage)
  .get('/list', pageController.showListPage)
  // 返回后台页面 ，默认前面加admin
  .get('/admin/categories', pageController.showCategoriesPage)
  .get('/admin/comments', pageController.showMommentsPage)
  .get('/admin', pageController.showAdminIndexPage)
  .get('/admin/login', pageController.showLoginPage)
  .get('/admin/nav-menus', pageController.showNavMenusPage)
  .get('/admin/password-reset', pageController.showPasswordResetPage)
  .get('/admin/post-add', pageController.showPostAddPage)
  .get('/admin/posts', pageController.showPostsPage)
  .get('/admin/profile', pageController.showProfilePage)
  .get('/admin/settings', pageController.showSettingsPage)
  .get('/admin/slides', pageController.showSlidesPage)
  .get('/admin/users', pageController.showUsersPage)

  // 获取所有文章信息
  .get('/admin/getPostList', postController.getPostList)
  //  根据删除文章数据
  .get('/deletePostById', postController.detelePostById)





  // 获取分类数据
  .get('/admin/getCateList', cateController.getCateList)

  // 获取上传的文件
  .post('/uploadFile', uploadFileController.uploadFile)

  // 获取添加文章
  .post('/addPost', addPostController.addPost)

  // 获取用户登录信息
  .post('/login', usersController.loginInfo)


module.exports = router;