import { Request, Response } from 'express';
import { connectDB } from '../dataSource';
import { Product } from '../entities/Product';

export class ProductController {
    static async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const productRepository = connectDB.getRepository(Product);
            const products = await productRepository.find();
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching products.");
        }
    }

    static createProduct = async (req: Request, res: Response) => {
        const productRepository = connectDB.getRepository(Product);
        try {
            const product = productRepository.create(req.body);
            await productRepository.save(product);
            res.status(201).send(product);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    static getProduct = async (req: Request, res: Response) => {
        const productRepository = connectDB.getRepository(Product);
        const productId = parseInt(req.params.productId);
        try {
            const product = await productRepository.findOneBy({ product_id: productId });

            if (product) {
                res.send(product);
            } else {
                res.status(404).send("Product not found");
            }
        } catch (error) {
            res.status(500).send(error);
        }
    };

    static updateProduct = async (req: Request, res: Response) => {
        const productRepository = connectDB.getRepository(Product);
        const productId = parseInt(req.params.productId);
        try {
            let product = await productRepository.findOneBy({ product_id: productId });
            if (product) {
                productRepository.merge(product, req.body);
                const result = await productRepository.save(product);
                res.send(result);
            } else {
                res.status(404).send("Product not found");
            }
        } catch (error) {
            res.status(500).send(error);
        }
    };

    static deleteProduct = async (req: Request, res: Response) => {
        const productRepository = connectDB.getRepository(Product);
        const productId = parseInt(req.params.productId);
        try {
            let result = await productRepository.delete(productId);
            if (result.affected === 1) {
                res.status(200).send("Product deleted");
            } else {
                res.status(404).send("Product not found");
            }
        } catch (error) {
            res.status(500).send(error);
        }
    };

    static getProductsByCategory = async (req: Request, res: Response) => {
        const productRepository = connectDB.getRepository(Product);
        const categoryId = parseInt(req.params.categoryId);
        try {
            // 使用 category 字段进行查询
            const products = await productRepository.find({
                where: {
                    category: { category_id: categoryId }
                },
                relations: ["category"] // 如果你希望在返回的产品中包含类别信息
            });

            if (products.length > 0) {
                res.json(products);
            } else {
                res.status(404).send("No products found in this category");
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("An error occurred while fetching products by category.");
        }
    };



}
