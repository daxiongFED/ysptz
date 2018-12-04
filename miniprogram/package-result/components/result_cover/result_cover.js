// package-result/components/result_cover/result_cover.js
import canvasPainter from './canvasPainter.js'
import animation from '../../../utils/animation.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    isPageReady: false,
    isCanvasReady: false,
    loadingNumber: 0,

    width: 750,
    height: 1206,
    quality: 2,
    background: "/package-result/res/result_page_600.png",
    loadingBackground: "/images/background_1.png",
    QRCode: "/package-result/res/QRCode.jpeg",
    
    userName: '',

    userTitle: '/package-result/res/title_1.png',
    userTitleDesc: '你就是江湖上的传说，俗称祖师爷，不出去害人就很好了。记得多多传授反诈骗知识给身边的朋友。',

    userRank: '15%的小众群体',
    userAdj: '智慧的',
    userAdjDesc: '你是一名智者，时刻保持着清醒的头脑，遇事不乱、能沉着应对。',
    userPosition: '保护对象',
    userPositionDesc: '日常寻求票圈各路亲朋好友仗义相助。',
    
  },

  attached() {
    this._loadingRunning();
    this._initUserInfo();
    this._painter();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _loadingRunning() {
      this.setInterval_1 = setInterval(() => {
        this.setData({ loadingNumber: ++ this.data.loadingNumber });
        if (this.data.loadingNumber == 99) {
          clearInterval(this.setInterval_1);
          this.setInterval_2 = setInterval(() => {
            if (this.data.isCanvasReady) {
              this.setData({ loadingNumber: 100 });
              clearInterval(this.setInterval_2);
              setTimeout(() => {
                this.setData({ isPageReady: true });
                this.setData({
                  animation: animation.slideDown()
                });
              }, 200);
            }
          }, 100);
        };
      }, 2 * 10);
    },
    _initUserInfo() {
      debugger;
      getApp().MarkExam();
      const {userName, userScoreInfo, userCharacterInfo} = getApp().globalData;
      this.setData({
        userName: userName,
        userTitle: `/package-result/res/title_${userScoreInfo.titleIndex}.png`,
        userTitleDesc: userScoreInfo.titleDesc,
        userRank: userScoreInfo.ranking,
        userRankValue: userScoreInfo.rankingValue,
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
    onLongPress() {
      const me = this;
      wx.showActionSheet({
        itemList: ['保存到相册', '再测一次'],
        success(res) {
          if (res.tapIndex == 0){
            getApp().globalData.hasSaveResult = true;
            getApp().updateCloudData();
            me._saveImageToPhotosAlbum(me.data.canvasImage).then((res) => {
              wx.showToast({
                title: '体验报告已存到你的相册，快转发至朋友圈吧~',
                mask: true,
                icon: 'none',
              });
            });
          } else if (res.tapIndex == 1) {
            getApp().globalData.hasTry = true;
            getApp().updateCloudData();
            getApp().clearUserData();
            wx.redirectTo({
              url: '/package-exam/pages/exam-index/exam-index?page=1',
            });
          }
        },
      });
    },
    onTapWatchMovie() {
      getApp().globalData.hasWatchedMovie = true;
      getApp().updateCloudData();
      this.triggerEvent('showMovie');
      // wx.showToast({
      //   title: '播放防诈骗视频~',
      //   mask: true,
      //   icon: 'none',
      // });
    },
    _canvasToTempFilePath() {
      return new Promise((resolve,reject) => {
        const screenWidth = getApp().globalData.screenWidth;
        const { width, height, quality } = this.data;    
        const rpx = screenWidth / 750 * quality;
        let canvasWidth = width * rpx;
        let canvasHeight = height * rpx;
        console.log('_canvasToTempFilePath', canvasWidth, canvasHeight);
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: canvasWidth,
          height: canvasHeight,
          destWidth: canvasWidth * 2,
          destHeight: canvasHeight * 2,
          canvasId: 'myCanvas',
          success: res => {
            this._initPage(res);
            resolve(res.tempFilePath);
          },
          fail: err => {
            reject(err);
            console.log('canvasToTempFilePath failed', err);
          }
        }, this);
      });
    },
    _initPage(res) {
      this.setData({canvasImage: res.tempFilePath});
      this.setData({isCanvasReady: true});
    },
    _saveImageToPhotosAlbum(path) {
      return new Promise((resolve,reject) => {
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success: res => {
            console.log('saveImageToPhotosAlbum success')
            resolve(res)
          },
          fail: err => {
            reject(err)
          }
        })
      });
    },
  }
});
