import React, { useState, useEffect } from 'react';

const ReactMultiCarousel = () => {
    const images = [
        'women9.jpg',
        'men3.jpg',
        'boy3.jpg',
        'gir11.jpg',
        'bangle3.jpg',
        'watch10.jpg',
        'perfume5.jpg',
        'bag3.jpg',
        'bot2.jpg',
        'bot.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4); // Default to 4 items

    // Adjust itemsToShow based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsToShow(1); // Show 1 item on small screens
            } else if (window.innerWidth <= 1024) {
                setItemsToShow(2); // Show 2 items on medium screens
            } else {
                setItemsToShow(4); // Show 4 items on large screens
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsToShow < images.length ? prevIndex + itemsToShow : prevIndex
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - itemsToShow >= 0 ? prevIndex - itemsToShow : prevIndex
        );
    };

    return (
        <div style={styles.container}>
            <div style={{ textAlign: 'center' }}>
                <h2
                    style={{
                        fontSize: '35px',
                        paddingTop: '30px',
                        marginBottom: '-15px',
                        paddingBottom: '40px',
                        fontFamily: 'Georgia, serif',
                        fontWeight: '1200',
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    RECENTLY PRODUCTS
                </h2>
            </div>
            <br />
            <div style={styles.sliderContainer}>
                <button style={{ ...styles.arrowButton, left: '20px' }} onClick={prevSlide}>&lt;</button>
                <div style={styles.slider}>
                    {images.slice(currentIndex, currentIndex + itemsToShow).map((src, index) => (
                        <div key={index} style={styles.card}>
                            <img
                                src={src}
                                alt={`Image ${currentIndex + index + 1}`}
                                style={styles.image}
                                className="carousel-image"
                            />
                        </div>
                    ))}
                </div>
                <button style={{ ...styles.arrowButton, right: '30px' }} onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        textAlign: 'center',
        padding: '20px',
        perspective: '1000px',
    },
    sliderContainer: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
    },
    slider: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s ease-in-out',
    },
    card: {
        marginRight: '10px',
        transition: 'transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '250px',
        height: '300px',
        borderRadius: '10px',
        transition: 'transform 0.3s ease',
        objectFit: 'cover',
        objectPosition: 'top',
    },
    arrowButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: 'none',
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'white',
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '10',
        padding: '10px',
        borderRadius: '50%',
    },
};

export default ReactMultiCarousel;
