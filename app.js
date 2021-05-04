App({
  /*
    当小程序初始化完成时，会触发onLaunch"sitemapLocation": "sitemap.json"
  */ 
  /*这里全部是公共的数据*/
  globalData:{
    nickName: null,
    avatarUrl: null
  },
  onLaunch: function(){
    
    wx.login({
      success: res => {

      }
    })
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success: (res) => {
              this.globalData.nickName = res.userInfo.nickName,
              this.globalData.avatarUrl = res.userInfo.avatarUrl
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  }
})