import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [totalProducts, setTotalProducts] = useState(0);
  const navigate = useNavigate();

  const fetchProductList = async () => {
    try {
      const response = await axios.get(`http://localhost:3200/list?page=${currentPage}&limit=${productsPerPage}`);
      setProducts(response.data.products);
      setTotalProducts(response.data.total);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3200/delete/${productId}`);
      alert('Product deleted successfully');
      fetchProductList();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const handleEditProduct = (productId) => {
    navigate(`/edit/${productId}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchProductList();
  }, [currentPage]);

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="logo">
          <h2>Admin Panel</h2>
        </div>
        <div className="profile">
          <img src="warda.jpeg" alt="Admin Profile" />
        </div>
        <ul>
          <center>
            <li><Link to="/add"><button>Add Product</button></Link></li>
            <li><Link to="/manage"><button>Manage Products</button></Link></li>
          </center>
        </ul>
      </nav>

      {/* Content */}
      <div className="content">
        <h2>Manage Products</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="product-row">
                <td><img src={product.image} alt={product.title} width="100" height="100" /></td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <button onClick={() => handleEditProduct(product._id)} className="icon-btn"><FaEdit /></button>
                  <button onClick={() => handleDeleteProduct(product._id)} className="icon-btn"><FaTrashAlt /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} </span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>

      {/* CSS for Admin Panel and Manage Products */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

        .admin-container {
          display: flex;
          min-height: 100vh;
          animation: fadeIn 1s ease-out;
          font-family: 'Roboto', sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .sidebar {
          width: 350px;
          background: linear-gradient(45deg, #16b1d3, #18b1e0);
          color: #ecf0f1;
          padding: 20px;
          box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);
          animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .logo {
          text-align: center;
          margin-bottom: 20px;
        }

        .logo h2 {
          color: #ecf0f1;
          background: linear-gradient(45deg, #16b1d3, #18b1e0);
          padding: 10px;
          border-radius: 5px;
        }

        .profile {
          text-align: center;
          margin-bottom: 20px;
        }

        .profile img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }

        .sidebar ul {
          list-style: none;
          padding: 0;
        }

        .sidebar ul li {
          margin: 10px 0;
        }

        .sidebar ul li button {
          width: 70%;
          padding: 10px;
          background-color: #34495e;
          color: #ecf0f1;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .sidebar ul li button:hover {
          background-color: #1abc9c;
        }

        .content {
          flex: 1;
          padding: 20px;
          background-color: #ecf0f1;
        }

        .content h2 {
          font-size: 24px;
          color: #2c3e50;
          background: linear-gradient(45deg, #16b1d3, #18b1e0);
          color: white;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
        }

        .content table {
          width: 100%;
          border-collapse: collapse;
        }

        .content table th,
        .content table td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ccc;
        }

        .content table th {
          background-color: #34495e;
          color: #ecf0f1;
        }

        .content table button {
          padding: 5px 10px;
          background-color: #34495e;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .content table button:hover {
          background-color: #1abc9c;
        }

        .pagination {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pagination button {
          padding: 5px 15px;
          background-color: #34495e;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin: 0 10px;
        }

        .pagination button:disabled {
          background-color: #bdc3c7;
        }

        .pagination button:hover {
          background-color: #1abc9c;
        }

        .pagination span {
          font-size: 16px;
          color: #34495e;
        }
      `}</style>
    </div>
  );
};

export default ManageProducts;
