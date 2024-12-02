// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from './Header';

// export const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [rating, setRating] = useState(0);
//   const [cartItems, setCartItems] = useState([]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3200/list/${id}`);
//       if (response.data) {
//         setProduct(response.data);
//       } else {
//         console.error("Invalid product data received from the backend.");
//       }
//     } catch (error) {
//       console.error("Failed to fetch product details", error);
//     }
//   };

//   useEffect(() => {
//     fetchProductDetails();
//   }, [id]);

//   const handleAddToCart = async (productId) => {
//     try {
//       const response = await axios.post(`http://localhost:3200/cart/${productId}`, { quantity });
//       setCartItems(response.data.cart);
//       alert('Product added to cart');
//     } catch (error) {
//       console.error('Error adding product to cart', error);
//     }
//     navigate('/cart');
//   };

//   const handleRating = (index) => {
//     setRating(index + 1);
//   };

//   const totalPrice = (product && product.price && !isNaN(product.price))
//     ? (Number(product.price) * quantity).toFixed(2)
//     : 'Price not available';

//   const styles = {
//     page: {
//       background: 'linear-gradient(45deg, #f9f9f9, #e3e3e3)',
//       minHeight: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: '20px',
//       fontFamily: '"Roboto", sans-serif',
//     },
//     container: {
//       backgroundColor: '#ffffff',
//       borderRadius: '15px',
//       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//       overflow: 'hidden',
//       width: '100%',
//       maxWidth: '900px',
//       transition: 'transform 0.3s ease',
//     },
//     content: {
//       display: 'flex',
//       padding: '25px',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//     },
//     imageSection: {
//       flex: '1',
//       display: 'flex',
//       justifyContent: 'center',
//       padding: '20px',
//     },
//     image: {
//       width: '100%',
//       maxWidth: '550px',
//       maxHeight: '350px',
//       borderRadius: '15px',
//       boxShadow: '0 2px 12px rgba(0, 0, 0, 0.15)',
//       transition: 'transform 0.3s ease',
//     },
//     detailsSection: {
//       flex: '2',
//       padding: '20px',
//       backgroundColor: '#f9f9f9',
//     },
//     title: {
//       fontSize: '2.5em',
//       fontWeight: 'bold',
//       color: '#333',
//       marginBottom: '15px',
//       letterSpacing: '1px',
//     },
//     price: {
//       fontSize: '1.7em',
//       color: '#6da9e5',
//       fontWeight: 'bold',
//       marginBottom: '20px',
//       textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
//     },
//     info: {
//       marginBottom: '15px',
//       fontSize: '1.1em',
//       color: '#555',
//     },
//     buttonContainer: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       marginTop: '20px',
//     },
//     button: {
//       padding: '10px 12px',
//       fontSize: '1em',
//       fontWeight: 'bold',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '8px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s ease, transform 0.3s ease',
//       height: '45px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: '150px',
//     },
//     addToCartButton: {
//       backgroundColor: 'black',
//     },
//     deliveryInfo: {
//       fontSize: '0.9em',
//       color: '#888',
//       marginTop: '15px',
//       paddingTop: '15px',
//       borderTop: '1px solid #ddd',
//     },
//     quantityContainer: {
//       display: 'flex',
//       alignItems: 'center',
//       marginTop: '15px',
//     },
//     quantityInput: {
//       width: '60px',
//       marginRight: '15px',
//       padding: '7px',
//       borderRadius: '8px',
//       border: '1px solid #ccc',
//       fontSize: '1em',
//       textAlign: 'center',
//     },
//     starContainer: {
//       display: 'flex',
//       marginTop: '10px',
//     },
//     star: {
//       fontSize: '30px',
//       color: '#ffb400',
//       cursor: 'pointer',
//       marginRight: '8px',
//       transition: 'color 0.3s ease',
//     },
//     filledStar: {
//       color: '#ffb400',
//     },
//     '@media (max-width: 768px)': {
//       content: {
//         flexDirection: 'column',
//         alignItems: 'center',
//       },
//       imageSection: {
//         padding: '10px',
//       },
//       image: {
//         maxWidth: '100%',
//         maxHeight: '300px',
//       },
//       detailsSection: {
//         padding: '15px',
//       },
//       title: {
//         fontSize: '2em',
//       },
//       price: {
//         fontSize: '1.5em',
//       },
//       button: {
//         width: '100%',
//         marginTop: '15px',
//       },
//     },
//     '@media (max-width: 498px)': {
//       title: {
//         fontSize: '1.5em',
//       },
//       price: {
//         fontSize: '1.2em',
//       },
//       quantityInput: {
//         width: '50px',
//       },
//       image: {
//         maxWidth: '100%',
//         maxHeight: '300px',
//       },
//     },
//   };

