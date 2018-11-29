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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapPage() {
      this.setData({animation: animation.slideUp(300)});
    },
    onTapButton() {
      this.triggerEvent('switchPage', 7);
    },
  }
});
