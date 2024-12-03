import express from "express";
import bodyParser from "body-parser";
import productRouter from "./src/features/product/product.routes.js";

const server = express();
server.use(bodyParser.json());
// for all requests related to products, redirect to product routes
server.use("/api/products", productRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Ecommerce Apis");
});
server.listen(3200, () => {
  console.log("Server is Running on 3200");
});
    