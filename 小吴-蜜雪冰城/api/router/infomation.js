const express= require('express')
const router=express.Router()
const infomationHandler=require('../router_handel/store')
//查询信息
router.post('/store',infomationHandler.store)
router.post('/sidebar',infomationHandler.sidebar)
router.post('/goodlist',infomationHandler.goodlist)
router.post('/vipinfo',infomationHandler.vip_infp)
module.exports=router