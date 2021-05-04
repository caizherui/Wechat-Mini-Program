// pages/index/index.js
Page({
  data: {
    devicePosition:'back',
    authCamera: false,//用户是否运行授权拍照
  },

  bindViewTap:function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
      }
    })
  },

  handleCameraError:function() {
    wx.showToast({
      title:'用户拒绝使用摄像头',
      icon: 'none'
    })
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

  /**
   * 点击绑定的事件
   */
  clikeMe:function(e){
    var nid = e.currentTarget.dataset.nid;
    console.log(nid);

    //跳转(非tabbar的界面)
    wx.navigateTo({
      url: '/pages/redirect/redirect?id='+nid,
    })
  }
})