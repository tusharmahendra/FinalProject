var con = require('../db');

function editData(id){
    var sql = "UPDATE questions set question =?  WHERE questionId = ?";

    con.query(questionQuery, (err, result)=>{
        if(err) throw err;
    })
}

module.exports = {editData}