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
      this.triggerEvent('switchPage', 12);
    },
  }
});
