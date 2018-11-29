// pages/chooseLib/chooseLib.js
import { invoke, invokeComponent, addComponentPage } from "../../../utils/page";
import animation from "../../../utils/animation";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPageIndex: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options && options.page) {
      this.switchPage(options.page);
    }
    this._style(1);
    // this.switchPage({detail: 6}); // mock
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
    // if (this.data.wantPageIndex == 2) {
    //   invokeComponent("package-exam/components/page_2/page_2", "_playBell");
    // }
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

  },
  
  // 切换模块
  switchPage(e) {
    this.beforePageIndex = this.data.currentPageIndex;
    this.wantPageIndex = e.detail;
    console.log('beforePageIndex', this.beforePageIndex);
    console.log('wantPageIndex', this.wantPageIndex);
    this._style(this.wantPageIndex);
    this._animation(this.beforePageIndex, this.wantPageIndex).then(()=> {
      this._invoke(this.wantPageIndex);
      this.setData({currentPageIndex: this.wantPageIndex});
    });
  },
  _invoke(wantPageIndex) {
    debugger;
    switch(wantPageIndex) {
      case 2: invokeComponent("package-exam/components/page_2/page_2", "_playBell");break;
      case 3: invokeComponent("package-exam/components/page_3/page_3", "_playStore");break;
    }
  },
  _animation(beforePageIndex, wantPageIndex) {
    return new Promise((resolve, reject) => {
      const pageAnimation = {};
      for(let i = 1; i < 14; i ++ ) {
        pageAnimation[`animation_${i}`] = null;
      }
      pageAnimation[`animation_${beforePageIndex}`] = animation.fadeOut();
      pageAnimation[`animation_${wantPageIndex}`] = animation.fadeIn();
      this.setData({pageAnimation});
      setTimeout(()=> {
        resolve();
      }, 400);
    });
  },
  _style(wantPageIndex) {
    const pageStyle = {};
    for(let i = 1; i < 14; i ++ ) {
      pageStyle[`style_${i}`] = 'z-index: 0;';
    }
    pageStyle[`style_${wantPageIndex}`] = 'z-index: 5;';
    this.setData({pageStyle});
  },
  activity_animation_setting(beforePageIndex, wantPageIndex) {
    
  },
})