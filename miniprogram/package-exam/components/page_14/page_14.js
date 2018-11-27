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
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapButton(e) {
      const option = +e.currentTarget.dataset.option;
      getApp().globalData.userAnswer[10] = option;
      this.MarkExam();
      this.triggerEvent('switchPage', 1);
    },
    MarkExam() {
      let {userAnswer, userScore, rightAnswers, characterMap, optionsWithCharacter} = getApp().globalData;
      userAnswer.forEach((item, index) => {
        if (item == rightAnswers[index]) {
          console.log('对了')
        } else {
          console.log('错误')
          if (index > 0) {
            userScore -= 10;
          } else {
            userScore -= 1;
          }
        }
        console.log('userScore', userScore);
      });
      console.log('userAnswer', userAnswer);
    },
  }
});
