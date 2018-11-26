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
    background_1: "/images/background_1.png",
    msg_header: "/package-exam/res/msg_header.png",
    msg_footer: "/package-exam/res/msg_footer.png",
    msg_body_1: "/package-exam/res/msg_body_1.png",
    msg_body_2: "/package-exam/res/msg_body_2.png",

    showMsgCover: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapPage() {
      this.setData({showMsgCover: true});
    },
    onTapButton() {
      this.triggerEvent('switchPage', 7);
    },
  }
});
