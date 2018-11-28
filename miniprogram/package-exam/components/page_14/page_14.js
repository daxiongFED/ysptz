// package-exam/components/received-a-call/received-a-call.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    background_1: "/images/background_1.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapButton(e) {
      const option = +e.currentTarget.dataset.option;
      getApp().globalData.userAnswer[10] = option;
      // this.triggerEvent('switchPage', 1);
      wx.navigateTo({
        // url: '/package-exam/pages/exam-index/exam-index',
        url: '/package-result/pages/result-index/result-index',
      })
    },
  }
});
