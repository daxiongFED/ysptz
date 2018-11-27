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
    picture_1: "/package-exam/res/picture_1.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapButton(e) {
      const option = +e.currentTarget.dataset.option;
      getApp().globalData.userAnswer[8] = option;
      this.triggerEvent('switchPage', 13);
    },
  }
});
