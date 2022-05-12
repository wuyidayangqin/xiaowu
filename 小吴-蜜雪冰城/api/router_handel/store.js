const db = require('../db/index')


exports.store = (req,res) => {
    // console.log(req);
    // res.send('查看门店列表的信息了');

    const sqlstr = 'select * from category ';
    db.query(sqlstr, (err, result) => {
        res.send(result)
    });
}
exports.sidebar = (req,res) => {
    const sqlstr = 'select * from  menu_infomation ';
    db.query(sqlstr, (err, result) => {
        res.send(result)
    });
}
exports.goodlist = (req,res) => {
    const sqlstr = 'select * from  menu_item';
    db.query(sqlstr, (err, result) => {
        res.send(result)
    });
}
exports.vip_infp = (req,res) => {
    const sqlstr = 'select * from  vip_info';
    db.query(sqlstr, (err, result) => {
        res.send(result)
    });
}