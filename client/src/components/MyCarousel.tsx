import React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

const categories = [
    {
        image: "clothes.jpg",
        category: "Clothes",
        categoryId: 1 // Assuming each category has an ID
    },
    {
        image: "shoes.jpg",
        category: "Shoes",
        categoryId: 2
    },
    {
        image: "books.jpg",
        category: "Books",
        categoryId: 3
    },
];

const MyCarousel = () => {
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
    const navigate = useNavigate();

    // Function to handle image click
    const handleImageClick = (categoryId:number) => {
        navigate(`/products/categories/${categoryId}`); // Navigate to the category route
    };

    return (
        isNonMobileScreens ? (
            <Carousel>
                {categories.map((category, i) => (
                    <Box key={i} style={{ position: 'relative', height: '300px' }}>
                        {/* Make the image clickable */}
                        <div onClick={() => handleImageClick(category.categoryId)}>
                            <img
                                src={category.image}
                                alt={category.category}
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    objectFit: 'cover',
                                    cursor: 'pointer'
                                }}
                            />
                        </div>
                        <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
                            <h4>{category.category}</h4>
                        </div>
                    </Box>
                ))}
            </Carousel>
        ) : (
            <Carousel>
                {categories.map((category, i) => (
                    <Box key={i} style={{ position: 'relative', height: '100px' }}>
                        <div onClick={() => handleImageClick(category.categoryId)}>
                            <img
                                src={category.image}
                                alt={category.category}
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    objectFit: 'cover',
                                    cursor: 'pointer'
                                }}
                            />
                        </div>
                        <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
                            <h4>{category.category}</h4>
                        </div>
                    </Box>
                ))}
            </Carousel>
        )
    );
};

export default MyCarousel;
