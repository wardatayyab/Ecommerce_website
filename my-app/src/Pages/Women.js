import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const products = [
  {
    id: 1,
    title: 'Elegant Dress',
    image: '/wom11.jpg',
    link: '/dress',
  },
  {
    id: 2,
    title: 'Stylish Shoe',
    image: '/sh.jpg',
    link: '/shoe',
  },
  {
    id: 3,
    title: 'Designer Bag',
    image: '/bag9.jpg',
    link: '/bag',
  },
  {
    id: 4,
    title: 'Elegant Jewelry',
    image: '/jew.jpg',
    link: '/jewerly',
  },
];

const videoStyles = {
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '590px',
  objectFit: 'cover',
  objectPosition : 'top',
  zIndex: -1,
};

const headingStyles = {
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: 'black',
  fontFamily : 'Georgia, serif',
  marginTop: '20px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)',
};

const titleStyles = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
  marginTop: '10px',
};

export default function Women  ()  {
  return (
    <>
      <Header />
      {/* Video Section */}
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <video style={videoStyles} autoPlay loop muted>
          <source src="/video5.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Shop By Category Heading */}
      <h2 style={headingStyles}>Shop By Category</h2>

      {/* Product Cards */}
      <div className="container my-5" style={{ position: 'relative' }}>
        <div
          className="row"
          style={{
            display: 'flex',
            gap: '0px',
            flexWrap: 'wrap', // Allow wrapping of items on smaller screens
            justifyContent: 'center', // Center the items
            marginTop: '50px',
          }}
        >
          {products.map((product) => (
            <div
              className="col-md-3"
              key={product.id}
              style={{
                padding: '0',
                margin: '0',
                flex: '0 0 auto',
                display: 'flex',
                justifyContent: 'center', // Center the cards
                marginBottom: '20px', // Add margin between rows
              }}
            >
              <Link to={product.link} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div
                  className="card"
                  style={{
                    width: '200px',
                    height: 'auto',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      cursor: 'default',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <div className="card-body" style={{ padding: '10px' }}>
                    <h5 className="card-title" style={titleStyles}>
                      {product.title}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};