//app.js
App({
  onLaunch() {
    this.globalData = {
      name: '', // 用户输入的名字
      sex: '', // 用户选择的性别
      questionCount: 11, // 题目总数
      rightAnswers: [1, 1, 2, 0, 3, 2, 0, 2, 0, 0, 4], // 正确答案数组 第一项为0，第二项为1，如此类推
      characterMap: ['隐藏的0', '慎密的1', '天真的2', '理性的3', '智慧的4', '慧眼的5', '戏多的6'], // 性格字典
      optionsWithCharacter: [ // 选项对应的性格
        [0, 1],
        [2, 1],
        [2, 3, 1],
        [2, 4, 1, 3],
        [4, 3, 1, 3],
        [2, 2, 5, 5, 6],
        [4, 3, 6, 1, 5],
        [2, 3, 5, 6],
        [1, 6, 3],
        [4, 1, 2, 1],
        [5, 2, 6, 3, 4],
      ],
      scoreWithTitle: {
        100: '一枝独秀',
        101: '祖师爷级',
        91:  '望尘莫及',
        81:  '百骗不侵',
        71:  '骨骼惊奇',
        61:  '合格品种',
        51:  '勉强及格',
        41:  '弱小的我',
        31:  '瑟瑟发抖',
        21:  '望勿弃疗',
        11:  '身残志坚',
        1:   '身残志坚',
      },
      totalScore: 101, // 总分

      userAnswer: [], // 用户答案
      userScore: 101, // 用户得分
    };
    const me = this;
    const name = 'iPhone X';
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    wx.getSystemInfo({
      success(res) {
        console.log('app.js',res)
        if (res.model.indexOf(name) > -1) {
          me.globalData.isIphonex = true
        }
        me.globalData["screenRatio"] = res.windowWidth / 750;
        me.globalData["windowHeight"] = res.windowHeight
        me.globalData["windowWidth"] = res.windowWidth
        me.globalData["platform"] = res.platform
        me.globalData["screenWidth"] = res.screenWidth
        me.globalData["screenHeight"] = res.screenHeight
      },
    })
  },
  MarkExam() {
    const userCharacterList = [];
    let {userAnswer, userScore, rightAnswers, characterMap, optionsWithCharacter, scoreWithTitle} = this.globalData;
    // userAnswer = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    userAnswer.forEach((item, index) => {
      if (item == rightAnswers[index]) {
      } else {
        if (index > 0) {
          userScore -= 10;
        } else {
          userScore -= 1;
        }
      }
      userCharacterList.push(optionsWithCharacter[index][item]);
    });
    const userCharacter = this._getCharacterByList(userCharacterList);
    console.log('userScore', userScore);
    console.log('userAnswer', userAnswer);
    console.log('scoreWithTitle', scoreWithTitle[userScore]);
    console.log('userCharacterList', userCharacterList);
    console.log('userCharacter', userCharacter);
  },
  _getCharacterByList(userCharacterList) {
    let _returnCharacterIndex;
    const tempCounter = [0, 0, 0, 0, 0, 0, 0];
    userCharacterList.forEach((item, index) => {
      tempCounter[item] ++;
    });
    console.log('tempCounter', tempCounter);
    let targetIndex = [0];
    let targetValue = 0;
    tempCounter.forEach((item, index) => {
      if (index > 0) {
        if (item > tempCounter[targetIndex[0]]) {
          targetIndex = [];
          targetIndex[0] = index;
          targetValue = item;
        } else if (item == tempCounter[targetIndex[0]]) {
          targetIndex.push(index);
        }
      }
    });
    _returnCharacterIndex = targetIndex[Math.floor(Math.random() * targetIndex.length)];
    return this.globalData.characterMap[_returnCharacterIndex];
  },
})
