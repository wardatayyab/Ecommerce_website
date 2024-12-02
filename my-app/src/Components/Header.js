import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [activePage, setActivePage] = useState(null);
    const navigate = useNavigate();

    const auth = localStorage.getItem('user');

    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || []);

    const navbarStyle = {
        backgroundColor: '#fff',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    };

    const centerLinksStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: '0px',
    };

    const linkStyle = {
        color: 'black',
        fontSize: '22px',
        fontFamily: "'Arial', sans-serif",
        textDecoration: 'none',
        padding: '25px',
        transition: 'all 0.3s ease',
    };

    const handleDropdownClick = (page) => {
        setActivePage(page);
    };

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/signup');  // Navigate to the signup page after logging out
    };

    // useEffect to persist cartItems in localStorage whenever cartItems change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Sync cartItems with localStorage
    }, [cartItems]); // This will trigger whenever cartItems state changes

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={navbarStyle}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <Link to="/" className="navbar-brand">
                        <img src="logo.png" alt="Logo" width="150" height="40" className="d-inline-block align-text-top" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav ms-auto" style={centerLinksStyle}>
                            <Link to="/" className="nav-link" style={linkStyle}>Home</Link>
                            <Link to="/contact" className="nav-link" style={linkStyle}>Contact</Link>
                            <Link to="/blog" className="nav-link" style={linkStyle}>Services</Link>
                            <Link to="/list" className="nav-link" style={linkStyle}>Search</Link>

                            <div className="dropdown">
                                <button 
                                    className="btn btn-link nav-link dropdown-toggle" 
                                    style={{ ...linkStyle, border: 'none' }} 
                                    type="button" 
                                    id="dropdownMenuButton" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Collections
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><Link className="dropdown-item" to="/men" onClick={() => handleDropdownClick('men')}>Men</Link></li>
                                    <li><Link className="dropdown-item" to="/women" onClick={() => handleDropdownClick('women')}>Women</Link></li>
                                    <li><Link className="dropdown-item" to="/kid" onClick={() => handleDropdownClick('kid')}>Kids</Link></li>
                                    <li><Link className="dropdown-item" to="/all" onClick={() => handleDropdownClick('list')}>All Products</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <Link to="/cart" className="btn btn-link position-relative me-3" style={{ color: 'black' }}>
                            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '20px' }} />
                        </Link>

                        {auth ? (
                            <button className="btn btn-link me-3" style={{ color: 'black', fontSize: '18px', textDecoration: 'none' }} onClick={logout}>
                                Logout
                            </button>
                        ) : (
                            <Link to="/signup" className="btn btn-link me-3" style={{ color: 'black', fontSize: '18px', textDecoration: 'none' }}>
                                Signup
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
            {activePage === 'men' && <div>Men's Collection Page</div>}
            {activePage === 'women' && <div>Women's Collection Page</div>}
            {activePage === 'kid' && <div>Kids Collection Page</div>}
            {activePage === 'list' && <div>All Products Page</div>}
        </>
    );
}






