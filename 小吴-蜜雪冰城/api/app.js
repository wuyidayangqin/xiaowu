const express=require('express')
const cors=require('cors')
const app=express()
const infomation=require('./router/infomation')

app.use('/api',infomation)


// var info=[
//     {
//         name:'蜜雪冰城(华夏理工校内店)',
//         address:'关山大道589号',
//         time:'09:00-22:00',
//         distance:'479m'
//     }

// ]

app.use(cors())
app.listen(8080,()=>{
    console.log('api server running at http://127.0.0.1:8080');
})