import React, { useState } from 'react';
import axios from 'axios';
import All from './All';
import { Link, useNavigate } from 'react-router-dom';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();  // Hook to navigate between pages

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);

    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post('http://localhost:3200/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Product added successfully!');
      // Clear the form after successful submission
      setTitle('');
      setPrice('');
      setDescription('');
      setCategory('');
      setImage(null);
    } catch (error) {
      console.error('Error submitting product:', error);
      alert('Failed to submit product');
    }
  };

  const handleLogout = () => {
    // Clear session or perform any other logout actions here
    alert("Logged out successfully");
    navigate("/login");  // Navigate to the login page after logout
  };

  return (
    <>
      <All/>
      <div className="admin-container">
        {/* Sidebar remains fixed */}
        <div className="content">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: "2.5rem", fontWeight: '900' ,textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"}}>ADD PRODUCT</h2>
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmitProduct}>
              <label htmlFor="title">
                <i className="fas fa-box"></i> Product Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <label htmlFor="price">
                <i className="fas fa-dollar-sign"></i> Price:
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />

              <label htmlFor="description">
                <i className="fas fa-align-left"></i> Description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <label htmlFor="category">
                <i className="fas fa-tags"></i> Category:
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />

              <label htmlFor="image">
                <i className="fas fa-image"></i> Product Image:
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />

              <button type="submit">
                <i className="fas fa-plus-circle"></i> Add Product
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .admin-container {
          display: flex;
          min-height: 100vh;
           margin-top: -580px;
          margin-left: 200px; /* Adjust the sidebar width */
          overflow: hidden; /* Prevent the main container from scrolling */
        }

        .content {
          flex: 1;
          padding: 20px;
          background-color: #ecf0f1;
          height: 100vh;
          overflow-y: scroll; /* Enable scrolling */
        }

        /* Hide the scrollbar while still allowing scroll */
        .content::-webkit-scrollbar {
          display: none; /* Hides the scrollbar in webkit browsers */
        }

        .form-container {
          max-width: 550px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .form-container form {
         
          display: flex;
          flex-direction: column;
        }

        .form-container form label {
          margin: 10px 0 5px;
          color: #2c3e50;
        }

        .form-container form input,
        .form-container form textarea {
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
        }

        .form-container form button {
          padding: 10px;
          background-color: #34495e;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .form-container form button:hover {
          background-color: #1abc9c;
        }

        .form-container form input[type="file"] {
          padding: 5px;
        }

        .form-container form label i {
          margin-right: 8px;
        }

        .form-container form input,
        .form-container form textarea {
          font-size: 16px;
        }
      `}</style>
    </>
  );
}

export default AddProduct;



