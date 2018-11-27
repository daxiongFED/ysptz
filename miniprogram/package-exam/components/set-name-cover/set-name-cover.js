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
    sex: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapSelect(e) {
      const sex = e.currentTarget.dataset.sex;
      this.setData({sex});
    },
    onTapSubmit(e) {
      console.log(e);
      const name = e.detail.value.name;
      const formId = e.detail.formId;
      this.setData({name});
      this._cacheData();
      this.onSetName();
    },
    _cacheData() {
      wx.setStorageSync('userSetInfo', {
        name: this.data.name,
        sex: this.data.sex
      });
      const userSetInfo = wx.getStorageSync('userSetInfo');
      getApp().globalData.name = this.data.name;
      getApp().globalData.sex = this.data.sex;
      console.log('getApp().globalData.name', getApp().globalData);
    },
    onSetName() {
      this.triggerEvent('onSetName');
    },
  }
});
