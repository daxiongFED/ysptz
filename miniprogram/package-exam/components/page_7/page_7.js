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
    background_1: "/images/background_1.png",
    article_2_1: "/package-exam/res/article_2_1.png",
    article_2_2: "/package-exam/res/article_2_2.png",

    windowHeight: getApp().globalData["windowHeight"],

    name: '',   
    
    part_animation: {
      part_1: false,
      part_2: false,
      part_3: false,
      part_4: false,
      part_5: false,
      part_6: false,
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
      this._setUserName();
      this._animation();
    },
    _setUserName() {
      this.setData({name: getApp().globalData.userName});
    },
    onTapPage() {
      getApp().playXiu();
      this.setData({animation: animation.slideUp(300)});
      invokeComponent("package-exam/components/msg-cover_2/msg-cover_2", "onPageShow");
    },
    onTapButton() {
      getApp().playTap();
      this.triggerEvent('switchPage', 8);
    },
    _animation() {
      this.counter = this.counter || 1;
      this.delay = [200, 500, 500, 500, 500, 500];
      const delay = this.delay[this.counter-1];
      setTimeout(() => {
        const part_animation = this.data.part_animation;
        part_animation[`part_${this.counter}`] = true;
        console.log('whitch part:', `part_${this.counter}`);
        this.setData({part_animation});
        this.counter ++;

        if (this.counter <= this.delay.length) {
          this._animation();
        }
      }, delay);
    },
  }
});
