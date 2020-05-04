require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

const PORT = process.env.PORT;

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


app.use(cors({
    credentials : true,
    origin: ['http://localhost:3000']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));



app.get("/", (req, res) => {
    res.json({msg : "Welcome to orogold server"});

});

app.listen(PORT, () => console.log("server running"));