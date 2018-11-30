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
    },
    onTapPage() {
      this.triggerEvent('switchPage', 2);
    },
    _animation() {
      this.counter = this.counter || 1;
      this.delay = [10, 1000, 1000, 1000];
      const delay = this.delay[this.counter-1];
      setTimeout(() => {
        const part_animation = this.data.part_animation;
        part_animation[`part_${this.counter}`] = true;
        this.setData({part_animation});
        this.counter ++;

        if (this.counter <= 4) {
          this._animation();
        }
      }, delay);
    },
  }
});
