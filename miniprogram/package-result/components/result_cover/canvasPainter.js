function preparePaint(ctx, that) {
  if (!that.properties.silent && that.properties.autoSave > 0) {
    wx.showLoading({
      title: '处理中',
      mask: false,
    })
  }

  that.started = true
  let cardInfo = {};
  console.log('***********currCardInfo***************', cardInfo)
  let coverInfo = {}
  let bannerInfo = {}
  let qrCodeFile = ''
  let coverFile = ''
  let bannerFile = ''
  let avatarFile = ''
  _startPaint(ctx, that).then(res => {
    wx.hideLoading()
    // if (that.properties.autoSave > 0) {
    //   that.onSave();
    // }
    // that.triggerEvent('notifyScreenshotReady', that.data.autoSave+1);
    // that.dispathFinishPaintEvent()
    return that._saveImageToPhotosAlbum();
  }).then(res => {
    wx.showToast({
      title: '体验报告已存至你的相册，快转发至朋友圈吧~',
      mask: true,
      icon: 'none',
    });
  });
}


let rpx;
function _startPaint(ctx, that) {
  const { width, height, quality } = that.data;
  const { userName, userTitle,  userTitleDesc, userRank, userAdj, userAdjDesc, userPosition, userPositionDesc} = that.data;

  return new Promise((resolve, reject) => {
    let screenWidth = getApp().globalData.screenWidth;
    rpx = screenWidth / 750 * quality;
    console.log('rpx = ' + rpx);

    let canvasWidth = width * rpx;
    let canvasHeight = height * rpx;

    ctx.beginPath();
    console.log('startPaint -- 1')

    // 背景图
    ctx.drawImage(that.data.background, 0, 0, canvasWidth, canvasHeight);

    // 名字
    fillText(ctx, {
      text: `${userName}的易受骗体质是：`,
      fontsize: 28,
      x: 70,
      y: 170,
      color: '#000',
      bold: true,
    })
    
    // 称号
    ctx.drawImage(userTitle, 40, 100, 600*rpx, 138*rpx);

    // 称号描述
    fillText(ctx, {
      text: userTitleDesc,
      fontsize: 29,
      x: 80,
      y: 410,
      color: '#000',
      bold: true,
    }, 580);
    // }, 370);

    // 在朋友圈中属于
    fillText(ctx, {
      text: `${userName}在朋友圈中属于：`,
      fontsize: 28,
      x: 70,
      y: 630,
      color: '#000',
      bold: true,
    });

    // 排名
    fillText(ctx, {
      text: `你是${userRank}`,
      fontsize: 28,
      x: 95,
      y: 675,
      color: '#FF0000',
    });

    // 形容词
    fillText(ctx, {
      text: userAdj,
      fontsize: 80,
      x: 85,
      y: 805,
      color: '#000',
      bold: true,
    });

    // 人群（保护对象）
    fillText(ctx, {
      text: userPosition,
      fontsize: 80,
      x: 350,
      y: 805,
      color: '#000',
      bold: true,
    });

    // 形容词描述 人群描述
    fillText(ctx, {
      text: userAdjDesc+'|'+userPositionDesc,
      fontsize: 29,
      x: 80,
      y: 900,
      color: '#000',
      bold: true,
    }, 580);

    ctx.draw(false, res => { resolve(res) });
  })
}
/**
 * 填充文字
 */
function fillText(ctx, textObj, width) {
  let { text, fontsize, color, x, y, bold } = textObj;
  ctx.font = `normal${bold ? ' bold':''} ${fontsize * rpx}px sans-serif`;
  console.log('ctx.font', ctx.font);
  ctx.setFontSize(fontsize * rpx);
  ctx.setFillStyle(color)
  // 有宽度代表要换行展示
  console.log('width * rpx', width * rpx);
  console.log('screenWidth', getApp().globalData.screenWidth);
  const newTextArray = [];
  let rowFirstIndex = 0;
  for(let i = 0; i < text.length; i++) {
    if (text[i] == '|') {
      newTextArray.push(text.substring(rowFirstIndex, i));
      rowFirstIndex = i+1;
    } else if (width && ctx.measureText(text.substring(rowFirstIndex, i)).width > width * rpx) {
      newTextArray.push(text.substring(rowFirstIndex, i-1));
      console.log(text.substring(rowFirstIndex, i), ctx.measureText(text.substring(rowFirstIndex, i)).width);
      rowFirstIndex = i-1;
    }
    if (i == text.length - 1) {
      newTextArray.push(text.substring(rowFirstIndex, i + 1));
      console.log(text.substring(rowFirstIndex, i + 1), ctx.measureText(text.substring(rowFirstIndex, i + 1)).width);
    }
  }
  newTextArray.forEach((item, index) => {
    ctx.fillText(item, x * rpx, (y + (fontsize + 10) * index) * rpx);
  });
}
function roundRect(ctx, x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  ctx.beginPath();
  ctx.moveTo(x, y);
  // ctx.arcTo(x + w, y, x + w, y + h, 0);
  ctx.lineTo(x + w, y)
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  // ctx.arcTo(x, y, x + w, y, 0);
  ctx.lineTo(x, y)
  ctx.lineTo(x + w, y)
  ctx.setStrokeStyle('#fff')
  // ctx.fill()
  ctx.stroke()
  ctx.closePath();
}

module.exports.preparePaint = preparePaint