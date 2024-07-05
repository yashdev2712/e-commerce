import mongoose from "mongoose";

const userScheme = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, fullname: {
        type: String,
        required: true,
    }, email: {
        type: String,
        required: true,
        unique: true
    }, password: {
        type: String,
        required: true,
        unique: true
    }, address: {
        type: String,
        default: ""
    }, cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
}, { timestamps: true });

const User = mongoose.model("User", userScheme);

export default User;