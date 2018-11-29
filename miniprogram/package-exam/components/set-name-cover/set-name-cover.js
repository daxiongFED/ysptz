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
    name: null,
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
      if (this.validate()) {
        this._cacheData();
        this.onSetName();
      }
    },
    validate() {
      const name_length = this.data.name ? this.data.name.trim().length : 0;
      if (name_length == 0) {
        wx.showToast({
          title: '请输入您的名字',
          mask: true,
          icon: 'none',
        });
        return false;
      } else if (name_length > 5) {
        wx.showToast({
          title: '名字请不要超过5位',
          mask: true,
          icon: 'none',
        });
        return false;
      } else if (!this.data.sex) {
        wx.showToast({
          title: '请选择你的性别',
          mask: true,
          icon: 'none',
        });
        return false;
      }
      return true;
    },
    _cacheData() {
      wx.setStorageSync('userSetInfo', {
        name: this.data.name,
        sex: this.data.sex
      });
      const userSetInfo = wx.getStorageSync('userSetInfo');
      getApp().globalData.userName = this.data.name;
      getApp().globalData.userSex = this.data.sex;
      console.log('getApp().globalData', getApp().globalData);
      invokeComponent("package-exam/components/page_5/page_5", "_setUserName");
      invokeComponent("package-exam/components/page_7/page_7", "_setUserName");
      invokeComponent("package-exam/components/page_11/page_11", "_setUserName");
      invokeComponent("package-exam/components/msg-cover_1/msg-cover_1", "_setUserName");
      invokeComponent("package-exam/components/msg-cover_2/msg-cover_2", "_setUserName");
    },
    onSetName() {
      this.triggerEvent('onSetName');
    },
  }
});
