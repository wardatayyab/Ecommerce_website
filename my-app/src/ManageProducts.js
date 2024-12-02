// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaEdit, FaTrashAlt } from 'react-icons/fa';
// import axios from 'axios';
// import All from './All';

// const ManageProducts = () => {
//   const [products, setProducts] = useState([]); 
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(9);
//   const [totalProducts, setTotalProducts] = useState(0);
//   const navigate = useNavigate();

//   const fetchProductList = async () => {
//     try {
//       const response = await axios.get('http://localhost:3200/list');
//       setProducts(response.data); 
//       setTotalProducts(response.data.length); 
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const handleDeleteProduct = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:3200/delete/${productId}`);
//       alert('Product deleted successfully');
//       fetchProductList(); 
//     } catch (error) {
//       console.error('Error deleting product:', error);
//       alert('Failed to delete product');
//     }
//   };

//   const handleEditProduct = (productId) => {
//     navigate(`/edit/${productId}`);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('userToken');
//     window.location.href = '/login';
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   const totalPages = Math.ceil(totalProducts / productsPerPage);

//   useEffect(() => {
//     fetchProductList(); 
//   }, []);

//   return (
//    <>
//    <All/>
//     <div className="admin-container">
//         {/* Content */}
//       <div className="content">
//         <h2 style={{ fontSize: '28px', fontFamily: 'Georgia, serif', fontWeight: '700', textAlign: 'center', marginLeft:'-20px' }}>MANAGE PRODUCT</h2>
//         <br />
//         <table>
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Title</th>
//               <th>Price</th>
//               <th>Category</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentProducts.map((product) => (
//               <tr key={product._id}>
//                 <td><img src={product.image} alt={product.title} width="100px" height="120px" /></td>
//                 <td>{product.title}</td>
//                 <td>{product.price}</td>
//                 <td>{product.category}</td>
//                 <td>
//                   <FaEdit 
//                     style={{ cursor: 'pointer', marginRight: '10px' }} 
//                     onClick={() => handleEditProduct(product._id)} 
//                   />
//                   <FaTrashAlt 
//                     style={{ cursor: 'pointer', marginRight: '10px' }} 
//                     onClick={() => handleDeleteProduct(product._id)} 
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="pagination">
//           <button 
//             onClick={() => handlePageChange(currentPage - 1)} 
//             disabled={currentPage === 1}
//           >
//             Prev
//           </button>
//           <span>{currentPage} / {totalPages}</span>
//           <button 
//             onClick={() => handlePageChange(currentPage + 1)} 
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* CSS for Admin Panel and Manage Products */}
//       <style jsx>{`
//         .admin-container {
//           display: flex;
//           min-height: 100vh;
//           animation: fadeIn 1s ease-out;
//            margin-top: -590px;
//          margin-Left: 350px;
//          width : 850px;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         .content {
//           flex: 1;
//             overflow-y: auto;
//           padding: 20px;
//           background-color: #ecf0f1;
//         }
// .content::-webkit-scrollbar {
//     display: none; /* Hide scrollbar in WebKit-based browsers */
//   }
//         .content h2 {
//           font-size: 24px;
//           color: #2c3e50;
//         }

//         .content table {
//           width: 100%;
//           border-collapse: collapse;
//         }

//         .content table th,
//         .content table td {
//           padding: 10px;
//           text-align: left;
//           border-bottom: 1px solid #ccc;
//         }

//         .content table th {
//           background-color: #34495e;
//           color: #ecf0f1;
//         }

//         .pagination {
//           margin-top: 20px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .pagination button {
//           padding: 5px 15px;
//           background-color: #34495e;
//           color: #fff;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           margin: 0 10px;
//         }

//         .pagination button:disabled {
//           background-color: #bdc3c7;
//         }

//         .pagination button:hover {
//           background-color: #1abc9c;
//         }

//         .pagination span {
//           font-size: 16px;
//           color: #34495e;
//         }
//       `}</style>
//     </div>
//     </>
//   );
// };

// export default ManageProducts;




import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import All from './All';
import { useNavigate } from 'react-router-dom';

const ManageProducts = () => {
  const [products, setProducts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [totalProducts, setTotalProducts] = useState(0);
  const navigate = useNavigate();

  const fetchProductList = async () => {
    try {
      const response = await axios.get('http://localhost:3200/list');
      setProducts(response.data); 
      setTotalProducts(response.data.length); 
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  useEffect(() => {
    fetchProductList(); 
  }, []);

  return (
    <>
      <All />
      <div className="admin-container">
        <div className="content">
          <h2 style={{ fontSize: "2.5rem", fontFamily: 'Georgia, serif', fontWeight: '700', textAlign: 'center', marginLeft: '-20px' ,textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"}}>MANAGE PRODUCT</h2>
          <br />
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
              {currentProducts.map((product) => (
                <tr key={product._id}>
                  <td><img src={product.image} alt={product.title} width="100px" height="120px" /></td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <FaEdit 
                      style={{ cursor: 'pointer', marginRight: '10px' }} 
                      onClick={() => handleEditProduct(product._id)} 
                    />
                    <FaTrashAlt 
                      style={{ cursor: 'pointer', marginRight: '10px' }} 
                      onClick={() => handleDeleteProduct(product._id)} 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span>{currentPage} / {totalPages}</span>
            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

        {/* CSS for Admin Panel and Manage Products */}
        <style jsx>{`
          .admin-container {
            display: flex;
            min-height: 100vh;
            animation: fadeIn 1s ease-out;
            margin-top: -580px;
            margin-left: 350px;
            width: 850px;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

         .content {
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
  overflow-y: scroll;  /* Allow scrolling */
  max-height: 100vh;  /* Set a max height */
  display: block;
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

.content::-webkit-scrollbar {
  display: none;  /* Hide scrollbar in WebKit browsers */
}

          .content h2 {
            font-size: 24px;
            color: #2c3e50;
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
    </>
  );
};

export default ManageProducts;
