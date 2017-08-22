// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemsValues: [
        {
            value: "思锁私用",
            color: "#b9dd08",
            checked: false
        },
        {
            value: "车牌缺损",
            color: "#b9dd08",
            checked: false
        },
        {
            value: "轮胎坏了",
            color: "#b9dd08",
            checked: false
        },
        {
            value: "车锁坏了",
            color: "#b9dd08",
            checked: false
        },
        {
            value: "违规乱停",
            color: "#b9dd08",
            checked: false
        },
        {
            value: "密码不对",
            color: "#b9dd08",
            checked: false
        },
        {
            value: "刹车坏了",
            color: "#b9dd08",
            checked: false
        },
        {
            value: "链子掉了",
            color: "#b9dd08",
            checked: false
        }
    ],
    picUrl: [],
    bickInfo: {
        number: 0,
        desc: ''
    },
    checkboxValues: [],
    actionText: "拍照/图库",
    btnBg: ""
  },
  changeCheckbox: function (e) {
    let value = e.detail.value;
    this.setData({
        checkboxValues: value
    })
    if(value.length === 0) {
        this.setData({
            btnBg: ""
        })
    }else{
        this.setData({
            btnBg: "#b9dd08"
        })
    }
  },
  addPhoto: function () {
      wx.chooseImage({
          success: (res) => {
              let curUrl = this.data.picUrl;
              let tfp = res.tempFilePaths[0];
              curUrl.push(tfp);
              this.setData({
                  picUrl: curUrl
              })
          },
      })
  },
  cancelPhoto: function(e) {
      
      this.data.picUrl.splice(e.target.dataset.index, 1);
      this.setData({
          picUrl: this.data.picUrl
      })
  },
  carNumber: function (e) {
    let curBickInfo = {
        number: e.detail.value,
        desc: this.data.bickInfo.desc
    }
    this.setData({
        bickInfo: curBickInfo
    })
  },
  extra: function (e) {
    let curBickInfo = {
        number: this.data.bickInfo.number,
        desc: e.detail.value
    }
    this.setData({
        bickInfo: curBickInfo
    })
  },
  submit: function () {
      if(this.data.picUrl.length > 0 && this.data.checkboxValues.length > 0) {
        wx.request({
            url: 'https://www.easy-mock.com/mock/592c27c991470c0ac1fea9f9/do/success',
            success: (res) => {
                wx.showToast({
                    title: '提交成功',
                    icon: 'success',
                    duration: 2000
                })
            }
        })       
      }else{
          wx.showModal({
              title: '请填写信息',
              content: '将信息填写完整',
              success: (res) => {
                  if(res.cancel) {
                      wx.redirectTo({
                          url: '../index/index',
                      })
                  }else{

                  }
              }
          })
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})