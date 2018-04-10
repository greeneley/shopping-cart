var mysql = require('mysql');
var user = mysql.Schema({
        email : String,
        password : String
})
module.exports = mysql.model('User', user)