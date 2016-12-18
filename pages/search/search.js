//search.js
Page({
  data:{
    bookname:'',
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
  getinput:function(e) {
    this.bookname=e.detail.value;
  },
  listenerfind:function() {
    Console.log('您要查询的书名为为： ',this.data.bookname);
  },
  tosearch:function() {
    wx.redirectTo({
      url: '../search/search',
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
  sendmessage:function() {
    this.setData({
      bookname:this.bookname
    })
  }
})