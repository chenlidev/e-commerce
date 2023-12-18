import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import HomePage from "./scenes/homePage";
import ProductDetail from "./scenes/productDetailPage";
import Navbar from "./scenes/navbar";
import ProductsInCategory from "./scenes/productsInCategory";


function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/products/categories/:categoryId" element={<ProductsInCategory/>}/>
                    <Route path="/products/:productId" element={<ProductDetail/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
