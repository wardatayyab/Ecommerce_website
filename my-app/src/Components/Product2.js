import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Men() {
    const [products, setProducts] = useState([]);

    const fetchProduct = async () => {
        let response = await axios.get('http://localhost:3200/list')
        setProducts(response.data);
        console.log('products');
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const cardStyle = {
        width: '18rem',
        transition: 'box-shadow 0.3s ease',
        cursor: 'pointer',
        boxShadow: '0 0 5px rgba(0, 140, 255, 0.3), 0 0 10px rgba(0, 140, 255, 0.3)' 
    };

    const buttonStyle = {
        padding: '10px 20px',
        textTransform: 'uppercase',
        borderRadius: '8px',
        fontSize: '17px',
        fontWeight: '500',
        color: 'black',
        textShadow: 'none',
        background: 'transparent',
        cursor: 'pointer',
        boxShadow: '0 0 5px rgba(0, 140, 255, 0.5)', 
        border: '1px solid #ffffff80',
        transition: '0.5s ease',
        userSelect: 'none'
    };

    const buttonHoverStyle = {
        color: '#ffffff',
        background: '#008cff',
        border: '1px solid #008cff',
        textShadow: '0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff',
        boxShadow: '0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff, 0 0 100px #008cff'
    };

    return (
        <>
            <Header />
            <br />
            <div className='container'>
                <div className='row'>
                    {products.map((product) => (
                        <div className='col-md-4 mb-4' key={product._id}>
                            <div className="card" style={cardStyle}>
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.price}</p>
                                    <center>
                                        <Link to={`/product/${product._id}`}>
                                            <button
                                                style={buttonStyle}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.color = buttonHoverStyle.color;
                                                    e.currentTarget.style.background = buttonHoverStyle.background;
                                                    e.currentTarget.style.border = buttonHoverStyle.border;
                                                    e.currentTarget.style.textShadow = buttonHoverStyle.textShadow;
                                                    e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.color = buttonStyle.color;
                                                    e.currentTarget.style.background = buttonStyle.background;
                                                    e.currentTarget.style.border = buttonStyle.border;
                                                    e.currentTarget.style.textShadow = buttonStyle.textShadow;
                                                    e.currentTarget.style.boxShadow = buttonStyle.boxShadow;
                                                }}
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
            <Footer/>
        </>
    );
}

