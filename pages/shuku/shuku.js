// pages/shuku/shuku.js
Page({
  data:{
    shujiaimg:"../image/shujia.png",
    shukuimg:"../image/shuku_click.png",
    wodeimg:"../image/my.png",
    xiyoujiimg:"../image/xiyouji.jpg",
    gongxiangimg:"../image/gongxiang.jpg",
    dengdaoimg:"../image/dengdao.jpg",
    chujianimg:"../image/chujian.jpg",
    hualengimg:"../image/hualeng.jpg"
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
  towode:function() {
    wx.redirectTo({
      url: '../wode/wode',
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
  tosearch:function() {
    wx.navigateTo({url:'../search/search'})
  }
})