// package-exam/components/received-a-call/received-a-call.js
import { invoke, invokeComponent, addComponentPage } from "../../../utils/page";
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

  attached() {
    addComponentPage(this);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPageShow() { 
      this._playBell();
    },
    _playBell() {
      this.Audio = wx.createInnerAudioContext();
      this.Audio.src = '/package-exam/res/bell.mp3';
      setTimeout(() => {
        this.Audio.play();
      }, 150);
    },
    onTapButton(e) {
      this.Audio.stop();
      const option = +e.currentTarget.dataset.option;
      getApp().globalData.userAnswer[0] = option;
      if (option == 1) {
        this.triggerEvent('switchPage', 3);
      } else if (option == 0) {
        getApp().globalData.finishTime = new Date();
        wx.redirectTo({
          // url: '/package-exam/pages/exam-index/exam-index',
          url: '/package-result/pages/result-index/result-index',
        });
      }
    },
  }
});
