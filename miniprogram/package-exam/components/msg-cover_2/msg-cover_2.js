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
    msg_cover_bg: '/package-exam/res/msg_cover_bg.png',
    
    name: '',
  },

  attached() {
    this.setData({name: getApp().globalData.name})
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapButton(e) {
      const option = +e.currentTarget.dataset.option;
      getApp().globalData.userAnswer[4] = option;
      this.triggerEvent('onTapButton');
    },
  }
});
