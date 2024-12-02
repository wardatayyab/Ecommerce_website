import React from 'react';
import Header from './Header';
import Footer from './Footer'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTshirt,
  faShippingFast,
  faCreditCard,
  faExchangeAlt,
  faHandshake,
  faSmile,
  faUserShield,
  faChartLine,
  faStore,
  faHeadphonesAlt,
  faClipboardCheck,
  faGift,
} from '@fortawesome/free-solid-svg-icons';

// Service Data
const services = [
  {
    id: 1,
    title: 'Wide Range of Styles',
    description: 'Discover a diverse collection of clothing styles for every occasion.',
    icon: faTshirt,
  },
  {
    id: 2,
    title: 'Fast Delivery',
    description: 'Get your orders delivered to your doorstep in record time.',
    icon: faShippingFast,
  },
  {
    id: 3,
    title: 'Secure Payments',
    description: 'Shop confidently with our secure payment methods.',
    icon: faCreditCard,
  },
  {
    id: 4,
    title: 'Easy Returns',
    description: 'Enjoy hassle-free returns within 30 days of your purchase.',
    icon: faExchangeAlt,
  },
  {
    id: 5,
    title: 'Customer Support',
    description: 'Our support team is here to help you 24/7.',
    icon: faHeadphonesAlt,
  },
  {
    id: 6,
    title: 'Loyalty Programs',
    description: 'Join our loyalty program and earn rewards with every purchase.',
    icon: faHandshake,
  },
  {
    id: 7,
    title: 'Quality Assurance',
    description: 'We guarantee high-quality materials in every product.',
    icon: faClipboardCheck,
  },
  {
    id: 8,
    title: 'Latest Trends',
    description: 'Stay updated with the latest fashion trends and styles.',
    icon: faChartLine,
  },
  {
    id: 9,
    title: 'Gift Wrapping',
    description: 'Get your purchases gift-wrapped for special occasions.',
    icon: faGift,
  },
  {
    id: 10,
    title: 'Sizing Assistance',
    description: 'Get help with sizing to find the perfect fit.',
    icon: faUserShield,
  },
  {
    id: 11,
    title: 'In-Store Pickup',
    description: 'Order online and pick up your items at our store.',
    icon: faStore,
  },
  {
    id: 12,
    title: 'Exclusive Discounts',
    description: 'Enjoy exclusive discounts and offers for members.',
    icon: faSmile,
  },
];

const featuredProducts = [
  {
    id: 1,
    title: 'Women Collection',
    price: '$29.99',
    image: 'dress1.webp', 
  },
  {
    id: 2,
    title: 'Men Collection',
    price: '$39.99',
    image: 'men8.jpg', 
  },
  {
    id: 3,
    title: ' Kids Collection',
    price: '$49.99',
    image: 'ima.jpg', 
  },
 
];

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'Great service and fast delivery! Highly recommend this store.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'I love the quality of the clothes! Definitely coming back for more.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    feedback: 'Amazing customer support and beautiful clothing options.',
  },
];

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#f4f4f4',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '40px',
    marginTop: '110px',
    textTransform: 'uppercase',
  },
  serviceCard: {
    backgroundColor: '#ffffff', 
    borderRadius: '8px',
    padding: '20px',
    color: '#333',
    margin: '15px',
    flex: '1 1 250px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: '2.5rem',
    color: '#007bff', 
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '10px 0',
    textAlign: 'center',
  },
  cardDescription: {
    textAlign: 'center',
    color: '#666', 
  },
  featuredContainer: {
    marginTop: '40px',
  },
  featuredCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  featuredImage: {
    width: '220px',
    height: '250px',
    marginBottom: '10px',
  },
  testimonialContainer: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  testimonial: {
    marginBottom: '20px',
    fontStyle: 'italic',
    color: '#555',
  },
  testimonialName: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
};

const Services = () => {
  return (<>
  <Header/>
  <div style={styles.container}>
      <h2 style={styles.heading}>Our Services</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {services.map((service) => (
          <div
            key={service.id}
            style={styles.serviceCard}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <FontAwesomeIcon icon={service.icon} style={styles.cardIcon} />
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
      <div style={styles.featuredContainer}>
        <h2 style={styles.heading}>Featured Products</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {featuredProducts.map((product) => (
            <div key={product.id} style={styles.featuredCard}>
              <img src={product.image} alt={product.title} style={styles.featuredImage} />
              <h4 style={styles.cardTitle}>{product.title}</h4>
              <p style={styles.cardDescription}>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.testimonialContainer}>
        <h2 style={styles.heading}>Customer Testmonial</h2>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={styles.testimonial}>
            <p>"{testimonial.feedback}"</p>
            <p style={styles.testimonialName}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default Services;





