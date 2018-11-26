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
    sex: null,
    msg_cover_bg: '/package-exam/res/msg_cover_bg.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapButton() {
      this.triggerEvent('onTapButton');
    },
  }
});
