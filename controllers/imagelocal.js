const IMAGELOCAL = require('../models/imagelocal');
const _ = require('lodash');

exports.createimg = async (req=null,res=null,next=null) => {
    console.log(req.files);
    const imageData = {
        imageOriginalName:req.files.image.originalFilename,
        imagePath:req.files.image.path
         };
    let img = new IMAGELOCAL(_.pickBy(imageData));
    const saveImgData = await img.save();
    console.log(saveImgData);
    return res.send(saveImgData);
}
    