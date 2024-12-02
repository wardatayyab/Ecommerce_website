// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// export default function Header() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [allProducts, setAllProducts] = useState([]); 
//     const [searchResults, setSearchResults] = useState([]);  
//     const [loading, setLoading] = useState(false);  

//     const navbarStyle = {
//         backgroundColor: '#fff',
//         boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 100,
//         padding : '23px'
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

//     useEffect(() => {
//         const fetchAllProducts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3200/list');
//                 setAllProducts(response.data);
//             } catch (error) {
//                 console.error('Error fetching all products:', error);
//             }
//         };
//         fetchAllProducts();
//     }, []);

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleSearch = async () => {
//         if (!searchQuery.trim()) {
//             alert('Please enter a product name');
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.get(`http://localhost:3200/search/${searchQuery}`);
//             setSearchResults(response.data);
//         } catch (error) {
//             console.error('Error fetching search results:', error);
//             alert('Failed to fetch results');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSeeMore = (productId) => {
//         console.log('See more details for product ID:', productId);
    
//     };

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary" style={navbarStyle}>
//                 <div className="container-fluid d-flex justify-content-between align-items-center">
//                     <Link to="/" className="navbar-brand">
//                         <img src="logo.png" alt="Logo" width="150" height="40" className="d-inline-block align-text-top" />
//                     </Link>

//                     {/* Centered Search Bar */}
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <div className="navbar-nav mx-auto"> {/* Added 'mx-auto' to center the search bar */}
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

//             {/* Show all products initially when there is no search query */}
//             {searchQuery === '' && allProducts.length > 0 && (
//                 <div className="container mt-5">
//                     <br /><br /><br /><br/><br/>
//                     <div className="row">
//                         {allProducts.map((product) => (
//                             <div key={product._id} className="col-12 col-md-4">
//                                 <div className="card mb-4 product-card">
//                                     <img src={product.image} className="card-img-top" alt={product.title} />
//                                     <div className="card-body">
//                                         <h5 className="card-title product-title">{product.title}</h5>
//                                         <p className="card-text product-price">Rs.{product.price}</p>
//                                         <center>
//                                             <Link to={`/product/${product._id}`}>
//                                                 <button
//                                                     style={{
//                                                         backgroundColor: '#333',
//                                                         color: 'white',
//                                                         border: 'none',
//                                                         padding: '12px 35px',
//                                                         cursor: 'pointer',
//                                                         borderRadius: '10px',
//                                                         fontWeight: 'bold',
//                                                         transition: 'background-color 0.3s ease',
//                                                         fontSize: '16px',
//                                                     }}
//                                                     onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
//                                                     onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
//                                                 >
//                                                     See More
//                                                 </button>
//                                             </Link>
//                                         </center>                                       
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {searchQuery !== '' && searchResults.length > 0 && (
//                 <div className="container mt-5">
//                     <br /><br /><br /><br/><br/>
//                     <div className="row">
//                         {searchResults.map((product) => (
//                             <div key={product._id} className="col-12 col-md-4">
//                                 <div className="card mb-4 product-card">
//                                     <img src={product.image} className="card-img-top" alt={product.title} />
//                                     <div className="card-body">
//                                         <h5 className="card-title product-title">{product.title}</h5>
//                                         <p className="card-text product-price">{product.price}</p>
//                                         <center>
//                                             <Link to={`/product/${product._id}`}>
//                                                 <button
//                                                     style={{
//                                                         backgroundColor: '#333',
//                                                         color: 'white',
//                                                         border: 'none',
//                                                         padding: '12px 35px',
//                                                         cursor: 'pointer',
//                                                         borderRadius: '10px',
//                                                         fontWeight: 'bold',
//                                                         transition: 'background-color 0.3s ease',
//                                                         fontSize: '16px',
//                                                     }}
//                                                     onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
//                                                     onMouseOut={(e) => (e.target.style.backgroundColor = '#333')}
//                                                 >
//                                                     See More
//                                                 </button>
//                                             </Link>
//                                         </center>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Show message when no results are found */}
//             {searchQuery !== '' && searchResults.length === 0 && (
//                 <div className="container mt-5">
//                     <h4>No results found for "{searchQuery}"</h4>
//                 </div>
//             )}

//             {/* Add custom styles in external CSS file */}
//             <style>
//                 {`
//                     .product-card {
//                         transition: transform 0.3s ease, box-shadow 0.3s ease;
//                         border-radius: 10px;
//                         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Add initial box shadow */
//                     }

//                     .product-card:hover {
//                         transform: translateY(-10px);
//                         box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
//                     }

//                     .product-title {
//                         font-family: 'Dancing Script', cursive;
//                         font-weight: 700;
//                         font-size: 24px;
//                         color: #333;
//                         transition: all 0.3s ease;
//                     }

//                     .product-price {
//                         font-size: 22px;
//                         color: red;
//                         font-weight: bold;
//                     }

//                     .product-card .card-body {
//                         display: flex;
//                         flex-direction: column;
//                         justify-content: space-between;
//                         align-items: center;
//                         text-align: center;
//                     }

//                     .product-card .card-body button {
//                         margin-top: 1px;
//                         font-size: 16px;
//                         padding: 10px 20px;
//                         background-color: #007bff;
//                         border: none;
//                         border-radius: 5px;
//                         color: white;
//                         cursor: pointer;
//                         transition: background-color 0.3s;
//                     }

//                     .product-card .card-body button:hover {
//                         background-color: #0056b3;
//                     }

//                     .container {
//                         margin-top: 60px;
//                     }
//                 `}
//             </style>
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
    const [allProducts, setAllProducts] = useState([]); 
    const [searchResults, setSearchResults] = useState([]);  
    const [loading, setLoading] = useState(false);  

    const navbarStyle = {
        backgroundColor: '#fff',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding : '23px'
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

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3200/list');
                setAllProducts(response.data);
            } catch (error) {
                console.error('Error fetching all products:', error);
            }
        };
        fetchAllProducts();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

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

    const handleSeeMore = (productId) => {
        console.log('See more details for product ID:', productId);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={navbarStyle}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <Link to="/" className="navbar-brand">
                        <img src="logo.png" alt="Logo" width="150" height="40" className="d-inline-block align-text-top" />
                    </Link>

                    {/* Centered Search Bar */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav mx-auto"> {/* Added 'mx-auto' to center the search bar */}
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
                            {/* Remove the cart count */}
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

            {/* Show all products initially when there is no search query */}
            {searchQuery === '' && allProducts.length > 0 && (
                <div className="container mt-5">
                    <br /><br /><br /><br/><br/>
                    <div className="row">
                        {allProducts.map((product) => (
                            <div key={product._id} className="col-12 col-md-4">
                                <div className="card mb-4 product-card">
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title product-title">{product.title}</h5>
                                        <p className="card-text product-price">Rs.{product.price}</p>
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
            )}

            {searchQuery !== '' && searchResults.length > 0 && (
                <div className="container mt-5">
                    <br /><br /><br /><br/><br/>
                    <div className="row">
                        {searchResults.map((product) => (
                            <div key={product._id} className="col-12 col-md-4">
                                <div className="card mb-4 product-card">
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title product-title">{product.title}</h5>
                                        <p className="card-text product-price">{product.price}</p>
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
            )}

            {/* Show message when no results are found */}
            {searchQuery !== '' && searchResults.length === 0 && (
                <div className="container mt-5">
                    <h4>No results found for "{searchQuery}"</h4>
                </div>
            )}

            {/* Add custom styles in external CSS file */}
            <style>
                {`
                    .product-card {
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Add initial box shadow */
                    }

                    .product-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
                    }

                    .product-title {
                        font-family: 'Dancing Script', cursive;
                        font-weight: 700;
                        font-size: 24px;
                        color: #333;
                        transition: all 0.3s ease;
                    }

                    .product-price {
                        font-size: 22px;
                        color: red;
                        font-weight: bold;
                    }

                    .product-card .card-body {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        text-align: center;
                    }

                    .product-card .card-body button {
                        margin-top: 1px;
                        font-size: 16px;
                        padding: 10px 20px;
                        background-color: #007bff;
                        border: none;
                        border-radius: 5px;
                        color: white;
                        cursor: pointer;
                    }

                    .product-card .card-body button:hover {
                        background-color: #0056b3;
                    }

                `}
            </style>
        </>
    );
}
