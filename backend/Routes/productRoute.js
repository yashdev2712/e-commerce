import express from "express";
import { addProduct,cart, createPro, updatePro, removePro } from "../controllers/productController.js";
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();

router.get("/cart", authMiddleware, cart);
router.post("/addProduct/:id",authMiddleware,addProduct);
router.post("/createProduct",createPro);
router.post("/updateProduct/:id",updatePro);
router.delete("/removeProduct/:id", removePro);

export default router;
    