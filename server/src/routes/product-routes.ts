import express from 'express';
import {ProductController} from "../controllers/ProductController";

const router = express.Router();

router.get('/products', ProductController.getAllProducts);
router.post("/products", ProductController.createProduct);
router.get("/products/:productId", ProductController.getProduct);
router.put("/products/:productId", ProductController.updateProduct);
router.delete("/products/:productId", ProductController.deleteProduct);

router.get("/products/categories/:categoryId", ProductController.getProductsByCategory);


export default router;
