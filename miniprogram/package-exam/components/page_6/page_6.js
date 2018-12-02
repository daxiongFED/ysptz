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
    msg_header: "/package-exam/res/msg_header.png",
    msg_footer: "/package-exam/res/msg_footer.png",
    msg_body_1: "/package-exam/res/msg_body_1.png",
    msg_body_2: "/package-exam/res/msg_body_2.png",

    windowHeight: getApp().globalData["windowHeight"],

    part_animation: {
      part_1: false,
      part_2: false,
      part_3: false,
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
      this._playMsgMusic();
    },

    onTapPage() {
      getApp().playXiu();
      this.setData({animation: animation.slideUp(300)});
      invokeComponent("package-exam/components/msg-cover_1/msg-cover_1", "onPageShow");
    },
    onTapButton() {
      getApp().playTap();
      this.triggerEvent('switchPage', 7);
    },
    _animation() {
      this.counter = this.counter || 1;
      this.delay = [200, 800, 500];
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
    _playMsgMusic() {
      setTimeout(() => {
        getApp().playMsg();
        setTimeout(() => {
          getApp().playMsg();
        }, this.delay[1]);
      }, this.delay[0]);
    },
  }
});
