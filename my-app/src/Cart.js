// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom'; 
// import axios from "axios";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51QJyZAP8iOxx9lGYrwuY7x1ErDf94DVgx1EKLJnM8agrEWiailC2krnfssp5T9g3zbdqJSRi35Fr79sI4t68H0yn00YrrxkIF5"
// );

// export const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [orderNotes, setOrderNotes] = useState(""); 
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get("http://localhost:3200/cart");
//         setCartItems(response.data.map((item) => ({ ...item, quantity: 1 })));
//       } catch (error) {
//         console.error("Error fetching cart items", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   const handleIncreaseQuantity = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const handleDecreaseQuantity = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const handleRemoveFromCart = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3200/cart/${id}`);
//       setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
//     } catch (error) {
//       console.error("Error removing item from cart", error);
//     }
//   };

//   const handleCheckout = async (items) => {
//     const stripe = await stripePromise;
//     try {
//       const response = await axios.post(
//         "http://localhost:3200/create-checkout-session",
//         { items }
//       );
//       const { id } = response.data;
//       await stripe.redirectToCheckout({ sessionId: id });
//     } catch (error) {
//       console.error("Checkout error:", error);
//     }
//   };

//   const styles = {
//     container :{
//       display: "flex",
//     flexWrap: "wrap",
//     },
//       firstcontainer: {
//         width: "800px",
        
//         marginLeft: "30px",
//         marginRight: "auto",
//         padding: "20px",
//         background: 'transparent',
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//         border: "1px solid rgba(0, 0, 0, 0.2)",
//         borderRadius: "8px",
//         marginTop: "50px", // Add consistent marginTop to both containers
//       },
//       // secondContainer: {
//       //   width: "30%",
//       //   maxWidth: "380px",
//       //   position: "absolute",  // Use absolute positioning to keep it fixed in the layout
//       //   top: "225px",           // Adjust the top value as per your design
//       //   right: "20px",         // Position it to the right side
//       //   padding: "20px",
//       //   backgroundColor: "transparent",
//       //   borderRadius: "8px",
//       // },
    
//     heading: {
//       textAlign: "center",
//       fontSize: "32px",
//       fontFamily: "Georgia, serif",
//       fontWeight: "bold",
//       margin: "20px 0",
//     },
//     cartItem: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: "20px",
//       flexDirection: "row",
//       cursor: "pointer",
//     },
//     divider: {
//       border: "none",
//       borderTop: "2px solid rgba(0, 0, 0, 0.3)",
//       margin: "10px 0",
//     },
//     image: {
//       maxWidth: "120px",
//       marginLeft: "30px",
//       marginRight: "20px",
//     },
//     info: {
//       flex: 1,
//       textAlign: "left",
//     },
//     actions: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "flex-start",
//     },
//     quantityContainer: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-start",
//     },
//     button: {
//       margin: "5px",
//       padding: "5px 10px",
//       borderRadius: "5px",
//       backgroundColor: "transparent",
//       border: "1px solid rgba(0, 0, 0, 0.3)",
//       cursor: "pointer",
//     },
//     iconButton: {
//       padding: "5px",
//       backgroundColor: "transparent",
//       border: "none",
//       cursor: "pointer",
//     },
//     proceed : {
//   marginLeft : '-40px',
//     },
//     price: {
//       marginTop: "5px",
//       marginRight : '25px',
//       fontSize: "14px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     title: {
//       textTransform: 'uppercase',
//       fontFamily: 'serif',
//       fontSize: '20px',
//     },
//     totals: {
//       textAlign: "right",
//       marginTop: "20px",
//     },
//     emptyCartMessage: {
//       fontSize: "24px",
//       fontWeight: "bold",
//       textAlign: "center",
//       margin: "20px 0",
//     },
//     continueButton: {
//       display: "block",
//       margin: "20px auto",
//       padding: "10px 20px",
//       backgroundColor: "#000",
//       color: "#fff",
//       border: "none",
//       cursor: "pointer",
//     },
//     priceSize: {
//       fontSize: "12px",
//       color: "#888",
//     },
//     totalItems: {
//       marginTop: "10px",
//       fontWeight: "bold",
//       fontSize: "14px",
//     },
//     orderNotesContainer: {
//       marginBottom: "10px",
//     },
//     orderNotesBox: {
//       width: "100%",
//       height: "100px",
//       padding: "10px",
//       borderRadius: "5px",
//       border: "1px solid rgba(0, 0, 0, 0.3)",
//       fontSize: "14px",
//       resize: "none",
//     },
//     clickableText: {
//       color: "black",
//       marginRight : '30px',
//       cursor: "pointer",
//     },
//     continueButton: {
//       display: "block",
//       margin: "20px auto",
//       padding: "10px 36px",
//       backgroundColor: "#000",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//     },
//     checkoutButton: {
//       display: "block",
//       margin: "20px auto",
//       padding: "10px 30px",
//       backgroundColor: "#000",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//     },
//     secondContainer: {
//       width: "30%",
//       maxWidth: "380px",
//       position: "absolute",
//       top: "225px",
//       right: "20px",
//       padding: "20px",
//       backgroundColor: "transparent",
//       borderRadius: "8px",
//     },
//     /* Media Queries (for mobile devices) */
//     "@media (max-width: 498px)": {
//       secondContainer: {
//         width: "90%",
//         position: "relative",
//         top: "476px",
//         right: "auto",
//         marginTop: "",
//         marginLeft: "auto",
//       },
//     },    
//   };


