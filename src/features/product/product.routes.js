//Manage routes/paths to ProductController
import express from "express";
import ProductController from "./product.controller";
//Initialize express router
const router = express.Router();

const productController = new ProductController();  

// All the paths to controller methods.
router.get('/',productController.getAllProducts);
router.post("/",productController.addProduct);
router.put('/',productController.)

export default router;
