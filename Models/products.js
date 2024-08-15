const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: [String], required: true },
    rating: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },

});

module.exports=mongoose.model("product",productSchema);