//   return (
//     <>
//       <div style={styles.page}>
//         <div style={styles.container}>
//           <div style={styles.content}>
//             <div style={styles.imageSection}>
//               {product && <img style={styles.image} src={product.image} alt={product.title} />}
//             </div>
//             <div style={styles.detailsSection}>
//               {product ? (
//                 <>
//                   <h2 style={styles.title}>{product.title}</h2>
//                   <p style={styles.info}>Description: {product.description}</p>
//                   <p style={styles.price}>Price: Rs. {product.price}</p>
//                   <div style={styles.quantityContainer}>
//                     <input
//                       type="number"
//                       value={quantity}
//                       onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
//                       style={styles.quantityInput}
//                       min="1"
//                     />
//                     <label htmlFor="quantity">Quantity</label>
//                   </div>
//                   <div style={styles.starContainer}>
//                     {[...Array(5)].map((_, index) => (
//                       <span
//                         key={index}
//                         style={{
//                           ...styles.star,
//                           ...(index < rating ? styles.filledStar : {}),
//                         }}
//                         onClick={() => handleRating(index)}
//                       >
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                   <div style={styles.buttonContainer}>
//                    <center>
//                   <button
//                       style={{ ...styles.button, ...styles.addToCartButton }}
//                       onClick={() => handleAddToCart(product._id)}
//                     >
//                       Add to Cart
//                     </button>
//                    </center>
//                   </div>
//                   <div style={styles.deliveryInfo}>
//                     <p>Standard Delivery: Rs. 135 (5-8 Days)</p>
//                     <p>Return Policy: 14 Days Easy Return</p>
//                     <p>Warranty: 1 Year Brand Warranty</p>
//                   </div>
//                 </>
//               ) : (
//                 <p>Loading...</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetail;









import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3200/list/${id}`);
      if (response.data) {
        setProduct(response.data);
      } else {
        console.error("Invalid product data received from the backend.");
      }
    } catch (error) {
      console.error("Failed to fetch product details", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.post(`http://localhost:3200/cart/${productId}`, { quantity });
      setCartItems(response.data.cart);
      alert('Product added to cart');
    } catch (error) {
      console.error('Error adding product to cart', error);
    }
    navigate('/cart');
  };

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const totalPrice = (product && product.price && !isNaN(product.price))
    ? (Number(product.price) * quantity).toFixed(2)
    : 'Price not available';

  const styles = {
    page: {
      background: 'linear-gradient(45deg, #f9f9f9, #e3e3e3)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: '"Roboto", sans-serif',
    },
    container: {
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '900px',
      transition: 'transform 0.3s ease',
    },
    content: {
      display: 'flex',
      padding: '25px',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    imageSection: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
    },
    image: {
      width: '100%',
      maxWidth: '550px',
      maxHeight: '350px',
      borderRadius: '15px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.15)',
      transition: 'transform 0.3s ease',
    },
    detailsSection: {
      flex: '2',
      padding: '20px',
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: '2.5em',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '15px',
      letterSpacing: '1px',
    },
    price: {
      fontSize: '1.7em',
      color: '#6da9e5',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    },
    info: {
      marginBottom: '15px',
      fontSize: '1.1em',
      color: '#555',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    button: {
      padding: '10px 12px',
      fontSize: '1em',
      fontWeight: 'bold',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      height: '45px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '150px',
    },
    addToCartButton: {
      backgroundColor: 'black',
    },
    deliveryInfo: {
      fontSize: '0.9em',
      color: '#888',
      marginTop: '15px',
      paddingTop: '15px',
      borderTop: '1px solid #ddd',
    },
    quantityContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '15px',
    },
    quantityInput: {
      width: '60px',
      marginRight: '15px',
      padding: '7px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '1em',
      textAlign: 'center',
    },
    starContainer: {
      display: 'flex',
      marginTop: '10px',
    },
    star: {
      fontSize: '30px',
      color: '#ffb400',
      cursor: 'pointer',
      marginRight: '8px',
      transition: 'color 0.3s ease',
    },
    filledStar: {
      color: '#ffb400',
    },
    '@media (max-width: 768px)': {
      content: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      imageSection: {
        padding: '10px',
      },
      image: {
        maxWidth: '100%',
        maxHeight: 'auto', // Allow image height to adjust
      },
      detailsSection: {
        padding: '15px',
      },
      title: {
        fontSize: '2em',
      },
      price: {
        fontSize: '1.5em',
      },
      button: {
        width: '100%',
        marginTop: '15px',
      },
    },
    '@media (max-width: 498px)': {
      title: {
        fontSize: '1.5em',
      },
      price: {
        fontSize: '1.2em',
      },
      quantityInput: {
        width: '50px',
      },
      image: {
        maxWidth: '100%',
        maxHeight: 'auto', // Allow image height to adjust on small screens
      },
    },
  };

  return (
    <>
      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.content}>
            <div style={styles.imageSection}>
              {product && <img style={styles.image} src={product.image} alt={product.title} />}
            </div>
            <div style={styles.detailsSection}>
              {product ? (
                <>
                  <h2 style={styles.title}>{product.title}</h2>
                  <p style={styles.info}>Description: {product.description}</p>
                  <p style={styles.price}>Price: Rs. {product.price}</p>
                  <div style={styles.quantityContainer}>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      style={styles.quantityInput}
                      min="1"
                    />
                    <label htmlFor="quantity">Quantity</label>
                  </div>
                  <div style={styles.starContainer}>
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        style={{
                          ...styles.star,
                          ...(index < rating ? styles.filledStar : {}),
                        }}
                        onClick={() => handleRating(index)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div style={styles.buttonContainer}>
                   <center>
                  <button
                      style={{ ...styles.button, ...styles.addToCartButton }}
                      onClick={() => handleAddToCart(product._id)}
                    >
                      Add to Cart
                    </button>
                   </center>
                  </div>
                  <div style={styles.deliveryInfo}>
                    <p>Standard Delivery: Rs. 135 (5-8 Days)</p>
                    <p>Return Policy: 14 Days Easy Return</p>
                    <p>Warranty: 1 Year Brand Warranty</p>
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
