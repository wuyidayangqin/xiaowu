// components/sidebar/index.js
Component({
    properties: {
        list: {
            type: Array,
            value: []
        }
    },
    data: {
        current: 0
    },
    methods: {
        switch (e) {
            // console.log(e);
            const {
                current
            } = e.currentTarget.dataset
            this.setData({
                current
            })
        }
    }
})