import { Router } from "express";
import { GetProducts, GetProductsById } from "../controllers/products.js";

const router = Router();

router.get("/", GetProducts);
router.get("/:id", GetProductsById);

export default router;
