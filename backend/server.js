import express from "express";
import dotenv from "dotenv";
import  cors from "cors";

import authRoutes from "./Routes/authRoute.js"
import connectToDb from "./Db/Db.js";
import productRoutes from "./Routes/productRoute.js"

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("hii there")
})

app.use("/api/auth", authRoutes);
app.use("/api/product",productRoutes);

app.listen(PORT, () => {
    connectToDb();
    console.log("the server is running:", PORT);
});