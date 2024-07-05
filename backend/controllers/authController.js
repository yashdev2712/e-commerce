import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import genToken from "../utils/genToken.js";

export const signup = async (req, res) => {
    try {

        const { username, fullname, email, password } = req.body;
        if (!username || !fullname || !email || !password) {
            return res.status(400).json({ error: "all field are requried" })
        }

        if (password.length < 6) {
            return res.status(500).json({ error: "password length should be more than 6 character" })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(500).json({ error: "User already exist" })
        }

        const genSalt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, genSalt);

        const newUser = await User.create({
            username,
            fullname,
            email,
            password: hashedPassword
        })


        if (newUser) {
            genToken(newUser._id, res)
            res.send({
                _id: newUser._id,
                username: newUser.username,
                fullname: newUser.fullname,
                email: newUser.email
            })
        }

    } catch (error) {
        console.log("Error:", error.message);
        return res.status(400).json({
            message: "error in signup controller"
        })
    }
}




export const login = async (req, res) => {
    try {

        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(500).json({
                message: "all fields are required"
            })
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({
                message: "you have to login first"
            })
        }

        const verifyPassword = bcrypt.compare(password, user.password);
        if (verifyPassword) {
            genToken(user._id, res);
            res.send({
                _id: user._id,
                username: user.username,
                fullname: user.fullname,
                email: user.email,
            })
        } else {
            return res.status(402).json({
                error: "incorrect password"
            })
        }


    } catch (error) {

    }
}





export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "",{maxAge:0});
        return res.status(200).json({
            message:"logout successfully"
        })
    } catch (error) {
        return res.status(402).json({
            error: "error in logout controller"
        })
    }
}