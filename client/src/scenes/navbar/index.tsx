import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import HistoryIcon from '@mui/icons-material/History';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { To, useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useCart} from "../../CartContext";

const Navbar = () => {
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
    const { cart } = useCart();
    const handleNavigation = (path: To) => {
        navigate(path);
        setIsMobileMenuToggled(false);
    };
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

    return (
        <div>
            {isNonMobileScreens ? (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <Button onClick={() => handleNavigation('/home')} sx={{  pl: '80px',
                        pr: '80px'}} >
                        <HomeIcon fontSize="large"/>
                        <Typography>Home</Typography>
                    </Button>
                    <Button onClick={() => handleNavigation('/login')} sx={{  pl: '80px', 
                        pr: '80px'}} >
                        <LoginIcon fontSize="large"/>
                        <Typography>Login</Typography>
                    </Button>
                    <Button onClick={() => handleNavigation('/history')} sx={{  pl: '80px', 
                        pr: '80px'}} >
                        <HistoryIcon fontSize="large"/>
                        <Typography>Order History</Typography>
                    </Button>
                    <Button onClick={() => handleNavigation('/cart')} sx={{  pl: '80px',
                        pr: '80px'}} >
                        <ShoppingCartIcon fontSize="large"/>
                        <Typography>Cart {cart.length}</Typography>
                    </Button>
                </Box>
            ) : (
                <IconButton
                    onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                >
                    <MenuIcon />
                </IconButton>
            )}

            {!isNonMobileScreens && isMobileMenuToggled && (
                <Box
                    sx={{
                        position: 'fixed',
                        right: 0,
                        bottom: 0,
                        height: '100%',
                        zIndex: 10,
                        maxWidth: '500px',
                        minWidth: '200px',
                        backgroundColor: 'lightgray',
                    }}
                >
                    {/* CLOSE ICON */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: '1rem' }}>
                        <IconButton
                            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    {/* MENU ITEMS */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '3rem'
                        }}
                    >
                        <Button onClick={() => handleNavigation('/home')}>
                            <HomeIcon fontSize="small"/>
                            <Typography>Home</Typography>
                        </Button>

                        <Button onClick={() => handleNavigation('/login')}>
                            <LoginIcon fontSize="small"/>
                            <Typography>Login</Typography>
                        </Button>
                        <Button onClick={() => handleNavigation('/history')}>
                            <HistoryIcon fontSize="small"/>
                            <Typography>Order History</Typography>
                        </Button>
                        <Button onClick={() => handleNavigation('/cart')}>
                            <ShoppingCartIcon fontSize="small"/>
                            <Typography>Cart</Typography>
                        </Button>
                    </Box>
                </Box>
            )}
        </div>
    );
};

export default Navbar;
