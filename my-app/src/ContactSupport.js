import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ContactSupport = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Your message has been successfully sent to support.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#3085d6',
            });
            setFormData({ name: '', email: '', message: '' });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out all fields before submitting.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#d33',
            });
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f4f6f9' }}>
            <div className="card shadow-lg rounded-4 p-5" style={{ maxWidth: '600px', background: '#ffffff' }}>
                <div className="card-body text-center">
                    <div className="mb-4">
                        <i className="bi bi-person-lines-fill text-primary" style={{ fontSize: '5rem' }}></i>
                    </div>
                    <h1 className="card-title text-primary mb-3" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}>
                        Contact Support
                    </h1>
                    <p className="card-text mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#555' }}>
                        If you have any questions or issues, feel free to reach out to our support team. We'll get back to you as soon as possible!
                    </p>

                    <form onSubmit={handleSubmit} className="mb-4">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="d-grid gap-3">
                            <button type="submit" className="btn btn-primary btn-lg fw-bold" style={{ borderRadius: '50px' }}>
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* "Back to Home" Button with Enhanced Styles */}
                    <Link
                        to="/"
                        className="btn btn-outline-primary btn-lg fw-bold"
                        style={{
                            borderRadius: '50px',
                            padding: '12px 20px',
                            fontSize: '16px',
                            transition: 'all 0.3s',
                            borderColor: '#007bff',
                            color: '#007bff',
                            textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#007bff';
                            e.target.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '';
                            e.target.style.color = '#007bff';
                        }}
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};