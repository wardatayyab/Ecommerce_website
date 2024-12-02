import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import { Link } from 'react-router-dom';

export default function AllProduct() {
    const [products, setProducts] = useState([]);

    const fetchProduct = async () => {
        let response = await axios.get('http://localhost:3200/list');
        setProducts(response.data);
        console.log('products');
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                {/* Centered Heading */}
                <h4 className="text-center" style={{ 
                        fontFamily: "Georgia", 
                        fontWeight: '700', 
                        fontSize: '36px', 
                        color: '#333', 
                        marginTop: '110px' ,
                        marginBottom: '-10px' 
                    }}>
                        All COLLECTION
                    </h4>

                {/* Product List */}
                <div className="container" style={{ paddingTop: '50px' }}>
                    <div className="row d-flex justify-content-center">
                        {products.map((product) => (
                            <div className="col-md-4 mb-4" key={product._id}>
                                <div
                                    className="card"
                                    style={{
                                        width: '97%',
                                        border: 'none',
                                        borderRadius: '12px',
                                        boxShadow: '0 12px 25px rgba(0, 0, 0, 0.2)',
                                        overflow: 'hidden',
                                        marginLeft: '20px',
                                        marginRight: '10px',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt="..."
                                        style={{
                                            width: '100%',
                                            height: '400px',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    />
                                    <div className="card-body" style={{ padding: '20px' }}>
                                        <h5
                                            className="card-title"
                                            style={{
                                                fontWeight: '600',
                                                color: '#333',
                                                fontSize: '20px',
                                                textAlign: 'center',
                                                lineHeight: '1.2',
                                                letterSpacing: '1px',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            {product.title}
                                        </h5>
                                        <p
                                            className="card-text"
                                            style={{
                                                fontSize: '20px',
                                                color: '#e63946',
                                                fontWeight: '700',
                                                textAlign: 'center',
                                                lineHeight: '1.2',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                marginTop: '10px',
                                            }}
                                        >
                                            Rs.{product.price}
                                        </p>
                                        <center>
                                            <Link to={`/product/${product._id}`}>
                                                <button
                                                    style={{
                                                        backgroundColor: '#333',
                                                        color: 'white',
                                                        border: 'none',
                                                        padding: '12px 35px',
                                                        cursor: 'pointer',
                                                        borderRadius: '10px',
                                                        fontWeight: 'bold',
                                                        transition: 'background-color 0.3s ease',
                                                        fontSize: '16px',
                                                    }}
                                                    onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
                                                    onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
                                                >
                                                    See More
                                                </button>
                                            </Link>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>
                {`
                    .card:hover {
                        transform: scale(1.05);
                        box-shadow: 0 18px 50px rgba(0, 0, 0, 0.3);
                    }

                    .card-img-top:hover {
                        transform: scale(1.1);
                    }
                `}
            </style>
        </>
    );
}
