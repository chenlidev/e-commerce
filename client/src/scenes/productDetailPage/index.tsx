import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {useCart} from "../../CartContext";

type Product = {
    product_id: number;
    name: string;
    description: string;
    price: string;
    stock_quantity: number;
    image_urls: string[];
};

const ProductDetail: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const { productId } = useParams<{ productId: string }>();

    const { addToCart } = useCart(); // Use the cart context

    const handleAddToCart = () => {
        if (product) {
            addToCart({
                id: product.product_id.toString(),
                name: product.name,
                price: parseFloat(product.price),
                count: 1
            });
        }
    };

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock_quantity}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <img src={product.image_urls[0]} alt={product.name} />
        </div>
    );
};

export default ProductDetail;
