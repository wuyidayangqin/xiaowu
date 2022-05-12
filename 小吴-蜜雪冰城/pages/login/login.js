// pages/login/login.js\
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {},
    //获取用户信息
    getUserInfo(e) {
        wx.getUserProfile({
            desc: '用于注册个人信息',
            success: (res) => {
                // console.log(res);
                if (res.errMsg == 'getUserProfile:ok') {
                    app.globalData.isLogin = true
                    app.globalData.userInfo = res.userInfo
                }
                //    wx.setStorageSync('key', res.userInfo)
                wx.redirectTo({
                    url: '/pages/me/me',
                })
            }
        })
    },
    cancle(e) {
        wx.navigateBack({
            delta: 0,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
})