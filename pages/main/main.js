var app = getApp()
Page({
    data: {
        flag:false,
        userInfo:{}
    },
    userLogin: function(){
        var that = this;
        wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.data.flag = true;
              that.data.userInfo = res.userInfo
              console.info(that.data.userInfo);
              console.info(that.data.flag);
            }
          })
        }
      })
    }
})
