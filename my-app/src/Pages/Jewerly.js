import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header'; 
import { Link } from 'react-router-dom';

export default function Jewelry() {
    const [products, setProducts] = useState([]);

    const fetchProduct = async () => {
        let response = await axios.get('http://localhost:3200/category/Jewerly');
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
            <div
                style={{
                    backgroundImage: 'url(im2.jpg)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    width: '100%',
                    marginTop : '-41px',
                    objectPosition: 'top',
                }}
                className="custom"
            >
                <br></br>
                <div className="container" style={{ paddingTop: '510px' }}>
                    <div className="row d-flex justify-content-center">
                        {products.map((product) => (
                            <div className="col-md-4 mb-4" key={product._id}>
                                <div
                                    className="card"
                                    style={{
                                        width: '90%',
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
                                            height: '410px',
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
/* Default styles for desktop and larger screens */
.custom-div {
    background-image: url(im5.jpg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    object-position: top;
}

/* Mobile styles */
@media (max-width: 768px) {
    .custom {
      
        margin-top: -100px !important;
    }
}

                /* Mobile styles */
                @media (max-width: 768px) {
                    .container {
                        padding-top: 300px !important;
                    }

                    .card {
                   
                        width: 100%; /* Make cards full width on small screens */
                        margin-left: 0; /* Remove margin */
                        margin-right: 0; /* Remove margin */
                    }

                    .card-body {
                        padding: 10px;
                         
                    }

                    .card-title {
                        font-size: 18px; /* Make the title smaller */
                    }

                    .card-text {
                        font-size: 18px; /* Make the price text smaller */
                    }

                    .card-img-top {
                        height: 250px; /* Reduce image height on mobile */
                        object-fit: cover;
                    }

                    button {
                        font-size: 14px; /* Reduce button font size */
                        padding: 10px 30px; /* Adjust button padding */
                    }
                }
            `}
        </style>
        </>
    );
}
