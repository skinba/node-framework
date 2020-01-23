const express = require('express');
const multer = require('multer');
const bodyparser = require('body-parser');
const accountdata = require('../routes/accountdata');
const imglocal = require('../routes/imagelocal');
const s3local = require('../routes/images3');
const error = require('../middleware/error');
const cors = require('cors');
const path = require('path');


module.exports = function(app){

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended:false }));
    app.use(cors());
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    app.use('/api/data',accountdata);
    app.use('/api/imglocal',imglocal);
    app.use('/api/imgs3',s3local);
    app.use(error);
}

// module.exports = routing;

