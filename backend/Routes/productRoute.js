import express from "express";
import { addProduct,cart, createPro, updatePro, removePro } from "../controllers/productController.js";
import authMiddleware from "../middleware/authMiddleware.js"

const router = express.Router();

router.get("/cart", authMiddleware, cart);
router.post("/addProduct/:id",authMiddleware,addProduct);
router.post("/createProduct",authMiddleware,createPro);
router.post("/updateProduct/:id",authMiddleware,updatePro);
router.delete("/removeProduct/:id",authMiddleware, removePro);

export default router;
    