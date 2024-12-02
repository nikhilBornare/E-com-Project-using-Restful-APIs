import express from "express";
import * as ProductRouter from "./src/features/product/product.routes";

const server = express();

// for all requests related to products, redirect to product routes
server.use("/api/products", ProductRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Ecommerce Apis");
});
server.listen(3200, () => {
  console.log("Server is Running on 3200");
});
