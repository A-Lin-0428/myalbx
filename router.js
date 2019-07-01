// 引入router模块
const express = require('express');

// 创建路由模块对象
const router = express.Router();

// 引用pageController用户模板
const pageController = require('./controllers/pageController.js');

// 返回前台页面
router.get('/', pageController.showIndexPage)
  .get('/detail', pageController.showDetailPage)
  .get('/list', pageController.showListPage)
  // 返回后台页面 ，默认前面加admin
  .get('/admin/categories', pageController.showCategoriesPage)
  .get('/admin/comments', pageController.showMommentsPage)
  .get('/admin', pageController.showIndexPage)
  .get('/admin/login', pageController.showLoginPage)
  .get('/admin/navmenus', pageController.showNavMenusPage)
  .get('/admin/password', pageController.showPasswordResetPage)
  .get('/admin/postadd', pageController.showPostAddPage)
  .get('/admin/posts', pageController.showPostsPage)
  .get('/admin/profile', pageController.showProfilePage)
  .get('/admin/settings', pageController.showSettingsPage)
  .get('/admin/slides', pageController.showSlidesPage)
  .get('/admin/users', pageController.showUsersPage)




module.exports = router;