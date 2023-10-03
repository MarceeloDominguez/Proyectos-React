import express from "express";
import router from "./routes/products.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/items", router);

export default app;
