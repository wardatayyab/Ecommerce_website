// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// export default function Header() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(false);  // Loading state for search results

//     const navbarStyle = {
//         backgroundColor: '#fff',
//         boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 100,
//     };

//     const searchInputStyle = {
//         padding: '10px',
//         width: '300px',
//         borderRadius: '20px',
//         border: '1px solid #ddd',
//         outline: 'none',
//         fontSize: '16px',
//     };

//     const searchButtonStyle = {
//         padding: '10px 15px',
//         marginLeft: '10px',
//         backgroundColor: '#007bff',
//         border: 'none',
//         borderRadius: '20px',
//         color: '#fff',
//         cursor: 'pointer',
//         fontSize: '16px',
//     };

//     // Handle the change in search input
//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     // Handle search action and fetch results
//     const handleSearch = async () => {
//         if (!searchQuery.trim()) {
//             alert('Please enter a product name');
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.get(`http://localhost:3200/search/${searchQuery}`);
//             setResults(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             alert('Failed to fetch results');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary" style={navbarStyle}>
//                 <div className="container-fluid d-flex justify-content-between align-items-center">
//                     {/* Logo on the left */}
//                     <Link to="/" className="navbar-brand">
//                         <img src="logo.png" alt="Logo" width="150" height="40" className="d-inline-block align-text-top" />
//                     </Link>

//                     {/* Centered Search Bar */}
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <div className="navbar-nav ms-auto">
//                             <input
//                                 type="text"
//                                 placeholder="Search for products..."
//                                 value={searchQuery}
//                                 onChange={handleSearchChange}
//                                 style={searchInputStyle}
//                             />
//                             <button onClick={handleSearch} style={searchButtonStyle}>Search</button>
//                         </div>
//                     </div>

//                     {/* Cart and User Icons on the right */}
//                     <div className="d-flex align-items-center">
//                         <Link to="/cart" className="btn btn-link position-relative me-3" style={{ color: 'black' }}>
//                             <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '20px' }} />
//                             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">0</span>
//                         </Link>

//                         <Link to="/account" className="btn btn-link me-3" style={{ color: 'black' }}>
//                             <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px' }} />
//                         </Link>
//                     </div>
//                 </div>
//             </nav>

//             {/* Show loading indicator while waiting for the results */}
//             {loading && (
//                 <div className="container mt-5 text-center">
//                     <div className="spinner-border" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                     </div>
//                 </div>
//             )}

//             {/* Display search results if any */}
//             {results.length > 0 && (
//                 <div className="container mt-5">
//                     <h4>Search Results:</h4>
//                     <div className="row">
//                         {results.map((product) => (
//                             <div key={product._id} className="col-12 col-md-4">
//                                 <div className="card mb-4">
//                                     <img src={product.image} className="card-img-top" alt={product.title} />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{product.title}</h5>
//                                         <p className="card-text">{product.description}</p>
//                                         <p className="card-text">{product.category}</p>
//                                         <p className="card-text">${product.price}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [allProducts, setAllProducts] = useState([]);  // All products state
    const [searchResults, setSearchResults] = useState([]);  // Search results state
    const [loading, setLoading] = useState(false);  // Loading state for search results

    const navbarStyle = {
        backgroundColor: '#fff',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    };

    const searchInputStyle = {
        padding: '10px',
        width: '300px',
        borderRadius: '20px',
        border: '1px solid #ddd',
        outline: 'none',
        fontSize: '16px',
    };

    const searchButtonStyle = {
        padding: '10px 15px',
        marginLeft: '10px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '20px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    };

    // Fetch all products when the component mounts
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3200/products');
                setAllProducts(response.data);
            } catch (error) {
                console.error('Error fetching all products:', error);
            }
        };
        fetchAllProducts();
    }, []);

    // Handle the change in search input
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Handle search action and fetch results
    const handleSearch = async () => {
        if (!searchQuery.trim()) {
            alert('Please enter a product name');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3200/search/${searchQuery}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
            alert('Failed to fetch results');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={navbarStyle}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    {/* Logo on the left */}
                    <Link to="/" className="navbar-brand">
                        <img src="logo.png" alt="Logo" width="150" height="40" className="d-inline-block align-text-top" />
                    </Link>

                    {/* Centered Search Bar */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav ms-auto">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                style={searchInputStyle}
                            />
                            <button onClick={handleSearch} style={searchButtonStyle}>Search</button>
                        </div>
                    </div>

                    {/* Cart and User Icons on the right */}
                    <div className="d-flex align-items-center">
                        <Link to="/cart" className="btn btn-link position-relative me-3" style={{ color: 'black' }}>
                            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '20px' }} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">0</span>
                        </Link>

                        <Link to="/account" className="btn btn-link me-3" style={{ color: 'black' }}>
                            <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px' }} />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Show loading indicator while waiting for the results */}
            {loading && (
                <div className="container mt-5 text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {/* Show all products initially */}
            {searchQuery === '' && allProducts.length > 0 && (
                <div className="container mt-5">
                    <h4>All Products:</h4>
                    <div className="row">
                        {allProducts.map((product) => (
                            <div key={product._id} className="col-12 col-md-4">
                                <div className="card mb-4">
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">{product.category}</p>
                                        <p className="card-text">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Display search results if any */}
            {searchQuery !== '' && searchResults.length > 0 && (
                <div className="container mt-5">
                    <h4>Search Results:</h4>
                    <div className="row">
                        {searchResults.map((product) => (
                            <div key={product._id} className="col-12 col-md-4">
                                <div className="card mb-4">
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">{product.category}</p>
                                        <p className="card-text">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Show message when no results are found */}
            {searchQuery !== '' && searchResults.length === 0 && (
                <div className="container mt-5">
                    <h4>No results found for "{searchQuery}"</h4>
                </div>
            )}
        </>
    );
}
