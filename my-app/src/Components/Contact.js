// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import Swal from 'sweetalert2'; 
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault(); 
//     Swal.fire({
//       icon: 'success',
//       title: 'Message Sent!',
//       text: 'Your message has been sent successfully.',
//       confirmButtonText: 'OK',
//     });
//   };

//   return (
//     <>
//       <Header />
//       <div style={styles.contactContainer}>
//         <h1 style={styles.contactTitle}>Contact Detail</h1>
//         <h5 style={styles.contactDescription}>
//           Quis posuere ligula. Fusce in odio ac diam finibus tempus. Suspendisse potenti. Etiam accumsan purus <br />
//           magna, evera aramus consequat, felis at aliquam consectetur.
//         </h5>
//         <div style={styles.contactDetails}>
//           <div style={styles.contactItem}>
//             <i className="fas fa-home" style={styles.icon}></i>
//             <h2 style={styles.itemTitle}>Address</h2>
//             <p>1800 Abbot Kinney Blvd. Unit D&E<br />Venice, CA 90291</p>
//           </div>
//           <div style={{ ...styles.contactItem, ...styles.phoneItem }}>
//             <i className="fas fa-phone" style={styles.icon}></i>
//             <h2 style={styles.itemTitle}>Phone</h2>
//             <p>Mobile: (+88) 1990-6886<br />Hotline: 1800-1102</p>
//           </div>
//           <div style={styles.contactItem}>
//             <i className="fas fa-envelope" style={styles.icon}></i>
//             <h2 style={styles.itemTitle}>Email</h2>
//             <p>support@bionic-market.com<br />contact@bionic-market.com</p>
//           </div>
//         </div>
//         <div style={styles.formContainer}>
//           <h2 style={styles.formTitle}>Contact Us</h2>
//           <form style={styles.form} onSubmit={handleSubmit}>
//             <input type="text" placeholder="Your Name" style={styles.input} required />
//             <input type="email" placeholder="Your Email" style={styles.input} required />
//             <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
//             <button type="submit" style={styles.submitButton}>Send Message</button>
//           </form>
//         </div>
//         <div style={styles.mapContainer}>
//           <h2 style={styles.mapTitle}>Our Location</h2>
//           <iframe
//             title="Google Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090493!2d144.95373531568266!3d-37.81720997975103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11c9a3%3A0x5045675218cee7c0!2sBionic%20Market!5e0!3m2!1sen!2sau!4v1615391854468!5m2!1sen!2sau"
//             width="100%"
//             height="300"
//             style={styles.map}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// const styles = {
//   contactContainer: {
//     textAlign: 'center',
//     padding: '50px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   contactTitle: {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginBottom: '20px',
//     marginTop: '100px',
//   },
//   contactDescription: {
//     color: '#777',
//     marginBottom: '30px',
//   },
//   contactDetails: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//   },
//   contactItem: {
//     backgroundColor: '#f9f9f9',
//     padding: '20px',
//     width: '250px',
//     textAlign: 'center',
//     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//     borderRadius: '8px',
//   },
//   phoneItem: {
//     backgroundColor: '#007bff',
//     color: 'white',
//   },
//   icon: {
//     fontSize: '2rem',
//     marginBottom: '10px',
//   },
//   itemTitle: {
//     fontSize: '1.25rem',
//     margin: '10px 0',
//   },
//   formContainer: {
//     marginTop: '40px',
//     textAlign: 'left',
//     maxWidth: '500px',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     background: '#f9f9f9',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   formTitle: {
//     fontSize: '1.5rem',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//   },
//   input: {
//     padding: '10px',
//     marginBottom: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//   },
//   textarea: {
//     padding: '10px',
//     marginBottom: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     height: '100px',
//   },
//   submitButton: {
//     padding: '10px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s, transform 0.3s',
//   },
//   mapContainer: {
//     marginTop: '40px',
//   },
//   mapTitle: {
//     fontSize: '1.5rem',
//     marginBottom: '20px',
//   },
//   map: {
//     border: '0',
//   },
// };

// export default Contact;





import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Swal from 'sweetalert2'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Your message has been sent successfully.',
      confirmButtonText: 'OK',
    });
  };

  return (
    <>
      <Header />
      <div style={styles.contactContainer}>
        <h1 style={styles.contactTitle}>Contact Detail</h1>
        <h5 style={styles.contactDescription}>
          Quis posuere ligula. Fusce in odio ac diam finibus tempus. Suspendisse potenti. Etiam accumsan purus <br />
          magna, evera aramus consequat, felis at aliquam consectetur.
        </h5>
        <div style={styles.contactDetails}>
          <div style={styles.contactItem}>
            <i className="fas fa-home" style={styles.icon}></i>
            <h2 style={styles.itemTitle}>Address</h2>
            <p>1800 Abbot Kinney Blvd. Unit D&E<br />Venice, CA 90291</p>
          </div>
          <div style={{ ...styles.contactItem, ...styles.phoneItem }}>
            <i className="fas fa-phone" style={styles.icon}></i>
            <h2 style={styles.itemTitle}>Phone</h2>
            <p>Mobile: (+88) 1990-6886<br />Hotline: 1800-1102</p>
          </div>
          <div style={styles.contactItem}>
            <i className="fas fa-envelope" style={styles.icon}></i>
            <h2 style={styles.itemTitle}>Email</h2>
            <p>support@bionic-market.com<br />contact@bionic-market.com</p>
          </div>
        </div>
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>Contact Us</h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" style={styles.input} required />
            <input type="email" placeholder="Your Email" style={styles.input} required />
            <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
            <button type="submit" style={styles.submitButton}>Send Message</button>
          </form>
        </div>
        <div style={styles.mapContainer}>
          <h2 style={styles.mapTitle}>Our Location</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090493!2d144.95373531568266!3d-37.81720997975103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11c9a3%3A0x5045675218cee7c0!2sBionic%20Market!5e0!3m2!1sen!2sau!4v1615391854468!5m2!1sen!2sau"
            width="100%"
            height="300"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  contactContainer: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  contactTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginTop: '100px',
  },
  contactDescription: {
    color: '#777',
    marginBottom: '30px',
  },
  contactDetails: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap', // Makes the items stack on smaller screens
  },
  contactItem: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    marginBottom: '20px', // Adds spacing for smaller screens
  },
  phoneItem: {
    backgroundColor: '#007bff',
    color: 'white',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  itemTitle: {
    fontSize: '1.25rem',
    margin: '10px 0',
  },
  formContainer: {
    marginTop: '40px',
    textAlign: 'left',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    height: '100px',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  mapContainer: {
    marginTop: '40px',
  },
  mapTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  map: {
    border: '0',
  },
  
  // Media Queries for responsiveness
  '@media (max-width: 768px)': {
    contactTitle: {
      fontSize: '1.5rem',
    },
    contactDetails: {
      flexDirection: 'column', // Stacks items vertically on smaller screens
    },
    contactItem: {
      width: '100%', // Full width on small screens
    },
    formContainer: {
      padding: '15px',
      marginTop: '30px',
    },
    map: {
      height: '200px',
    },
  },

  '@media (max-width: 480px)': {
    contactTitle: {
      fontSize: '1.25rem',
    },
    formContainer: {
      maxWidth: '100%',
      padding: '10px',
    },
    input: {
      padding: '8px',
    },
    textarea: {
      padding: '8px',
    },
    submitButton: {
      padding: '8px',
    },
  },
};

export default Contact;
