// import React from 'react';

// const Logo = () => {
//   return (
//     <div style={styles.logoContainer}>
//       <img src="logo.jpg" alt="Logo 2" style={styles.logoImage} />
//       <img src="logo2.jpg" alt="Logo 3" style={styles.logoImage} />
//       <img src="logo3.jpg" alt="Logo 4" style={styles.logoImage} />
//       <img src="logo4.jpg" alt="Logo 5" style={styles.logoImage} />
//       <img src="logo5.jpg" alt="Logo 6" style={styles.logoImage} />
//       <img src="logo6.jpg" alt="Logo 7" style={styles.logoImage} />
//     </div>
//   );
// };

// const styles = {
//     logoContainer: {
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         backgroundColor: 'white', 
//         padding: '20px', 
//     },
//   logoImage: {
//     margin: '10px', 
//     height: '120px', 
//   },
// };

// export default Logo;

import React from 'react';

const Logo = () => {
  return (
    <div style={styles.logoContainer}>
      <img src="logo.jpg" alt="Logo 2" style={styles.logoImage} />
      <img src="logo2.jpg" alt="Logo 3" style={styles.logoImage} />
      <img src="logo3.jpg" alt="Logo 4" style={styles.logoImage} />
      <img src="logo4.jpg" alt="Logo 5" style={styles.logoImage} />
      <img src="logo5.jpg" alt="Logo 6" style={styles.logoImage} />
      <img src="logo6.jpg" alt="Logo 7" style={styles.logoImage} />
    </div>
  );
};

const styles = {
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    padding: '20px',
  },
  logoImage: {
    margin: '10px',
    height: '120px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Adding transition for scaling and shadow
  },
  logoImageHover: {
    transform: 'scale(1.1)', // scaling the image on hover
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding a shadow when hovered
  }
};

// Adding hover effect by using hover CSS selector
const hoverStyle = {
  '&:hover': {
    transform: 'scale(1.1)', // zoom effect on hover
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // subtle shadow effect
  }
};

export default Logo;
