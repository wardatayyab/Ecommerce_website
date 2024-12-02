import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductView = () => {
  // Get product ID from the URL using useParams hook
  const { productId } = useParams();

  // Static product data (you can extend this data)
  const productData = [
    { id: 'product1', name: 'Dress 1', description: 'A beautiful dress for any occasion', price: '$100', src: 'dress1.webp' },
    { id: 'product2', name: 'Dress 2', description: 'Stylish and comfortable', price: '$120', src: 'women9.jpg' },
    { id: 'product3', name: 'Men Shirt', description: 'Trendy shirt for men', price: '$50', src: 'men1.jpg' },
    { id: 'product4', name: 'Men Jacket', description: 'Warm and stylish jacket', price: '$150', src: 'men3.jpg' },
    { id: 'product5', name: 'Boy T-shirt', description: 'Casual t-shirt for boys', price: '$30', src: 'boy3.jpg' },
    { id: 'product6', name: 'Boy Jeans', description: 'Comfortable jeans for boys', price: '$40', src: 'boy4.jpg' },
    { id: 'product7', name: 'Girl Dress', description: 'Cute and colorful dress for girls', price: '$60', src: 'girl11.jpg' },
    { id: 'product8', name: 'Girl Skirt', description: 'Stylish skirt for girls', price: '$50', src: 'girl12.jpg' },
  ];

  // Find product by ID
  const product = productData.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container" style={{ paddingTop: '20px' }}>
      <div className="row">
        <div className="col-md-6">
          <img src={product.src} alt={product.name} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>{product.price}</h4>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
