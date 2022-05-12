// pages/menu/menu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        gooditem: [],
        goodlist: [],
        sidebarList: [],
        swiperimg: ["../../assets/images/swiper-example1.png",
            "../../assets/images/swiper-example2.png",
            "../../assets/images/swiper-example3.png"
        ],
        distance: 88,
        currentStore: "蜜雪冰城(华夏理工校内店)"
    },
    switch () {
        wx.redirectTo({
            url: '/pages/category/category',
        })
    },
    goodlist() {
        wx.request({
            url: 'http://127.0.0.1:8080/api/goodlist',
            method: 'POST',
            data: {},
            success: (res) => {
                this.setData({
                    gooditem: res.data
                })

                // console.log(res);
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.request({
            url: 'http://127.0.0.1:8080/api/sidebar',
            method: 'POST',
            data: {},
            success: (res) => {
                // console.log(res);
                this.setData({
                    sidebarList: res.data,
                    goodlist: res.data
                })
            }
        })
        this.goodlist()
    },

})