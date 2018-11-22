// package-exam/components/received-a-call/received-a-call.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    windowHeight: getApp().globalData.windowHeight,
    background_2: "/images/background_2.png",
    bg_1: "/package-exam/res/set-name/bg_name_1.png",
    bg_2: "/package-exam/res/set-name/bg_name_2.png",
    bg_3: "/package-exam/res/set-name/bg_name_3.png",

    show_setNameCover: false,
    curActivityIndex: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapAc1() {
      this.switchActivity(2);
      // this.anmt_slideUp(2);
    },
    onTapAc2() {
      this.switchActivity(3);
      // this.anmt_slideUp(3);
    },
    switchActivity(switchToActivityIndex) {
      this.activity_animation_setting(switchToActivityIndex);
    },
    activity_animation_setting(switchToActivityIndex) {
      this.setData({
        animation: this.anmt_slideUp(switchToActivityIndex)
      });
      setTimeout(()=> {
        this.setData({curActivityIndex: switchToActivityIndex});
      }, 400);
    },
    anmt_slideUp(switchToActivityIndex) {
      const Animation = wx.createAnimation({
        duration: 400,
        timingFunction: "linear",
        delay: 0,
        transformOrigin: "ease-out"
      });
      Animation.top(-this.data.windowHeight * (switchToActivityIndex - 1)).step();
      return Animation.export();
    },
    anmt_slideDown() {
      const Animation = wx.createAnimation({
        duration: 400,
        timingFunction: "linear",
        delay: 0,
        transformOrigin: "ease-out"
      });
      Animation.top(0).step().top(100000).step();
      return Animation.export();
    },

    onTapSetName() {
      this.setData({show_setNameCover: true});
    },
    
  }
});
