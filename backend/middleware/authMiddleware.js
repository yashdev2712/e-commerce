import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
                message: "token does not exist"
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(402).json({
                message: "invalid token"
            })
        }

        const user = await User.findById(decode.userId);
        req.user = user;
        next();

    } catch (error) {
        console.log("error in middleware");
        return res.status(401).json({
            error: error.message
        })
    }

}


export default authMiddleware;