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
    opacity: 0,
    background_1: "/images/background_1.png",
    phone_reject: "/package-exam/res/received-a-call/phone_reject.png",
    phone_accept: "/package-exam/res/received-a-call/phone_accept.png",
    
    bg_1: "/package-exam/res/received-a-call/bg_call_1.png",
    bg_2: "/package-exam/res/received-a-call/bg_call_2.png",
    bg_3: "/package-exam/res/received-a-call/bg_call_3.png",

    curActivityIndex: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapAc1() {
      this.switchActivity(2);
      // this.opacity_worker(400);
    },
    onTapAc2() {
      this.switchActivity(3);
    },
    onTapAc3() {
      this.triggerEvent('switchPart', 1);
    },
    switchActivity(switchToActivityIndex) {
      this.activity_animation_setting(switchToActivityIndex);
    },
    activity_animation_setting(switchToActivityIndex) {
      switch (switchToActivityIndex) {
        case 2:
          this.setData({
            animation_1: this.anmt_fadeOut(),
            animation_2: this.anmt_fadeIn(),
            animation_3: null,
          });break;
        case 3:
          this.setData({
            animation_1: null,
            animation_2: this.anmt_fadeOut(),
            animation_3: this.anmt_fadeIn(),
          });break;
      }
      setTimeout(()=> {
        this.setData({curActivityIndex: switchToActivityIndex});
      }, 400);
    },
    anmt_fadeIn() {
      const Animation = wx.createAnimation({
        duration: 400,
        timingFunction: "linear",
        delay: 0,
        transformOrigin: "ease-out"
      });
      Animation.opacity(0.9).step();
      // Animation.top(0).step();
      return Animation.export();
    },
    anmt_fadeOut() {
      const Animation = wx.createAnimation({
        duration: 400,
        timingFunction: "linear",
        delay: 0,
        transformOrigin: "ease-out"
      });
      Animation.opacity(0).step().top(100000).step();
      // Animation.top(1000).step();
      return Animation.export();
    },

    opacity_worker(duration) {
      let opacity = 0;
      let interval = duration / 16;
      let oneTimeChange = 16 / duration;
      const pooling = setInterval(()=>{
        opacity += oneTimeChange;
        this.setData({opacity: opacity});
        if (opacity == 1) {
          clearInterval(pooling);
        }
      }, interval);
    },

    
  }
});
