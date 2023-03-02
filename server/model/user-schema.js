import mongoose, { Schema, mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 25
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 25
    },
    username: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
        trim: true,
        min: 3,
        max: 25
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true, 
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 6,
        max: 25
    },
    phone: {
        type: Number,
        required: true 
    },
})



const user  = mongoose.model('user',userSchema);

export default user;

