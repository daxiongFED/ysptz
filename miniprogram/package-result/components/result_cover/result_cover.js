// package-exam/components/received-a-call/received-a-call.js
import canvasPainter from './canvasPainter.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    width: 750,
    height: 1206,
    quality: 1,
    background: "/package-result/res/result_page_600.png",
    
    userName: '曾志雄',

    userTitle: "/package-result/res/title_1.png",
    userTitleDesc: '你就是江湖上的传说，俗称祖师爷，不出去害人就很好了。记得多多传授反诈骗知识给身边的朋友。',

    userRank: '15%的小众群体',
    userAdj: '智慧的',
    userAdjDesc: '你是一名智者，时刻保持着清醒的头脑，遇事不乱、能沉着应对。',
    userPosition: '保护对象',
    userPositionDesc: '日常寻求票圈各路亲朋好友仗义相助。',
    
  },

  attached() {
    this._initUserInfo();
    this._painter();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _initUserInfo() {
      getApp().MarkExam();
      const {userName, userScoreInfo, userCharacterInfo} = getApp().globalData;
      this.setData({
        userName: userName,
        userTitle: `/package-result/res/title_${userScoreInfo.titleIndex}.png`,
        userTitleDesc: userScoreInfo.titleDesc,
        userRank: userScoreInfo.ranking,
        userAdj: userCharacterInfo.adj,
        userAdjDesc: userCharacterInfo.adjDesc,
        userPosition: userScoreInfo.position,
        userPositionDesc: userScoreInfo.positionDesc,
      });
    },
    _painter() {
      const ctx = wx.createCanvasContext('myCanvas', this);
      canvasPainter.preparePaint(ctx, this);
    },
  }
});
