import express from "express";
import morgan from "morgan";
import booksRoutes from "./routes/books.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

app.use(booksRoutes);

export default app;
