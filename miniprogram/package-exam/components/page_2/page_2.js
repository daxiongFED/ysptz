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
    phone_reject: "/package-exam/res/received-a-call/phone_reject.png",
    phone_accept: "/package-exam/res/received-a-call/phone_accept.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapButton(e) {
      const option = +e.currentTarget.dataset.option;
      getApp().globalData.userAnswer[0] = option;
      option == 1 && this.triggerEvent('switchPage', 3);
    },
  }
});
