import React, { Component } from 'react';
import './App.css';  
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Pages/Main';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Blog from './Components/Blog';

import Form from './Pages/Form';
import Watch from './Pages/Watch';
import Shoe from './Pages/Shoe';
import Men from './Pages/Men';   
import Women from './Pages/Women';
import Bag from './Pages/Bag';
import Jewerly from './Pages/Jewerly';
import Perfumes from './Pages/Perfumes';
import Menshoe from './Pages/Menshoe';
import Dress from './Pages/Dress';
import Dress2 from './Pages/Dress2';
import Kids1 from './Pages/Kids1';
import Kid2 from './Pages/Kid2';
import Card from './Pages/Card';
import Mainkid from './Pages/Mainkid';
import List from './Pages/List';

import ProductDetail from './Components/ProductDetail';
import Product2 from './Components/Product2';
// import Admin from './Admin';
import AllProduct from './AllProduct';

import Cart   from './Cart';
import { GetProducts } from './GetProducts';
import { Success } from './Success';
import { CancelPage } from './CanclePage';
import { ContactSupport } from './ContactSupport';
import ProductView from './ProductView';
import  {Login1}  from './Login1'; 
import Register1 from './Register1';
import {Private} from './Private';
import Tax from './Tax';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route element={<Private />}>
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/list' element={<List />} />
          <Route path='/' element={<Main />} />
          <Route path='/card' element={<Card />} />
          <Route path='/form' element={<Form />} />
          <Route path='/jewerly' element={<Jewerly />} />
          <Route path='/Bag' element={<Bag />} />
          <Route path='/watch' element={<Watch />} />
          <Route path='/perfume' element={<Perfumes />} />
          <Route path='/shoe' element={<Shoe />} />
          <Route path='/sho' element={<Menshoe />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/kid' element={<Mainkid />} />
          <Route path='/Kid1' element={<Kids1 />} />
          <Route path='/Kid2' element={<Kid2 />} />
          <Route path='/dress' element={<Dress />} />
          <Route path='/dress2' element={<Dress2 />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/list' element={<List />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/product' element={<Product2 />} />
          {/* <Route path='/admin' element={<Admin />} /> */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/GetProducts' element={<GetProducts />} />
          <Route path='/Success' element={<Success />} />
          <Route path='/cancel' element={<CancelPage />} />
          <Route path='/all' element={<AllProduct />} />
          <Route path='/contactsupport' element={<ContactSupport />} />
          <Route path='/product/:productId' element={<ProductView />} />
          <Route path='/taxe' element={<Tax />} />
          </Route>
          <Route path='/signup' element={<Register1 />} />
          <Route path='/login' element={<Login1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;