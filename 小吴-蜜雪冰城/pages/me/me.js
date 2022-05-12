const app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        vipinfo1: [],
        userInfo: [],
        isLogin: null
    },
    login() {
        wx.reLaunch({
            url: '/pages/login/login',
        })
    },

    vipInfo() {
        wx.request({
            url: 'http://127.0.0.1:8080/api/vipinfo',
            method: 'POST',
            success: (res) => {
                console.log(res);
                app.globalData.vipinfo=res.data;
                this.setData({
                    // vipinfo: res.data
                   
                })
            }
        })
    },



    onLoad(options) {
        this.setData({
                userInfo: getApp().globalData.userInfo,
                isLogin: getApp().globalData.isLogin,
                vipinfo1:getApp().globalData.vipinfo
            }),
            this.vipInfo()
    },
})