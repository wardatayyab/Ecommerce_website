import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const GetProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3200/list");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = async (productId) => {
        try {
            await axios.post(`http://localhost:3200/cart/${productId}`);
            navigate("/cart"); 
        } catch (error) {
            console.error("Error adding product to cart", error);
        }
    };

    return (
        <div className="container mt-4">
            <h1>Products</h1>
            <div className="row">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100">
                                <img 
                                    src={product.image}
                                    className="card-img-top" 
                                    alt={product.name} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">Brand: {product.price}</p>
                                    <p className="card-text">Category: {product.description}</p>
                                    <p className="card-text">Price: ${product.category}</p>
                                    <button 
                                        className="btn btn-primary"
                                        onClick={() => addToCart(product._id)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
};
