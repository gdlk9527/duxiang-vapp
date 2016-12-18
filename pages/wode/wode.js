// pages/wode/wode.js
var app = getApp()
Page({
  data:{
    userInfo: {},
    buyimg:"../image/buy.png",
    chargeimg:"../image/charge.png",
    ticketimg:"../image/mouthticket.png",
    purseimg:"../image/purse.png",
    collectimg:"../image/collect.png",
    messageimg:"../image/message.png",
    tempoimg:"../image/tempo.png",
    shujiaimg:"../image/shujia.png",
    shukuimg:"../image/shuku.png",
    wodeimg:"../image/my_click.png"

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
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  toshujia:function() {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  toshuku:function() {
    wx.redirectTo({
      url: '../shuku/shuku',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})