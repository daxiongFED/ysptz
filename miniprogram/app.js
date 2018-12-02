//app.js
App({
  onLaunch() {
    this.globalData = {
      questionCount: 11, // 题目总数
      rightAnswers: [1, 1, 2, 3, 3, 2, 0, 2, 0, 0, 4], // 正确答案数组 第一项为0，第二项为1，如此类推
      characterMap: {
        0: {
          adj: '隐藏的',
          adjDesc: '',
        },
        1: {
          adj: '慎密的',
          adjDesc: '你心思缜密，冷静果断，喜欢伺机而动，是个有大局观念的人。',
        },
        2: {
          adj: '天真的',
          adjDesc: '你天真无邪，单纯善良，信丰世间美好，但偶尔它是一把双刃剑。',
        },
        3: {
          adj: '理性的',
          adjDesc: '你逻辑严谨，善于独立思考，是非对错清晰能辩。',
        },
        4: {
          adj: '智慧的',
          adjDesc: '你是一名智者，时刻保持着清醒的头脑，遇事不乱、能沉着应对。',
        },
        5: {
          adj: '慧眼的',
          adjDesc: '你目光犀利，心如明镜，再小的细节也逃不过你的眼睛。',
        },
        6: {
          adj: '戏多的',
          adjDesc: '你内心细腻、感性且想象力丰富。充满戏剧性的人生剧本由你编写。',
        },
    }, // 性格字典
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
      scoreMap: {
        100: {
          titleIndex: 2,
          title: '一枝独秀',
          titleDesc: '你连电话都懒得接听，往好的方面讲，骗子也确实不好骗一个不听他电话的人。',
          position: '佛系人群',
          positionDesc: '我也懒得和你多说了，就这样吧。',
          ranking: '1%的罕见人物'
        },
        101: {
          titleIndex: 1,
          title: '祖师爷级',
          titleDesc: '你就是江湖上的传说，俗称祖师爷，不出去害人就很好了。记得多多传授反诈骗知识给身边的朋友。',
          position: '殿堂人物',
          positionDesc: '什么妖魔鬼怪的骗局都能被你一一封杀。',
          ranking: '3%的罕见人物'
        },
        91:  {
          titleIndex: 3,
          title: '望尘莫及',
          titleDesc: '拥有超强防骗意识、身怀绝技、处变不惊的反诈老司机。',
          position: '膜拜对象',
          positionDesc: '被骗绝缘体，应当被膜拜。',
          ranking: '5%的稀有群体'
        },
        81:  {
          titleIndex: 4,
          title: '百骗不侵',
          titleDesc: '你天生拥有火眼金睛，总能一眼识破骗局，至今维持被骗O记录。',
          position: '反诈大佬',
          positionDesc: '骗子见你绕道走，绝无返场。',
          ranking: '15%的小众群体'
        },
        71:  {
          titleIndex: 5,
          title: '骨骼惊奇',
          titleDesc: '你具备一定的反诈骗知识和防范能力，从不相信天上掉馅饼，骗子对你总是无从下手。',
          position: '反诈少侠',
          positionDesc: '能从骗子堆中脱围而出的朋友，都很硬核。',
          ranking: '25%的大众群体'
        },
        61:  {
          titleIndex: 6,
          title: '合格品种',
          titleDesc: '你的求生欲很强，遇到险情总能及时止损，但行骗新套路不断，要及时更新防骗知识库存哟。',
          position: '反诈先锋',
          positionDesc: '再接再厉，学习新知识，解锁新技能。',
          ranking: '30%的大众群体'
        },
        51:  {
          titleIndex: 7,
          title: '勉强及格',
          titleDesc: '你的思路清晰，但遇到腹黑行骗高手偶尔也会当机。',
          position: '反诈新手',
          positionDesc: '老铁，打怪升级路上还得时刻保持警惕。',
          ranking: '30%的大众群体'
        },
        41:  {
          titleIndex: 8,
          title: '弱小的我',
          titleDesc: '你是骗子们最喜欢PICK的反射弧超长的呆萌宝宝，快去恶补反诈骗知识吧！',
          position: '保护对象',
          positionDesc: '日常寻求票圈各路亲朋好友仗义相助。',
          ranking: '15%的小众群体'
        },
        31:  {
          titleIndex: 9,
          title: '瑟瑟发抖',
          titleDesc: '你对骗子深恶痛绝，但对此又力不从心，日常被骗只能半夜嘤嘤嘤，哭泣到天明。',
          position: '待割韭菜',
          positionDesc: '韭菜长了一茬又一茬，小心被收割…',
          ranking: '8%的稀有群体'
        },
        21:  {
          titleIndex: 10,
          title: '望勿弃疗',
          titleDesc: '吃一堑长一智，纵使日常被骗，千疮百孔也要勇往直前，提高防范鸭~',
          position: '待割韭菜',
          positionDesc: '韭菜长了一茬又一茬，小心被收割…',
          ranking: '3%的罕见人物'
        },
        11:  {
          titleIndex: 11,
          title: '身残志坚',
          titleDesc: '这位兄dei，还记得那些年上过的天台吗？悬梁苦读反诈知识才是渡劫之道啊！',
          position: '待割韭菜',
          positionDesc: '韭菜长了一茬又一茬，小心被收割…',
          ranking: '1%的罕见人物'
        },
        1:   {
          titleIndex: 11,
          title: '身残志坚',
          titleDesc: '这位兄dei，还记得那些年上过的天台吗？悬梁苦读反诈知识才是渡劫之道啊！',
          position: '待割韭菜',
          positionDesc: '韭菜长了一茬又一茬，小心被收割…',
          ranking: '1%的罕见人物'
        },
      },
      totalScore: 101, // 总分

      userName: '无名哥', // 用户输入的名字
      userSex: '', // 用户选择的性别
      userAnswer: [], // 用户答案
      userScore: 101, // 用户得分
      userScoreInfo: {}, // 用户得分对应的信息
      userCharacterInfo: {}, // 用户得分对应的信息
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
  clearUserData() {
    this.globalData.userName = '无名哥';
    this.globalData.userSex = '';
    this.globalData.userAnswer = [];
    this.globalData.userScore = 101;
    this.globalData.userScoreInfo = {};
    this.globalData.userCharacterInfo = {};
  },
  MarkExam() {
    const userCharacterList = [];
    let {userAnswer, userScore, rightAnswers, characterMap, optionsWithCharacter, scoreMap} = this.globalData;
    userAnswer = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
    console.log('userScore', scoreMap[userScore]);
    console.log('userCharacterList', userCharacterList);
    console.log('userCharacter', userCharacter);
    this.globalData['userScoreInfo'] = scoreMap[userScore];
    this.globalData['userCharacterInfo'] = userCharacter;

    // mock
    // this.globalData['userScoreInfo'] = scoreMap[11];
    // this.globalData['userCharacterInfo'] = this.globalData.characterMap[6];
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
