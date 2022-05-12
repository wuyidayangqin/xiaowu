const key = 'FB3BZ-EZTL4-FLKUR-D2IJZ-7XO36-EGF7J'; //使用在腾讯位置服务申请的key
const referer = '路线规划'; //调用插件的app的名称
//武汉华夏理工学院的经纬度
const location = JSON.stringify({
  latitude: 30.467068,
  longitude: 114.411298
});
const category = '生活服务,娱乐休闲';
Page({
    data: {
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.switchTab({
          url: '/pages/index/index',
        })
       
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function (e) {
        wx.navigateTo({
            url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
          });
       
    },
})