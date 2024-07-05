import express from "express";
import { prodList, createPro, updatePro, removePro } from "../controllers/productController.js";


const router = express.Router();

router.get("prodList",, prodList)




router.post("/createProduct", createPro);
router.post("/updateProduct/:id", updatePro);
router.delete("/removeProduct/:id", removePro);

export default router;
