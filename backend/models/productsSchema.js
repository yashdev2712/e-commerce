import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, description: {
        type: String,
        required: true
    }, price: {
        type: Number,
        required: true
    }, discount: {
        type: Number,
        min:0,
        max:100,
        default:0
    }, rating: {
        type: Number,
        min:0,
        max:5,
        default: 0
    }, category: {
        type: String,
        default:""
    }, image: {
        type: String,
        default: ""
    }
},{timestamps:true});

const Product = mongoose.model("Product", productSchema);

export default Product