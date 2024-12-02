import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart, FaEye, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; 

const Collection1 = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [liked, setLiked] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const cardData = [
    {
      src: 'dress1.webp',
      alt: 'Image 1',
      links: {
        view: '/product1',
      },
      sale: {
        label: 'On Sale',
        discount: '-40%',
      },
    },
    {
      src: 'women9.jpg',
      alt: 'Image 2',
      links: {
        view: '/product2',
      },
      sale: {
        label: 'On Sale',
        discount: '-40%',
      },
    },
    {
      src: 'men1.jpg',
      alt: 'Image 3',
      links: {
        view: '/product3',
      },
      sale: {
        label: 'On Sale',
        discount: '-40%',
      },
    },
    {
      src: 'men3.jpg',
      alt: 'Image 4',
      links: {
        view: '/product4',
      },
      sale: {
        label: 'On Sale',
        discount: '-40%',
      },
    },
  ];

  const secondRowCardData = [
    {
      src: 'boy3.jpg',
      alt: 'Image 5',
      links: {
        view: '/product5',
      },
      sale: {
        label: 'On Sale',
        discount: '-40%',
      },
    },
    {
      src: 'boy4.jpg',
      alt: 'Image 6',
      links: {
        view: '/product6',
      },
      sale: {
        label: 'On Sale',
        discount: '-40%',
      },
    },
    {
      src: 'girl11.jpg',
      alt: 'Image 7',
      links: {
        view: '/product7',
      },
      sale: {
        label: 'On Sale',
        discount: '-40%',
      },
    },
    {
      src: 'girl12.jpg',
      alt: 'Image 8',
      links: {
        view: '/product8',
      },
      sale: {
        label: 'On Sale',
        discount: '-40%',
      },
    },
  ];

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#007bFF',
    textTransform: 'uppercase',
    
    letterSpacing: '2px',
    marginBottom: '20px',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  };

  const cardStyle = {
    width: '85%',
    height: '350px',
    border: 'none',
    position: 'relative',
    overflow: 'hidden',
    margin: '0 2px',
    cursor: 'pointer',
  };

  const saleStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: '#F0A329',
    color: 'white',
    padding: '3px 5px',
    borderRadius: '5px',
    zIndex: 1,
    fontSize: '0.8rem',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 1,
  };

  const iconsStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iconWrapperStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '50%',
    padding: '8px',
    margin: '0 2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleMouseEnter = (index) => {
    setVisibleIndex(index);
  };

  const handleMouseLeave = () => {
    if (clickedIndex === null) {
      setVisibleIndex(null);
    }
  };

  const handleClick = (index) => {
    setClickedIndex(index);
    setTimeout(() => {
      setClickedIndex(null);
    }, 2000);
  };

  const handleHeartClick = (index) => {
    const updatedLikes = [...liked];
    if (updatedLikes.includes(index)) {
      updatedLikes.splice(updatedLikes.indexOf(index), 1);
    } else {
      updatedLikes.push(index);
    }
    setLiked(updatedLikes);
  };

  const handleQuickView = (product) => {
    // Show SweetAlert modal with only the image, a close button, and no confirm button
    Swal.fire({
      imageUrl: product.src,  // Display the image
      imageAlt: product.alt,  // Provide alt text for the image
      showConfirmButton: false,  // Remove the confirm button
      showCloseButton: true,  // Add the close (X) button
      background: 'white',  // Set background color to black
      imageWidth: '100%',  // Optional: adjust the width of the image
      imageHeight: '600',  // Optional: adjust the height of the image
      imageAlt: 'Product Image',  // Optional: alt text for accessibility
      customClass: {
        popup: 'no-button-popup',  // Apply custom class for styling if needed
        closeButton: 'close-btn'  // Custom class for close button styling if needed
      }
    });
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', color: 'black' }}>
      <div style={{ textAlign: 'center' }}>
      <h2
  style={{
    fontSize: '35px',
    paddingTop: '50px',
    paddingBottom: '40px',
    fontFamily: 'Georgia, serif',
    fontWeight: '1200',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', // Adding text shadow
  }}
>
  FEATURED PRODUCTS
</h2>

      </div>
      <div className="container" style={{ maxWidth: '1500px', margin: '0 auto' }}>
        <div className="row justify-content-center" style={{ margin: '0' }}>
          {cardData.map((card, index) => (
            <div className="col-md-3 d-flex justify-content-center" key={index} style={{ padding: '0' }}>
              <div
                className="card"
                style={cardStyle}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div style={saleStyle}>
                  {card.sale.label} <span>{card.sale.discount}</span>
                </div>
                <img
                  src={card.src}
                  className="card-img"
                  alt={card.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    cursor: 'pointer',
                  }}
                />
                <div style={overlayStyle}></div>
                <div
                  className="d-flex justify-content-center"
                  style={{
                    ...iconsStyle,
                    opacity: visibleIndex === index || clickedIndex === index ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                
                  <div style={iconWrapperStyle} onClick={() => handleQuickView(card)}>
                    <FaEye style={{ color: 'white', fontSize: '1.2rem' }} />
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row of Cards */}
        <div className="row justify-content-center" style={{ margin: '0', marginTop: '30px' }}>
          {secondRowCardData.map((card, index) => (
            <div className="col-md-3 d-flex justify-content-center" key={index + cardData.length} style={{ padding: '0' }}>
              <div
                className="card"
                style={cardStyle}
                onMouseEnter={() => handleMouseEnter(index + cardData.length)}
                onMouseLeave={handleMouseLeave}
              >
                <div style={saleStyle}>
                  {card.sale.label} <span>{card.sale.discount}</span>
                </div>
                <img
                  src={card.src}
                  className="card-img"
                  alt={card.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    cursor: 'pointer',
                  }}
                />
                <div style={overlayStyle}></div>
                <div
                  className="d-flex justify-content-center"
                  style={{
                    ...iconsStyle,
                    opacity: visibleIndex === index + cardData.length || clickedIndex === index + cardData.length ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <div style={iconWrapperStyle} onClick={() => handleQuickView(card)}>
                    <FaEye style={{ color: 'white', fontSize: '1.2rem' }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection1;


