const IMAGES3 = require('../models/images3');
const _ = require('lodash');


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
