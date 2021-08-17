const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Url = require('../models/url');


const db = "mongodb://localhost:27017/url"



mongoose.createConnection(db, err =>{
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb url')      
    }
});

module.exports = router;