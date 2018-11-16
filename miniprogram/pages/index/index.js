//index.js
const app = getApp()

Page({
  data: {
  },
  onLoad: function() {
      wx.redirectTo({
        url: '/package-exam/pages/exam-index/exam-index',
      })
  },
})
