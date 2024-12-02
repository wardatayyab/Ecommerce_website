import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

const CardGallery = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const cardData = [
        { src: 'img8.jpg', count: 5, messageCount: 2 },
        { src: 'img9.jpg', count: 3, messageCount: 1 },
        { src: 'img10.jpg', count: 8, messageCount: 4 },
        { src: 'img11.jpg', count: 12, messageCount: 5 },
        { src: 'img12.jpg', count: 1, messageCount: 0 },
        { src: 'img13.jpg', count: 4, messageCount: 3 },
        { src: 'img14.jpg', count: 7, messageCount: 2 },
    ];

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '20px',
        },
        followSection: {
            textAlign: 'center',
            marginBottom: '0',
        },
        followText: {
            fontSize: '20px',
            color: '#87a0b2',
            
            marginBottom: '0', 
        },
        instagramHandle: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#000',
            marginBottom: '20px',
        },
        cardContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            maxWidth: '100%',
            overflowX: 'auto',
            padding: 0,
        },
        card: {
            flex: '0 0 auto',
            margin: '0',
            maxWidth: '14%',
            position: 'relative',
        },
        cardImage: {
            width: '100%',
            height: 'auto',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            color: 'white',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            flexDirection: 'row', 
        },
        overlayVisible: {
            opacity: 1,
        },
        icon: {
            marginLeft: '5px',
            display: 'flex',
            alignItems: 'center',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.followSection}>
                <p style={styles.followText}>follow us on instagram</p>
                <p style={styles.instagramHandle}>@ORGANICK_MARKET</p>
            </div>
            <div style={styles.cardContainer}>
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        style={styles.card}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={card.src} alt={`Image ${index + 1}`} style={styles.cardImage} />
                        <div
                            style={{
                                ...styles.overlay,
                                ...(hoveredIndex === index ? styles.overlayVisible : {}),
                            }}
                        >
                            <div style={styles.icon}>
                                <FontAwesomeIcon icon={faHeart} />
                                <span>{card.count}</span>
                            </div>
                            <div style={styles.icon}>
                                <FontAwesomeIcon icon={faComment} />
                                <span>{card.messageCount}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardGallery;
