// components/swiper-com/swiper.js
Component({
    properties: {
        list: {
            type: Array,
            value: []
        },
        style: {
            type: String,
            value: ''
        },
        round: {
            type: Boolean,
            value: false
        }
    },
    data: {
        current: 0
    },
    methods: {

    }
})