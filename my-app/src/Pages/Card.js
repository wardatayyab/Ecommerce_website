import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Card = () => {
  return (
    <div className="container-fluid p-0" style={containerStyle}>
      <div className="row g-4" style={{ ...rowStyle, marginTop: '20px' }}>
        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card position-relative" style={cardStyle}>
            <img src="wom10.jpg" className="card-img-top" alt="Card image 1" />
            <div className="overlay">
              <h5 className="card-title">Women Collection</h5>
              <Link to="/women" className="btn btn-primary">See More</Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card position-relative" style={cardStyle}>
            <img src="men8.jpg" className="card-img-top" alt="Card image 2" />
            <div className="overlay">
              <h5 className="card-title">Men Collection</h5>
              <Link to="/men" className="btn btn-primary">See More</Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card position-relative" style={cardStyle}>
            <img src="ima.jpg" className="card-img-top" alt="Card image 3" />
            <div className="overlay">
              <h5 className="card-title">Kids Collection</h5>
              <Link to="/kid" className="btn btn-primary">See More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Inject Styles */}
      <style jsx>{`
        .card {
          border: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.6s;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-img-top {
          width: 100%;
          height: 500px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .card:hover .card-img-top {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          top: 100%; /* Start from below the card */
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: top 0.6s ease; /* Slide in from bottom */
        }

        .card:hover .overlay {
          top: 0; /* Move to cover the card */
        }

        .card-title {
          font-size: 1.5rem;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(50px); /* Start below */
          transition: transform 0.6s ease, opacity 0.6s ease;
        }

        .btn-primary {
          background-color: #007BFF;
          color: white;
          border: none;
          padding: 10px 16px;
          opacity: 0;
          transform: translateY(30px); /* Start below */
          transition: transform 0.6s ease, opacity 0.6s ease;
        }

        .card:hover .card-title,
        .card:hover .btn-primary {
          transform: translateY(0); /* Move to original position */
          opacity: 1;
        }

        @media (max-width: 768px) {
          .card-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: '50px',
  width: '90%',
  boxSizing: 'border-box',
};

const rowStyle = {
  marginTop: '20px',
};

const cardStyle = {
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.6s',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export default Card;
