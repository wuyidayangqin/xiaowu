// components/tabs/tabs.js
Component({
    properties: {
        tabs: {
            type: Array,
            value: []
        }
    },
    data: {
        current: 0,
    },
    methods: {
        onTab(e) {
            console.log(e);
            this.setData({
                current: e.currentTarget.dataset.index
            })
        }
    }
})