// pages/reading/reading.js
Page({
  data:{ 
    bookname:''
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
  OnReady:function() {
    
  },
  left: function() {
    wx.showToast({
      title: '这是第一页',
      icon: 'success',
      duration: 2000
    })
  },
  right: function() {
    wx.navigateTo({
      url: '../second/second'
    })
},

getinput:function(e) {
    this.bookname=e.detail.value;
  },

sendmessage:function() {
    this.setData({
      bookname:this.bookname
    })
  }

})
