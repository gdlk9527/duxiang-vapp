// pages/shujia/shujia.js
Page({
  data:{
    shujiaimg:"../image/shujia_click.png",
    shukuimg:"../image/shuku.png",
    wodeimg:"../image/my.png",
    xiyoujiimg:"../image/xiyouji.jpg"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  toshuku:function() {
    wx.navigateTo({
      url: '../shuku/shuku'
    })
  },
  towode:function() {
    wx.navigateTo({url: '../wode/wode'})
  },
  toreading:function() {
    wx.navigateTo({url:'../reading/reading'})
  }
})