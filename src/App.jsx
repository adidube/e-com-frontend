import React, { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ShowProduct from './Component/Product/ShowProduct'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductDetail from './Component/Product/ProductDetail';
import Navbar from './Component/User/Navbar';
import SearchProduct from './Component/Product/SearchProduct';
import Register from './Component/User/Register';
import Login from './Component/User/Login';
import Profile from './Component/User/Profile';
import Cart from './Component/User/Cart';
import Address from './Component/User/Address';
import Checkout from './Component/User/Checkout';
import OrderConfirmation from './Component/User/OrderConfirmation';


function App() {
  
  return (
    <div>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/search/:term" element={<SearchProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Address />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderconfirmation" element={<OrderConfirmation />} />

        </Routes>
      </Router>
    
    </div>
  )
}

export default App
