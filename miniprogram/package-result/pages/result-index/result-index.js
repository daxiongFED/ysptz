// pages/chooseLib/chooseLib.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMovie: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    getApp().globalData.hasShare = true;
    getApp().updateCloudData();
    return {
      title: '珠海市公安局反诈骗中心发布了测试你是否容易被骗的小程序，快来测试一下吧！',
      imageUrl: '/images/shareCover.png',
      path: 'pages/index/index',
    }
  },
  onShowMovie() {
    this.setData({showMovie: true});
  },
  onHideMovie() {
    this.setData({showMovie: false});
  }
})