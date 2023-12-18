import React from 'react';
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";

import { useNavigate } from "react-router-dom";
import {useCart} from "../../CartContext";




const CartMenu: React.FC = () => {
    const navigate = useNavigate();
    const { cart, removeFromCart, increaseCount, decreaseCount } = useCart(); // Use the cart context

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);

    return (
        <div>
            <div>
                <Box padding="30px" overflow="auto" height="100%">
                    {/* HEADER */}
                    <div>
                        <Typography variant="h3">Subtotal ({cart.length} items)</Typography>
                    </div>

                    {/* CART LIST */}
                    <Box>
                        {cart.map((item) => (
                            <Box key={item.id}>
                                <div>
                                    {/* Product Image */}
                                    <Box flex="1 1 40%">
                                        {/* Image component */}
                                    </Box>
                                    <Box flex="1 1 60%">
                                        <div>
                                            <Typography fontWeight="bold">
                                                {item.name}
                                            </Typography>
                                            <IconButton onClick={() => removeFromCart(item.id)}>
                                                <CloseIcon />
                                            </IconButton>
                                        </div>
                                        {/* Product Description */}
                                        <div>
                                            <Box
                                                display="flex"
                                                alignItems="center"

                                            >
                                                <IconButton onClick={() => decreaseCount(item.id)}>
                                                    <RemoveIcon />
                                                </IconButton>
                                                <Typography>{item.count}</Typography>
                                                <IconButton onClick={() => increaseCount(item.id)}>
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>
                                            <Typography fontWeight="bold">
                                                ${item.price.toFixed(2)}
                                            </Typography>
                                        </div>
                                    </Box>
                                </div>
                                <Divider />
                            </Box>
                        ))}
                    </Box>

                    {/* ACTIONS */}
                    <Box m="20px 0">
                        <div>
                            <Typography fontWeight="bold">SUBTOTAL</Typography>
                            <Typography fontWeight="bold">${totalPrice.toFixed(2)}</Typography>
                        </div>
                        <Button
                            sx={{
                                borderRadius: 0,
                                minWidth: "100%",
                                padding: "20px 40px",
                                m: "20px 0",
                            }}
                            onClick={() => {
                                navigate("/checkout");
                            }}
                        >
                            CHECKOUT
                        </Button>
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default CartMenu;
