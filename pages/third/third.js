// pages/third/third.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    item:{
      username: 1,
    },
    name:"hxf",
    cc:false,
    id:1,
    ids:2,
    condition:100,
    tiaojian:false,
    students:[{
      name:"he",
    },{
      name:"wang"
    }],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    show:"hide",
    count:1
  },
  intervalChange:function(e){
      this.setData({
        interval:e.detail.value
      })
  },
  durationChange:function(e){
      this.setData({
        duration:e.detail.value
      })
  },
  changeAutoplay:function(e){
      this.setData({
        autoplay:!this.data.autoplay
      })
  },
  changeIndicatorDots:function(e){
      this.setData({
        indicatorDots:!this.data.indicatorDots
      })
  },
  click:function(e){
    console.log(e.target.data);
    this.setData({
      cc: !this.data.cc,
      tiaojian:!this.data.tiaojian,
      // count:(count-1)==0?"1":"0",
      show:this.data.tiaojian==true?"hide-status":"show-status"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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