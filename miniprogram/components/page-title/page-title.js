// companents/title-bar/title-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgColor: {
      type: String,
      value: "",
      observer: function (newVal, oldVal) {
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: newVal,
        })
      }
    },
    title:{
      type:String,
      value:"",
      observer:function(newVal,oldVal){
        wx.setNavigationBarTitle({
          title: newVal,
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back:function(){
      wx.navigateBack()
    }
  }
})
