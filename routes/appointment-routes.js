const express = require('express');
const appointmentRoutes = express.Router();
const { check, validationResult } = require('express-validator');

const mysqlConnection = require("./../config/db.config");

appointmentRoutes.post("/create",[
    check('email').isEmail(),
    check('phone').isLength({ min: 7})


],  (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const{username,email,phone} = req.body;
    mysqlConnection.query("INSERT INTO appointments(name,email,phone) VALUES (?,?,?)",[username,email,phone], function(error,results,fields){
        if(error){
            res.status(400).json({msg : `${JSON.stringify(errors)}`});
            return;

        }
        res.status(200).json({msg: "Sucess"});

    })
});
module.exports = appointmentRoutes;