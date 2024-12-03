//Manage routes/paths to ProductController
import express from "express";
import ProductController from "./product.controller.js";
import { upload } from "../../middlewares/fileupload.middleware.js";

//Initialize express router
const productRouter = express.Router();

const productController = new ProductController();

// All the paths to controller methods.

// get method to fetch all products
productRouter.get("/", productController.getAllProducts);

// post method to add product
productRouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProduct
);
// get method to get product by ID
productRouter.get("/:id", productController.getOneProduct);

export default productRouter;
