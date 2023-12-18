export type Product = {
    product_id: number;
    name: string;
    description: string;
    price: number;
    stock_quantity: number;
    category_id?: number;
    seller_id?: number;
    image_urls: string[];
};

export type Cart = {
    cart_id: number;
    user_id: number;
    product_id: number;
    quantity: number;
};
