const express = require('express');
const appointmentRoutes = express.Router();

const mysqlConnection = require("./../config/db.config");

appointmentRoutes.get("/list-appointment", (req, res) =>{
    mysqlConnection.query("SELECT * from appointment", (err, rows, fields) =>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
});
module.exports = appointmentRoutes;