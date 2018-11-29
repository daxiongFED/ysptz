const animation = {
  slideUp(duration = 600) {
    const Animation = wx.createAnimation({
      duration,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "ease-out"
    });
    Animation.top(0).step();
    return Animation.export();
  },
  slideDown(duration = 600) {
    const Animation = wx.createAnimation({
      duration,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "ease-out"
    });
    Animation.top(getApp().globalData["windowHeight"])
      .opacity(0.9)
      .step();
    return Animation.export();
  },
  fadeIn(duration = 400) {
    const Animation = wx.createAnimation({
      duration,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "ease-out"
    });
    Animation.opacity(1).step();
    // Animation.top(0).step();
    return Animation.export();
  },
  fadeOut(duration = 400) {
    const Animation = wx.createAnimation({
      duration,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "ease-out"
    });
    Animation.opacity(0).step().top(getApp().globalData["windowHeight"]).step();
    // Animation.top(1000).step();
    return Animation.export();
  },
};
module.exports = animation;
