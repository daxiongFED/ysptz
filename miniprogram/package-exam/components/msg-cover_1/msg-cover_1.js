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
    msg_cover_bg: '/package-exam/res/msg_cover_bg.png',
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
    onTapButton(e) {
      getApp().playTap();
      const option = +e.currentTarget.dataset.option;
      getApp().globalData.userAnswer[3] = option;
      this.triggerEvent('onTapButton');
      getApp().SaveToCloudDataBase();
    },
    _animation() {
      this.counter = this.counter || 1;
      this.delay = [200, 500, 500, 500, 500, 500];
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
