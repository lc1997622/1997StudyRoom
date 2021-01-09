// miniprogram/pages/MyInfo/MyInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  Login:function(e){
    wx.login({
      success: (result) => {
       console.log(result.code)
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data:{
            appid:'wx7943ce020c0045a0',
            secret:'0b3a05d236200c2aef660ca8837808d7',
            js_code:result.code,
            grant_type: 'authorization_code'
          },
          success (res){
            console.log(res.data)
          }
        })
      },
      fail: (res) => {
        console.log("code",res.code)
      },
    })
  },
  getSessionKey:function(code,appid,appsecret){
    var opt = {
      method: 'GET',
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      params: {
          appid: appid,
          secret: appsecret,
          js_code: code,
          grant_type: 'authorization_code'
      }
    };
    return http(opt).then(function (response) {
       var data = response.data;
        if (!data.openid || !data.session_key || data.errcode) {
          return {
              result: -2,
              errmsg: data.errmsg || '返回数据字段不完整'
          }
        } else {
           return data
       }
    });
  }
})