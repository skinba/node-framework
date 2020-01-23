const imgs3_controller = require('../controllers/images3');
const app = require('express');
const router = require('express').Router();
const categoryUpload = require('../image');
const categorySingleUpload = categoryUpload.single('image');

router.post('/uploads',categorySingleUpload,(req,res,next) => {
    imgs3_controller.createimg(req,res,next)
})


 module.exports = router