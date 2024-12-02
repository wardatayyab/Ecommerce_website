import React from 'react';
import { Link } from 'react-router-dom';

export const CancelPage = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f4f6f9' }}>
            <div className="card shadow-lg rounded-4 p-5" style={{ maxWidth: '500px', background: '#ffffff' }}>
                <div className="card-body text-center">
                    {/* Icon Section */}
                    <div className="mb-4">
                        <i className="bi bi-x-circle-fill text-danger" style={{ fontSize: '5rem' }}></i>
                    </div>
                    
                    {/* Heading with Icon */}
                    <h1 className="card-title text-danger mb-3" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}>
                        <i className="bi bi-sad" style={{ fontSize: '1.5rem', marginRight: '8px' }}></i>
                        Payment Canceled
                    </h1>
                    
                    {/* Description */}
                    <p className="card-text mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#555' }}>
                        We're sorry, your payment could not be processed. Please try again later or contact support if the issue persists.
                    </p>
                    
                    {/* Buttons */}
                    <div className="d-grid gap-3">
                        <Link to="/" className="btn btn-danger btn-lg fw-bold" style={{ borderRadius: '50px' }}>
                            Try Again
                        </Link>
                        <Link to="/contactsupport" className="btn btn-outline-danger btn-lg fw-bold" style={{ borderRadius: '50px' }}>
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};