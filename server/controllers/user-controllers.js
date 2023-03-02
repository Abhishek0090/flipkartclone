import express from "express"
import User from "../model/user-schema.js";



export const userSignup = async (req, res) => {

    try {

        //checking if user exists

        const exist = await User.findOne({ email: req.body.email })

        if (exist) {
            return res.status(401).json({ message: "User Already Exists" });
        }

        //inserting user

        const user = req.body;

        const newUser = new User(user)
        await newUser.save();

        res.status(200).json({ message: user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




export const userLogin = async (req, res) => {
    try {


        //login user 

        const user = await User.findOne({ email: req.body.email, password: req.body.password })

        if (user) {
            return res.status(200).json({ data: user })
        } else {
            return res.status(404).json({ message: "User Not Found" });
        }



    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}