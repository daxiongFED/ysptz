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
    article_1: "/package-exam/res/article_1.png",
    article_2: "/package-exam/res/article_2.png",

    windowHeight: getApp().globalData["windowHeight"],

    name: '',
  },

  attached() {
    addComponentPage(this);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _setUserName() {
      this.setData({name: getApp().globalData.userName});
    },
    onTapPage() {
      this.setData({animation: animation.slideUp(300)});
    },
    onTapButton() {
      this.triggerEvent('switchPage', 8);
    },
  }
});
