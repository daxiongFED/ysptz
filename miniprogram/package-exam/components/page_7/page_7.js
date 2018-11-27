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
    article_1: "/package-exam/res/article_1.png",
    article_2: "/package-exam/res/article_2.png",

    showMsgCover: false,

    name: '',
  },

  attached() {
    this.setData({name: getApp().globalData.name})
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapPage() {
      this.setData({showMsgCover: true});
    },
    onTapButton() {
      this.triggerEvent('switchPage', 8);
    },
  }
});
