const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    oldPrice: { type: Number },   // Fixed naming to match frontend
    image: { type: String }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
