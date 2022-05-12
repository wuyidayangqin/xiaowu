const app = getApp()

// pages/me/me.js
Page({


    /**
     * 页面的初始数据
     */
    data: {
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000,
        circular: true,
        swiperList: [
            "/assets/images/swiper-example1.png",
            "/assets/images/swiper-example2.png",
            "/assets/images/swiper-example3.png"
        ],
        isLogin: null,
        userInfo: [],
        nearbyStore: true,
        vipinfo2:[],
        percent: 60,
        currency: 55
    },
    gotoLogin() {
        wx.reLaunch({
            url: '/pages/login/login',
        })
    },

    onLoad: function (options) {
        this.setData({
            isLogin: app.globalData.isLogin,
            userInfo: app.globalData.userInfo,
            vipinfo2:app.globalData.vipinfo
        })
    },
})