const mongoose = require('mongoose');

const Imagelocal = new mongoose.Schema({
    imageOriginalName:String,
    imagePath:String,
})

const ilocal = mongoose.model("imagelocal",Imagelocal);

module.exports = ilocal;