import React, { useEffect } from 'react';
import AOS from 'aos';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CardGallery from '../Components/CardGallery';
import Logo from '../Components/Logo';
import ReactMultiCarousel from '../Components/ReactMultiCarousel';
import Slider from '../Slider';

import Card from '../Pages/Card'; 
import Collection1 from '../Pages/Collection1';
import 'aos/dist/aos.css';

export default function Crousel() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const buttonStyle = {
    marginTop: '10px',
    marginLeft: '50px',
    padding: '12px 25px',
    backgroundColor: '#fff',
    border: 'none',
    color: '#333',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '25px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  return (
    <>
    <Header/><br></br><br></br><br></br><br></br>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <img src="i8.jpg" className="d-block w-100" alt="Beautiful Landscape View" />
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <img src="i.jpg" className="d-block w-100" alt="Nature Background" />
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <img src="o.jpg" className="d-block w-100" alt="Abstract Illustration" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
      <Card />
    <Slider />
          <ReactMultiCarousel />
          <Collection1 />
          <Logo />
          <CardGallery />
          <Footer />
      <style jsx>{`
        .carousel-item img {
          height: 100vh; /* Adjust image height based on viewport height */
          object-fit: cover;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-caption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-weight: 1200;
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
          text-align: center;
          padding: 0 20px;
        }

        @media (max-width: 768px) {
          .carousel-item img {
            height: 30vh; /* Reduce height on smaller screens */
          }

          .carousel-caption {
            font-size: 5vw;
            left: 5%;
          }

          button {
            font-size: 16px;
            padding: 10px 20px;
          }
        }
      `}</style>

    </>
  );
}
