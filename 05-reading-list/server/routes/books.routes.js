import { Router } from "express";
import { getBooks, searchBooks } from "../controllers/books.controller.js";

const router = Router();

router.get("/books", getBooks);

router.get("/books/search", searchBooks);

export default router;
