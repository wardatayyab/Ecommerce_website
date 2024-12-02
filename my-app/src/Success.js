import React from 'react';
import { Link } from 'react-router-dom';

export const Success = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f4f6f9' }}>
            <div className="card shadow-lg rounded-4 p-5" style={{ maxWidth: '500px', background: '#ffffff' }}>
                <div className="card-body text-center">
                    {/* Icon Section */}
                    <div className="mb-4">
                        <i className="bi bi-check-circle-fill text-primary" style={{ fontSize: '5rem' }}></i>
                    </div>
                    
                    {/* Heading with Icon */}
                    <h1 className="card-title text-primary mb-3" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}>
                        <i className="bi bi-emoji-smile" style={{ fontSize: '1.5rem', marginRight: '8px' }}></i>
                        Payment Successful!
                    </h1>
                    
                    {/* Description */}
                    <p className="card-text mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#555' }}>
                        Thank you for your purchase. Your transaction was completed successfully.
                    </p>
                    
                    {/* Buttons */}
                    <div className="d-grid gap-3">
                        <Link to="/" className="btn btn-primary btn-lg fw-bold" style={{ borderRadius: '50px' }}>
                            Continue Shopping
                        </Link>
                        <Link to="/list" className="btn btn-outline-primary btn-lg fw-bold" style={{ borderRadius: '50px' }}>
                            View Your Orders
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};