import express from "express";
import bodyParser from "body-parser";
import productRouter from "./src/features/product/product.routes.js";
import userRouter from "./src/features/user/user.routes.js";
import basicAuthorizer from "./src/middlewares/basicAuth.middleware.js";

const server = express();
server.use(bodyParser.json());
// for all requests related to products, redirect to product routes
server.use("/api/products",basicAuthorizer, productRouter);
server.use('/api/users', userRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Ecommerce Apis");
});
server.listen(3200, () => {
  console.log("Server is Running on 3200");
});
    