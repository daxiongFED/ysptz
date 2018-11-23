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
    background_2: "/images/background_2.png",
    show_setNameCover: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapSetName() {
      this.setData({show_setNameCover: true});
    },
    onSetName(e) {
      console.log(e);
      this.triggerEvent('switchPage', 5);
    },
  }
});
