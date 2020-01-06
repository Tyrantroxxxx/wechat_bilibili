Page({
  data:{
    // 被点击的首页导航的菜单索引
    currentIndexNav:0,
  //  首页导航数据
  navList:[],
  // 轮播图数据
  swiperList:[],
  // 视频列表表数据
  videosList:[]
  },
  // 获取首页导航数据
  getNavList(){
    let that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        if(res.data.code===0){
         that.setData({
          navList:res.data.data.navList   
         })   
        }     
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  // 获取轮播图数据
  getSwiperList(){
    var that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
       if(res.data.code===0){
         that.setData({
           swiperList:res.data.data.swiperList
         })      
       }
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  // 获取视频列表数据
  getVideosList(){
    let that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
    
        // success
        if(res.data.code===0){
          that.setData({
            videosList:res.data.data.videosList
          })
        }             
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  // 点击首页导航按钮
  activeNav(e){
   this.setData({
     currentIndexNav:e.target.dataset.index
   })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    // 获取首页导航数据
    this.getNavList()
    // 获取轮播图数据
    this.getSwiperList()
    // 调用获取视频列表函数
    this.getVideosList()
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
   
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
   
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
   
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
   
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})