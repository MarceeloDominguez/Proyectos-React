import { Router } from "express";
import {
  GetProducts,
  GetProductsById,
  GetAllProducts,
} from "../controllers/products.js";

const router = Router();

router.get("/", GetProducts);
router.get("/all", GetAllProducts);
router.get("/:id", GetProductsById);

export default router;
