// pages/userInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
        imageUrl: '',
        userName: '未登录'
    },
    logInText: "登录",
    btnType: "primary"
  },
  logIn: function () {
      if(this.data.logInText === '登录') {
          wx.login({
              success: () => {
                  wx.getUserInfo({
                      success: (res) => {
                          let curUserInfo = {
                              imageUrl: res.userInfo.avatarUrl,
                              userName: res.userInfo.nickName
                          }
                          this.setData({
                            userInfo: curUserInfo,
                            logInText: '退出登录',
                            btnType: 'warn'
                          })
                          wx.setStorage({
                              key: 'userInfo',
                              data: this.data.userInfo
                          })
                      }
                  })
              }
          })
          
      }else{
          wx.removeStorage({
              key: 'userInfo',
              success: (res) => {
                  this.setData({
                      userInfo: {
                          imageUrl: '',
                          userName: '未登录'
                      },
                      logInText: "登录",
                      btnType: "primary"
                  })
              },
          })
      }
  },
  myWallet: function() {
      wx.navigateTo({
          url: '../wallet/index',
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
        key: 'userInfo',
        success: (res) => {
            this.setData({
                userInfo: {
                    imageUrl: res.data.imageUrl,
                    userName: res.data.userName
                },
                logInText: '退出登录',
                btnType: 'warn'
            })
        },
    })
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