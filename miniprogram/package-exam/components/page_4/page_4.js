// package-exam/components/received-a-call/received-a-call.js
import { invoke, invokeComponent, addComponentPage } from "../../../utils/page";
import animation from "../../../utils/animation";
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
    windowHeight: getApp().globalData["windowHeight"],

    part_animation: {
      part_1: false,
    },
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
    },
    onTapSetName() {
      this.setData({animation: animation.slideUp(300)});
    },
    onSetName(e) {
      console.log(e);
      this.triggerEvent('switchPage', 5);
    },
    _animation() {
      this.counter = this.counter || 1;
      this.delay = [200];
      const delay = this.delay[this.counter-1];
      setTimeout(() => {
        const part_animation = this.data.part_animation;
        part_animation[`part_${this.counter}`] = true;
        this.setData({part_animation});
        this.counter ++;

        if (this.counter <= this.delay.length) {
          this._animation();
        }
      }, delay);
    },
  }
});
