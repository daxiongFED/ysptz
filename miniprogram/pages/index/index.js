//index.js
const app = getApp()

Page({
  data: {
  },
  onLoad: function() {
      wx.redirectTo({
        url: '/package-result/pages/result-index/result-index',
      })
  },
})
