import React, { createContext, useContext, useState } from 'react';

interface Item {
    id: string;
    name: string;
    price: number;
    count: number;
}

interface CartContextType {
    cart: Item[];
    addToCart: (item: Item) => void;
    removeFromCart: (id: string) => void;
    increaseCount: (id: string) => void;
    decreaseCount: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [cart, setCart] = useState<Item[]>([]);

    const addToCart = (newItem: Item) => {
        setCart(currentCart => {
            // Check if the item already exists in the cart
            const existingItem = currentCart.find(item => item.id === newItem.id);

            if (existingItem) {
                // If item exists, increase its count
                return currentCart.map(item =>
                    item.id === newItem.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                // If item does not exist, add it to the cart with count 1
                return [...currentCart, { ...newItem, count: 1 }];
            }
        });
    };


    const removeFromCart = (id: string) => {
        setCart(currentCart => currentCart.filter(item => item.id !== id));
    };

    const increaseCount = (id: string) => {
        setCart(currentCart => currentCart.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item));
    };

    const decreaseCount = (id: string) => {
        setCart(currentCart => currentCart.map(item =>
            item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseCount, decreaseCount }}>
            {children}
        </CartContext.Provider>
    );
};
