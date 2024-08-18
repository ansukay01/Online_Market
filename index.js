import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import FreeShipping from "./Pages/FreeShipping";
import Shop from "./Pages/Shop";
import LogIn from "./Pages/LogIn";
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import './App.css';
import './index.css';
import Footer from './components/Footer';
import Checkout from './Pages/Checkout';
import { CardPaymentDetails } from './Pages/CardPaymentDetails';
import  ProductsCage  from './AllProducts/ProductsCage';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Redux/cartReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Routes>
      <Route path='/' element={<Navbar/>} >
        <Route index element={<Home />} />
        <Route path='freeshipping' element={<FreeShipping />} />
        <Route path='shop' element={<Shop />} />
        <Route path='login' element={<LogIn />} />
        <Route path='cart' element={ < Cart /> } />
        <Route path='register' element={< Register /> } />
        <Route path='checkout' element={<Checkout />} />
        <Route path='cardpaymentdetails' element={<CardPaymentDetails/>} />
        <Route path='productscage' element={<ProductsCage />} />
      </Route>
    </Routes>
    </Provider>
    <footer>
          <Footer/>
        </footer>

  </BrowserRouter>
);
