// const express = require('express');
// const router = require('express').Router();
// const multer = require('multer');

// const Storage = multer.diskStorage({
//     destination: function(req, file, callback) {
//         callback(null,'./uploads' );
//     },
//     filename: function(req, file, callback) {
//         callback(null, file.fieldname + '-' + Date.now() +  "_" + file.originalname);
//     }
// });

// const uploads = multer({storage: Storage}).array("image", 3);

// router.post("/", function(req, res) {
//     upload(req, res, function(err) {
//         if (err) {
//             return res.send("Something went wrong!");
//         }
//         return res.send("File uploaded sucessfully!.");
//     });
// });






// module.exports = router;