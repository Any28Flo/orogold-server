const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USERDB,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    multipleStatements : true
});

mysqlConnection.connect((err) =>{
    if(!err){
        console.log("connected");
    }else{
        console.log("Connection failed");
    }
});

module.exports = mysqlConnection;