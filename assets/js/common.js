var baixiu = {
  getRouterName: (href) => {
    if (href.indexOf('?') == '-1') {
      var routerName = href.slice(href.lastIndexOf('/') + 1)
    } else {
      var routerName = href.slice(href.lastIndexOf('/') + 1, href.lastIndexOf('?'))
    }
    return routerName
  }
}