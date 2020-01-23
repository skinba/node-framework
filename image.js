const aws = require('aws-sdk');
const uuid = require('uuid');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    region: 'us-west-2',
    accessKeyId: 'AKIAI2GZZYDPFV7WKS7Q',
    secretAccessKey: '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',
  });
  
  const s3 = new aws.S3();

  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
    }
  }
   
  const categoryUpload = multer({
    fileFilter,
    storage: multerS3({
      s3: s3,
      bucket: 'uzavarsanthai',
      acl: 'public-read',
      metadata: function (req, file, cb) {
        console.log(file,2);
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        console.log(file, 7);
        console.log(Date.now().toString());
        cb(null, "/" + file.originalname)
      }
    })
  })

  module.exports = categoryUpload;