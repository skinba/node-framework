const mongoose = require('mongoose');

const ImageS3 = new mongoose.Schema({
    imageOriginalName:String,
    imageS3Url:String,
})

const is3 = mongoose.model("images3",ImageS3);

module.exports = is3;