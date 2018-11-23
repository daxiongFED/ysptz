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
      this.onSetName();
    },
    onSetName() {
      this.triggerEvent('onSetName');
    },
  }
});
