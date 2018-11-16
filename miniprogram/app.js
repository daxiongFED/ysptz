//app.js
App({
  onLaunch: function () {
    this.globalData = {}
    const me = this;
    const name = 'iPhone X';
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    wx.getSystemInfo({
      success(res) {
        console.log('app.js',res)
        if (res.model.indexOf(name) > -1) {
          me.globalData.isIphonex = true
        }
        me.globalData["screenRatio"] = res.windowWidth / 750;
        me.globalData["windowHeight"] = res.windowHeight
        me.globalData["windowWidth"] = res.windowWidth
        me.globalData["platform"] = res.platform
        me.globalData["screenWidth"] = res.screenWidth
        me.globalData["screenHeight"] = res.screenHeight
      },
    })
  }
})
