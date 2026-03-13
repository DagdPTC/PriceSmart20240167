import express from "express"
import productRouter from "./src/routes/products.js"

const app = express();

app.use("/api/products")

export default app;
