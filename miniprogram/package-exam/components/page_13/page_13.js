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
    onTapButton() {
      this.triggerEvent('switchPage', 14);
    },
  }
});