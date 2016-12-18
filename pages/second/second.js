Page({  
    data:{},

    left: function() {
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
    right: function (){
      wx.showToast({
      title: '已经是最后一页了',
      duration: 2000
      })
    }
})