//   return (
//     <>
//       <Header />
//       <br></br><br></br>  <br></br><br></br>  <br></br>
//       <h1 style={styles.heading}>SHOPPING CART</h1>
//      {/* <div style={styles.container}> */}
//  {/* First container */}
//  <br></br>
//  <div style={styles.firstcontainer}>
//         {loading ? (
//           <p>Loading cart items...</p>
//         ) : cartItems.length > 0 ? (
//           cartItems.map((item, index) => (
//             <React.Fragment key={item._id}>
//               <div style={styles.cartItem}>
//                 <img src={item.image} alt={item.title} style={styles.image} />
//                 <div style={styles.info}>
//                   <p style={styles.title}>
//                     <strong>{item.title}</strong>
//                   </p>
//                   <p style={styles.priceSize}>Size: {item.size ? item.size : "Free Size"}</p>
//                   <div style={styles.quantityContainer}>
//                     <button style={styles.button} onClick={() => handleDecreaseQuantity(item._id)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button style={styles.button} onClick={() => handleIncreaseQuantity(item._id)}>+</button>
//                   </div>
//                   <p style={styles.totalItems}>Item Total: {item.quantity}</p>
//                 </div>
//                 <div style={styles.actions}>
//                   <p><strong>Rs.{item.price}</strong></p>
//                   <button style={styles.iconButton} onClick={() => handleRemoveFromCart(item._id)}>
//                     <i className="fas fa-trash"></i>
//                   </button>
//                   <p style={styles.price}>Rs. {(parseFloat(item.price) * item.quantity).toFixed(0)}</p>
//                 </div>
//               </div>
//               {index < cartItems.length - 1 && <hr style={styles.divider} />}
//             </React.Fragment>
//           ))
//         ) : (
//           <>
//             <p style={styles.emptyCartMessage}>Your cart is empty</p>
//             <button style={styles.continueButton} onClick={() => (window.location.href = "/")}>
//               Continue Shopping
//             </button>
//           </>
//         )}
//       </div>

    
//       {/* Second container (Order Notes and Order Summary) */}
//       {cartItems.length > 0 && (
//         <div style={styles.secondContainer}>
//           <div style={styles.orderNotesContainer}>
//             <label htmlFor="orderNotes">Order Notes</label>
//             <textarea
//               id="orderNotes"
//               style={styles.orderNotesBox}
//               value={orderNotes}
//               onChange={(e) => setOrderNotes(e.target.value)}
//               placeholder="Add special instructions for your order..."
//             />
//           </div>
//           <div style={styles.totals}>
//           <p>
//   <strong style={{ fontWeight: 'bold', fontSize: '18px', color: '#333', marginRight: '170px' }}>
//     Subtotal:
//   </strong>
//   Rs. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(0)}
// </p>

//           <p>
//             <span style={styles.clickableText} onClick={() => navigate('/taxe')}>
//             Taxes and shipping calculated at checkout 
//             </span>
//           </p><center>
//           <button style={styles.continueButton} onClick={() => (window.location.href = "/")}>
//                 Continue Shopping
//               </button>
//   <button
//     style={styles.checkoutButton}
//     onClick={() => handleCheckout(cartItems)}
//   >
//     Proceed to Checkout
//   </button>


// </center>

//           </div>
//         </div> 
//       )};
//      {/* </div> */}
//      {/* <br></br>
//       <Footer/> */}
//     </>
//   );
// };








