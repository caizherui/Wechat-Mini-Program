// pages/feedback/feedback.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"文本反馈",
        isActive:true
      },
      {
        id:1,
        name:"客服会话",
        isActive:false
      },
    ],
    //被选中的图片
    chooseimgs:[],
    //被选中的图标
    chooseicon:"",
    textVal:"",
    current: 0,
    max: 200,
    tab: 0
  },

  handletabsitemchange(){
    var that=this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          chooseimgs:[...that.data.chooseimgs,res.tempFilePaths]
        })
      }
    })
  },

  handleremoveimg(e){
    const {index}=e.currentTarget.dataset;
    let {chooseimgs}=this.data;
    chooseimgs.splice(index,1);
    this.setData({ 
      chooseimgs
    })
  },

  handletextinput(e){
    var value = e.detail.value
    var length = parseInt(value.length)
    this.setData({
      textVal:e.detail.value,
      current:length
    })
  },

  handleformsubmit(){
    const {textVal}=this.data;
    if(!textVal.trim()){
      wx.showToast({
        title: '输入不合法',
        icon: 'none',
        mask: true
      })
      return;
    }
    this.setData({
      textVal:"",
      chooseimgs:[],
      tab: 1
    })
    /*wx.navigateBack({
      delta: 1,
    })*/
    wx.navigateTo({
      url: '/pages/thank/thank',
    })
  },

  //通过点击图标删除图片
  /*handleimgchange(e){
    const {index}=e.detail;
    let {chooseimgs}=this.data;
    chooseimgs.splice(index,1);
    this.setData({
      chooseimgs
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