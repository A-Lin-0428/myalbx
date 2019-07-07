// 此模块要负责渲染页面

module.exports = {
  // 渲染前台页面
  showIndexPage(req, res) {
    res.render('index.ejs')
  },
  showDetailPage(req, res) {
    res.render('detail.ejs')
  },
  showListPage(req, res) {
    res.render('list.ejs')
  },
  // 渲染后台页面
  showCategoriesPage(req, res) {
    res.render('admin/categories.ejs')
  },
  showMommentsPage(req, res) {
    res.render('admin/comments.ejs')
  },
  showAdminIndexPage(req, res) {
    res.render('admin/index.ejs')
  },
  showLoginPage(req, res) {
    res.render('admin/login.ejs')
  },
  showNavMenusPage(req, res) {
    res.render('admin/nav-menus.ejs')
  },
  showPasswordResetPage(req, res) {
    res.render('admin/password-reset.ejs')
  },
  showPostAddPage(req, res) {
    res.render('admin/post-add.ejs')
  },
  showPostsPage(req, res) {
    res.render('admin/posts.ejs')
  },
  showProfilePage(req, res) {
    res.render('admin/profile.ejs')
  },
  showSettingsPage(req, res) {
    res.render('admin/settings.ejs')
  },
  showSlidesPage(req, res) {
    res.render('admin/slides.ejs')
  },
  showUsersPage(req, res) {
    res.render('admin/users.ejs')
  },
}