import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; 
import Header from "./Components/Header";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QJyZAP8iOxx9lGYrwuY7x1ErDf94DVgx1EKLJnM8agrEWiailC2krnfssp5T9g3zbdqJSRi35Fr79sI4t68H0yn00YrrxkIF5"
);

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderNotes, setOrderNotes] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:3200/cart");
        setCartItems(response.data.map((item) => ({ ...item, quantity: 1 })));
      } catch (error) {
        console.error("Error fetching cart items", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:3200/cart/${id}`);
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  };

  const handleCheckout = async (items) => {
    const stripe = await stripePromise;
    try {
      const response = await axios.post(
        "http://localhost:3200/create-checkout-session",
        { items }
      );
      const { id } = response.data;
      await stripe.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };
  const styles = {
    container : {
      display : "flex",
      flexWrap : "wrap",
      justifyContent : "space-around",
      width : "100%",
      height : "95vh",
    },
    box :{      
      width : "800px",
      padding: "20px",
      background: 'transparent',
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
    },
    box2 : {
     width : "400px",
      height : "200px",  
    },
    container2 : {
      display : "flex",
      flexWrap : "wrap",
    },
    box3 : {
      width : "800px",
      padding: "20px",
      background: 'transparent',
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
    },
    heading: {
      textAlign: "center",
      fontSize: "32px",
      fontFamily: "Georgia, serif",
      fontWeight: "bold",
      margin: "20px 0",
    },
    cartItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      flexDirection: "row",
      cursor: "pointer",
    },
    divider: {
      border: "none",
      borderTop: "2px solid rgba(0, 0, 0, 0.3)",
      margin: "10px 0",
    },
    image: {
      maxWidth: "120px",
      marginLeft: "30px",
      marginRight: "20px",
    },
    info: {
      flex: 1,
      textAlign: "left",
    },
    actions: {
      display: "flex",
     flexWrap : "wrap",
     flexDirection: "column",
     alignItems: "flex-start",
    },
    quantityContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    button: {
      margin: "5px",
      padding: "5px 10px",
      borderRadius: "5px",
      backgroundColor: "transparent",
      border: "1px solid rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
    },
    iconButton: {
      padding: "5px",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
    },
    proceed : {
  marginLeft : '-40px',
    },
    price: {
      marginTop: "5px",
      marginRight : '25px',
      fontSize: "14px",
      fontWeight: "bold",
      color: "#333",
    },
    title: {
      textTransform: 'uppercase',
      fontFamily: 'serif',
      fontSize: '20px',
    },
    totals: {
      textAlign: "right",
      marginTop: "20px",
    },
    emptyCartMessage: {
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "20px 0",
    },
    continueButton: {
      display: "block",
      margin: "20px auto",
      padding: "10px 20px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    },
    priceSize: {
      fontSize: "12px",
      color: "#888",
    },
    totalItems: {
      marginTop: "10px",
      fontWeight: "bold",
      fontSize: "14px",
    },
    orderNotesContainer: {
      marginBottom: "10px",
    },
    orderNotesBox: {
      width: "100%",
      height: "100px",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid rgba(0, 0, 0, 0.3)",
      fontSize: "14px",
      resize: "none",
    },
    clickableText: {
      color: "black",
      marginRight : '40px',
      cursor: "pointer",
    },
    continueButton: {
      display: "block",
      margin: "20px auto",
      padding: "10px 36px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    checkoutButton: {
      display: "block",
      margin: "20px auto",
      padding: "10px 30px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  }
  return (
    <>
    <Header/>
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <div style={styles.container}>
      <div style={styles.box}>
    {loading ? (
          <p>Loading cart items...</p>
        ) : cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <React.Fragment key={item._id}>
              <div style={styles.cartItem}>
                <img src={item.image} alt={item.title} style={styles.image} />
                <div style={styles.info}>
                  <p style={styles.title}>
                    <strong>{item.title}</strong>
                  </p>
                  <p style={styles.priceSize}>Size: {item.size ? item.size : "Free Size"}</p>
                  <div style={styles.quantityContainer}>
                    <button style={styles.button} onClick={() => handleDecreaseQuantity(item._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button style={styles.button} onClick={() => handleIncreaseQuantity(item._id)}>+</button>
                  </div>
                  <p style={styles.totalItems}>Item Total: {item.quantity}</p>
                </div>
                <div style={styles.actions}>
                  <p><strong>Rs.{item.price}</strong></p>
                  <button style={styles.iconButton} onClick={() => handleRemoveFromCart(item._id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                  <p style={styles.price}>Rs. {(parseFloat(item.price) * item.quantity).toFixed(0)}</p>
                </div>
              </div>
              {index < cartItems.length - 1 && <hr style={styles.divider} />}
            </React.Fragment>
          ))
        ) : (
          <>
            <p style={styles.emptyCartMessage}>Your cart is empty</p>
            <button style={styles.continueButton} onClick={() => (window.location.href = "/")}>
              Continue Shopping
            </button>
          </>
        )}
    </div>
      <div style={styles.box2}>
      {cartItems.length > 0 && (
        <div style={styles.secondContainer}>
          <div style={styles.orderNotesContainer}>
            <label htmlFor="orderNotes">Order Notes</label>
            <textarea
              id="orderNotes"
              style={styles.orderNotesBox}
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              placeholder="Add special instructions for your order..."
            />
          </div>
          <div style={styles.totals}>
          <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#333', textAlign: 'center'}}>
  <strong >
    Subtotal:
  </strong>
  Rs. {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(0)}
</p>

          <p>
            <span style={styles.clickableText} onClick={() => navigate('/taxe')}>
            Taxes and shipping calculated at checkout 
            </span>
          </p><center>
          <button style={styles.continueButton} onClick={() => (window.location.href = "/")}>
                Continue Shopping
              </button>
  <button
    style={styles.checkoutButton}
    onClick={() => handleCheckout(cartItems)}
  >
    Proceed to Checkout
  </button>


</center>

          </div>
        </div> 
      )}
      </div>
    </div>
    </>
  )
}



