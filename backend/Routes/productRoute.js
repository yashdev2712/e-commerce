import express from "express";

import Product from "../models/productsSchema.js";
import { createPro, updatePro, removePro } from "../controllers/productController.js";


const router = express.Router();

router.post("/createProduct",createPro);
router.post("/updateProduct/:id",updatePro);
router.delete("/removeProduct/:id",removePro);

export default router;
