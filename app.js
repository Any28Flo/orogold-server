require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

const PORT = process.env.PORT;
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