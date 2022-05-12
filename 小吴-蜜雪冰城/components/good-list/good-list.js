// components/good-list/good-list.js
Component({
    properties: {
        goodlist: {
            type: Array,
            value: []
        },
        gooditem: {
            type: Array,
            value: []
        }
    },
    data: {

    },
    methods: {

    },
    observers: {
        'goodlist': function (val) {
            // console.log(val)
        }
    }

})