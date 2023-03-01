import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: { String },
    detailUrl: {
        type: String
    },
    title: {
        type: Object
    },
    price: {
        type: Object
    },
    quantity: {
        type: Number
    },
    description: {
        type: String
    },
    discount: {
        type: String
    },
    tagline: {
        type: String
    }
}, { timestamps: true });


const Product = mongoose.model("product", productSchema);

export default Product;




