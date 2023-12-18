import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Pagination} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import useMediaQuery from "@mui/material/useMediaQuery";
import {Product} from "../types";


const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();


    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');


    const ITEMS_PER_PAGE = 8;
    const handleCardClick = (productId: number) => {
        navigate(`/products/${productId}`);
    };

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/products`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, []);

    const pageCount = Math.ceil(products.length / ITEMS_PER_PAGE);

    const currentProducts = products.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };


    return (
        <>
            <Grid container spacing={3}>
                {currentProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.product_id}>
                        {isNonMobileScreens ?
                            (<Paper
                                onClick={() => handleCardClick(product.product_id)}
                                style={{padding: '16px', textAlign: 'center', color: 'text.secondary'}}
                            >
                                {product.image_urls.map((url, index) => (
                                    <img
                                        key={index}
                                        src={url}
                                        alt={product.name}
                                        style={{width: "auto", height: '200px', objectFit: 'cover'}}
                                    />
                                ))}
                                <h2>{product.name}</h2>
                                <p>Price: ${product.price}</p>
                            </Paper>)
                            : <Paper
                                onClick={() => handleCardClick(product.product_id)}
                                style={{
                                    display: 'flex', // Use flexbox layout
                                    color: 'text.secondary',
                                    padding: '16px'
                                }}
                            >
                                <div style={{ flex: 1 }}> {/* Container for the image */}
                                    {product.image_urls.map((url, index) => (
                                        <img
                                            key={index}
                                            src={url}
                                            alt={product.name}
                                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                        />
                                    ))}
                                </div>
                                <div style={{ flex: 2, paddingLeft: '20px' }}> {/* Container for the text */}
                                    <h2>{product.name}</h2>
                                    <p>Price: ${product.price}</p>
                                </div>
                            </Paper>
                        }
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                style={{marginTop: '20px', justifyContent: 'center', display: 'flex'}}
            />
        </>
    );
};

export default ProductList;