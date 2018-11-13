// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page=this;
    wx.downloadFile({
      url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541917660949&di=7a35037237b9634c7d4eff15ee3fb688&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160622%2Feb21891a659440d898cc2b150ab33509_th.png",
      type:"image",
      success:function(res){
        console.log(res);
        var tempPath=res.tempFilePath;
        page.setData({imgurl:tempPath});
      }
    })
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