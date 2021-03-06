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
    bo: "/package-exam/res/bo.gif",
    again: "/package-exam/res/again.png",
    boRunning: true,

    part_animation: {
      part_1: false,
      part_2: false,
      part_3: false,
      part_4: false,
    }
  },

  attached() {
    addComponentPage(this);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPageShow() {
      this._animation();
      this._playStore();
    },
    _playStore() {
      this.setData({boRunning: true});
      this.Audio && this.Audio.destroy();
      this.Audio = wx.createInnerAudioContext();
      this.Audio.src = '/package-exam/res/store.mp3';
      setTimeout(() => {
        this.Audio.play();
        this.Audio.onEnded(() => {
          this.setData({boRunning: false});
          console.log('boRunning', this.data.boRunning);
        });
      }, 100);
    },
    onTapAgain() {
      this._playStore();
    },
    onTapButton(e) {
      getApp().playTap();
      this.Audio.stop();
      const option = +e.currentTarget.dataset.option;
      getApp().globalData.userAnswer[1] = option;
      this.triggerEvent('switchPage', 5);
    },
    _animation() {
      this.counter = this.counter || 1;
      this.delay = [100, 2000, 500, 500];
      const delay = this.delay[this.counter-1];
      setTimeout(() => {
        const part_animation = this.data.part_animation;
        part_animation[`part_${this.counter}`] = true;
        this.setData({part_animation});
        this.counter ++;

        if (this.counter <= this.delay.length) {
          this._animation();
        } else {
          this.setData({animation_finish: true});
        }
      }, delay);
    },
    onTapAnmtMask() {
      getApp().util_showAllPart(this);
    },
  }
});
