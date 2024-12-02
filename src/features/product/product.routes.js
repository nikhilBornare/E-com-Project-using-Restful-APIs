//Manage routes/paths to ProductController
import express from "express";
import ProductController from "./product.controller.js";
//Initialize express router
const productRouter = express.Router();

const productController = new ProductController();  

// All the paths to controller methods.
productRouter.get('/',productController.getAllProducts);
productRouter.post("/",productController.addProduct);

export default productRouter;
