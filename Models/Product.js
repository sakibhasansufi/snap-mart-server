const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String , required: true},
    image: { type: String , required: true},
    description: { type: String,  required: true},
    price: { type: Number , required: true},
    category: { type: [String], required: true },
    ratings: { type: Number},
    creation_date: { type: String},
    creation_time: { type: String },

});

module.exports=mongoose.model("product",productSchema);