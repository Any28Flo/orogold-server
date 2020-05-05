require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const mysqlConnection = require("./config/db.config");
const PORT = process.env.PORT;



app.use(cors({
    credentials : true,
    origin: ['http://localhost:3000']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));



app.use("/appointment", require("./routes/appointment-routes"));

app.listen(PORT, () => console.log("server running"));