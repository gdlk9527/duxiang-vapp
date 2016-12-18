//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({url: '../logs/logs'})
  },
  toshujia:function() {
    wx.navigateTo({url:'../shujia/shujia'})
  },
  toreading:function() {
    wx.navigateTo({url:'../reading/reading'})
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
    //实例化一个动画
      this.animation1 = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 1000, 
      timingFunction: 'linear',
      // 延迟多长时间开始
      delay: 100,
      transformOrigin: '50% 50% 0',
      success: function(res) {
        console.log(res)
      }
    })
      this.animation2 = wx.createAnimation({
        duration: 1000,
        timingFunction: 'linear', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
        delay: 900,
        transformOrigin: '50% 50% 0',
        success: function(res) {
          console.log(res)
        }
    })
  },
  fadein: function() {
      this.animation1.opacity(1).step(),
      this.animation2.opacity(1).step()
      this.setData({
      //输出动画
      animation1: this.animation1.export(),
      animation2: this.animation2.export()
    })
  },

  onShow:function(){
    // 页面显示

  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
