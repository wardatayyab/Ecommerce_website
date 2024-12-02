import React, { useEffect } from 'react';

function Collection2() {
  useEffect(() => {
    document.body.style.backgroundColor = 'white';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div style={styles.collectionContainer}>
      <ImageWithHoverEffect
        src="img23.jpg"
        alt="Men's Collection"
        title="Men's Collection"
        heading="DENIM JEANS"
        description="Available Men Collection"
        link="/men" 
      />
      <ImageWithHoverEffect
        src="img24.jpg"
        alt="Women's Collection"
        title="Women's Collection"
        heading="WESTERN WEAR"
        description="Available Women Collection"
        link="/women" 
      />
    </div>
  );
}

const styles = {
  collectionContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    padding: '40px 20px',
    width: '100%',
    maxWidth: '1300px',
  },
  image: {
    width: '95%',
    height: '270px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  content: {
    position: 'absolute',
    bottom: '50px',
    left: '20px',
    color: 'white',
  },
  collectionTitle: {
    color: '#87CEEB',
    fontSize: '16px',
    marginBottom: '5px',
  },
  collectionHeading: {
    fontSize: '22px',
    fontWeight: 'bold',
    margin: '5px 0',
    color: 'black',
  },
  collectionDescription: {
    color: '#888',
    fontSize: '14px',
    margin: '10px 0',
  },
  shopButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#87CEEB',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '7px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f8f8f8',
    marginTop: '20px',
  }
};

const ImageWithHoverEffect = ({ src, alt, title, heading, description, link }) => {
  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector('img');
        img.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('img');
        img.style.transform = 'scale(1)';
      }}
    >
      <img src={src} alt={alt} style={styles.image} />
      <div style={styles.content}>
        <h4 style={styles.collectionTitle}>{title}</h4>
        <h1 style={styles.collectionHeading}>{heading}</h1>
        <h5 style={styles.collectionDescription}>{description}</h5>
        <a href={link} style={styles.shopButton}>SHOP NOW</a> 
      </div>
    </div>
  );
}

export default Collection2;
