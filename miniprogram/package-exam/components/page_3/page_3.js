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
    again: "/package-exam/res/again.png",
  },

  attached() {
    this.Audio = wx.createInnerAudioContext();
    this.Audio.src = '/package-exam/res/store.mp3';
    setTimeout(() => {
      this.Audio.play();
    }, 500);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTapAgain() {
      setTimeout(() => {
        this.Audio.play();
      }, 200);
    },
    onTapButton(e) {
      this.Audio.stop();
      const option = +e.currentTarget.dataset.option;
      getApp().globalData.userAnswer[1] = option;
      this.triggerEvent('switchPage', 4);
    },
  }
});
