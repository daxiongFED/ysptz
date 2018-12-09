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
    onTapSetName(e) {
      if (e.detail.userInfo) {
        this.setData({
          avatarUrl: e.detail.userInfo.avatarUrl,
          userInfo: e.detail.userInfo
        });
        getApp().globalData['userName'] = e.detail.userInfo.nickName;
        getApp().globalData['userLocation'] = e.detail.userInfo.country +' '+ e.detail.userInfo.province +' '+ e.detail.userInfo.city;
        getApp().globalData['userWXInfo'] = e.detail;
        console.log('getUserInfo', e);
        getApp().SaveToCloudDataBase();
      }
      invokeComponent("package-exam/components/set-name-cover/set-name-cover", "onPageShow");
      this.setData({animation: animation.slideUp(300)});
    },
    onSetName(e) {
      console.log(e);
      this.triggerEvent('switchPage', 1);
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
