let companentPage = []
let tabPage = []
let gLastPage = {};
let page = {
  addComponentPage: function(companent) {
    for (var i = 0; i < companentPage.length; i++) {
      var route = companentPage[i].is;
      if (route === page.is) {
        companentPage.splice(i, 1);
        break;
      }
    }
    companentPage.push(companent)
  },
  removeComponentPage: function(companent) {
    for (var i = 0; i < companentPage.length; i++) {
      if (companentPage[i].is === companent.is) {
        companentPage.splice(i, 1);
      }
    }
  },
  addTabPage: function(page) {

    for (var i = 0; i < tabPage.length; i++) {
      var route = tabPage[i].route;
      if (route === page.route) {
        tabPage.splice(i, 1);
        break;
      }
    }
    tabPage.push(page)
  },
  _getAllPages: function() {
    let currentPage = getCurrentPages()
    let allPage = []
    for (var m = 0; m < tabPage.length; m++) {
      allPage.push(tabPage[m])
    }

    for (var i = 0; i < currentPage.length; i++) {
      var pageRoute = currentPage[i].route;
      for (var j = 0; j < allPage.length; j++) {
        if (pageRoute === allPage[j].route) {
          allPage.splice(j, 1);
          break;
        }
      }
      allPage.push(currentPage[i])
    }
    return allPage
  },
  invokeComponent: function(route, method, ...args) {
    let targetPage = {}
    companentPage.forEach(item => {
      if (item.is === route) {
        targetPage = item
      }
    })
    try {
      let result = targetPage[method].call(targetPage, ...args)
      return result
    } catch (e) {
      console.log(companentPage, route, method, "fail", e)
      return -1
    }
  },
  invoke: function(route, method, ...args) {
    let currentPages = page._getAllPages()
    let targetPage = {}
    currentPages.forEach(item => {
      if (item.route === route) {
        targetPage = item
      }
    })
    try {
      let result = targetPage[method].call(targetPage, ...args)
      return result
    } catch (e) {
      console.log("invoke",route, method, "fail", e)
      return -1
    }
  },
}
module.exports = page;