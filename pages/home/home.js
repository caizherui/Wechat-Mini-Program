// pages/home/home.js
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:"大熊猫",
    path:"/static/1.jpg"
  },

  /*getUserName:function(){
    var that = this;
    console.log('sdf');
    //调用微信接口，获取当前用户信息 <image class='dynamic' src="https://dreamandfuture.oss-cn-beijing.aliyuncs.com/picture/5.gif" mode='aspectFill'></image>
    wx.getUserInfo({
      success: (result) => {
        //调用成功后触发
        console.log(result.userInfo)
        that.setData({
          name: result.userInfo.nickName,
          path: result.userInfo.avatarUrl
        });
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },*/

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
    this.setData({
      name: app.globalData.nickName,
      path: app.globalData.avatarUrl
    })
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