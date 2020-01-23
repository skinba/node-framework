const IMAGES3 = require('../models/images3');
const _ = require('lodash');

// const categoryUpload = require('../image');
// const categorySingleUpload = categoryUpload.single('image');

//  exports.createimg = function(req, res) {

//     categorySingleUpload(req, res, function(err){
//      if (err) {
//        return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
//      }
//      return res.json(req.file.location);
//     })
//   

exports.createimg = async (req,res,next) => {
    console.log(req.file);
    const location = {
        imageOriginalName:req.file.originalname,
        imageS3Url : req.file.location
        };
    let s3img = new IMAGES3(_.pickBy(location));
    const saveImg = await s3img.save();
    console.log(saveImg);
    return res.send(saveImg);
    
}

// exports.createimg = function(req,res){
//     console.log(req.file);
//     categorySingleUpload(req,res,function(){
//     console.log(req.file.location);
//     return res.json(req.file.location);
// })
// }