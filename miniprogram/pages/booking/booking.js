// miniprogram/pages/booking/booking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // themeColor: '#ffd00a',
    isShow: true,
    beginTime: '10:30',
    endTime: '16:00',
    am_start: '10:00',
    am_end: '12:00',
    pm_start: '14:00',
    pm_end: '16:00',

    timeGap: 120,
    themeColor: '#ffd00a',
    showOverdue: true,      // 默认显示过期时刻，false则隐藏已过期时刻
    calendarType: 'yytime'
  },

  _yybindchange: function (e) {
    var data = e.detail
    console.log('date', data)
  },

  _yybindhide: function () {
    console.log('hide')
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