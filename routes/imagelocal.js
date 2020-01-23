const imglocal_controller = require('../controllers/imagelocal');
const app = require('express');
const router = require('express').Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' });

router.post('/uploads',multipartMiddleware,(req,res,next) => {
  
  imglocal_controller.createimg(req,res,next)
});


module.exports = router