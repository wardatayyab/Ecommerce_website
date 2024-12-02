import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="pt-4 pb-2" style={{ backgroundColor: '#101218', color: '#312E39' }}>
        <div className="container" style={{ paddingLeft: '90px', paddingRight: '5px' }}>
          <div className="row">
            <div className="col-md-5">
              <img
                src="clothing-832.png"
                alt="Dor Furniture Logo"
                style={{ width: '170px', height: 'auto', marginBottom: '15px' }}
              /><br />
              <p style={{ color: '#fff' }}>Over the past 30 years we have reinvented <br /> the definition of furniture store.</p>
              <p style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                689 Berkley Square, United Kingdom
              </p>
              <p style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
                (+88) - 1990 - 6886
              </p>
              <p style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                support@bionas.com
              </p>
            </div>
            <div className="col-md-4">
              <br />
              <h5 style={{ color: '#fff' }}>Help & Support</h5>
              <ul className="list-unstyled" style={{ color: '#fff' }}>
                <li><Link to="/search-terms" style={{ color: '#fff', textDecoration: 'none' }}>Search Terms</Link></li>
                <li><Link to="/orders-returns" style={{ color: '#fff', textDecoration: 'none' }}>Orders & Returns</Link></li>
                <li><Link to="/help-faqs" style={{ color: '#fff', textDecoration: 'none' }}>Help & FAQs</Link></li>
                <li><Link to="/advanced-search" style={{ color: '#fff', textDecoration: 'none' }}>Advanced Search</Link></li>
                <li><Link to="/privacy-cookie-policy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy & Cookie Policy</Link></li>
                <li><Link to="/international-help" style={{ color: '#fff', textDecoration: 'none' }}>International Help</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <br />
              <h5 style={{ color: '#fff' }}>Information</h5>
              <ul className="list-unstyled" style={{ color: '#fff' }}>
                <li><Link to="/my-account" style={{ color: '#fff', textDecoration: 'none' }}>My Account</Link></li>
                <li><Link to="/order-history" style={{ color: '#fff', textDecoration: 'none' }}>Order History</Link></li>
                <li><Link to="/wishlist" style={{ color: '#fff', textDecoration: 'none' }}>Wishlist</Link></li>
                <li><Link to="/returns" style={{ color: '#fff', textDecoration: 'none' }}>Returns</Link></li>
                <li><Link to="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</Link></li>
                <li><Link to="/site-map" style={{ color: '#fff', textDecoration: 'none' }}>Site Map</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <p style={{ color: '#fff' }}>© 2020 Bionas. All Rights Reserved. Theme by doradothemes.com</p>
          <div className="social-icons" style={{ marginTop: '10px' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: '#fff' }}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: '#fff' }}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: '#fff' }}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
    </footer>
  );
}


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

// export default function Footer() {
//   return (
//     <footer className="pt-4 pb-2" style={{ backgroundColor: '#000', color: '#312E39' }}>
//         <div className="container" style={{ paddingLeft: '90px', paddingRight: '5px' }}>
//           <div className="row">
//             <div className="col-md-5">
//               <img
//                 src="logo9.png"
//                 alt="Dor Furniture Logo"
//                 style={{ width: '120px', height: 'auto', marginBottom: '15px' }}
//               /><br />
//               <p style={{ color: '#fff' }}>Over the past 30 years we have reinvented <br /> the definition of furniture store.</p>
//               <p style={{ color: '#fff' }}>
//                 <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
//                 689 Berkley Square, United Kingdom
//               </p>
//               <p style={{ color: '#fff' }}>
//                 <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
//                 (+88) - 1990 - 6886
//               </p>
//               <p style={{ color: '#fff' }}>
//                 <FontAwesomeIcon icon={faEnvelope} className="me-2" />
//                 support@bionas.com
//               </p>
//             </div>
//             <div className="col-md-4">
//               <br />
//               <h5 style={{ color: '#fff' }}>Help & Support</h5>
//               <ul className="list-unstyled" style={{ color: '#fff' }}>
//                 <li><Link to="/search-terms" style={{ color: '#fff', textDecoration: 'none' }}>Search Terms</Link></li>
//                 <li><Link to="/orders-returns" style={{ color: '#fff', textDecoration: 'none' }}>Orders & Returns</Link></li>
//                 <li><Link to="/help-faqs" style={{ color: '#fff', textDecoration: 'none' }}>Help & FAQs</Link></li>
//                 <li><Link to="/advanced-search" style={{ color: '#fff', textDecoration: 'none' }}>Advanced Search</Link></li>
//                 <li><Link to="/privacy-cookie-policy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy & Cookie Policy</Link></li>
//                 <li><Link to="/international-help" style={{ color: '#fff', textDecoration: 'none' }}>International Help</Link></li>
//               </ul>
//             </div>
//             <div className="col-md-3">
//               <br />
//               <h5 style={{ color: '#fff' }}>Information</h5>
//               <ul className="list-unstyled" style={{ color: '#fff' }}>
//                 <li><Link to="/my-account" style={{ color: '#fff', textDecoration: 'none' }}>My Account</Link></li>
//                 <li><Link to="/order-history" style={{ color: '#fff', textDecoration: 'none' }}>Order History</Link></li>
//                 <li><Link to="/wishlist" style={{ color: '#fff', textDecoration: 'none' }}>Wishlist</Link></li>
//                 <li><Link to="/returns" style={{ color: '#fff', textDecoration: 'none' }}>Returns</Link></li>
//                 <li><Link to="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</Link></li>
//                 <li><Link to="/site-map" style={{ color: '#fff', textDecoration: 'none' }}>Site Map</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="text-center py-3">
//           <p style={{ color: '#fff' }}>© 2020 Bionas. All Rights Reserved. Theme by doradothemes.com</p>
//           <div className="social-icons" style={{ marginTop: '10px' }}>
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: '#fff' }}>
//               <FontAwesomeIcon icon={faFacebook} />
//             </a>
//             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: '#fff' }}>
//               <FontAwesomeIcon icon={faTwitter} />
//             </a>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: '#fff' }}>
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//             <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
//               <FontAwesomeIcon icon={faYoutube} />
//             </a>
//           </div>
//         </div>
//     </footer>
//   );
// }
