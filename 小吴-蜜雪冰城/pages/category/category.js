// pages/category/category.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        longitude: 114.411298,
        latitude: 30.467068,
        collapse: false,
        list: [],
    },
    switch () {
        wx.redirectTo({
            url: '/pages/menu/menu',
        })
    },
    chooseLocation() {
        const key = 'FB3BZ-EZTL4-FLKUR-D2IJZ-7XO36-EGF7J';
        const referer = '路线规划'; //调用插件的app的名称
        //武汉华夏理工学院的经纬度
        const location = JSON.stringify({
            latitude: 30.467068,
            longitude: 114.411298
        });
        wx.navigateTo({
            url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location
        });
    },
    colsapse() {
        this.setData({
            collapse: !this.data.collapse
        })
    },

    onLoad(options) {
        wx.request({
            url: 'http://127.0.0.1:8080/api/store',
            data: {},
            method: 'POST',
            success: (res) => {
                // console.log(res.data);
                this.setData({
                    list: res.data
                })
            }
        })
    },
})