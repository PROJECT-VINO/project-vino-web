import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/home";
import Products from "./Products/Products";
import Orders from './Orders/Orders';
import PaymentScreen from './Payment/Payment';
import OrderDetail from './Orders/OrderDetail';

function App() {
  const openMenu = () => {
    document.querySelector(".siderbar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".siderbar")?.classList.remove("open");
  }
    return (
    <Router>
        <div className="App">
        <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>&#9776;</button>
                    <a href="index.html">Project Vino</a>
                </div>
                <div className="header-links">
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/payment">Payment</Link>
                </div>
            </header>
            <div> <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Pants</a>
                    </li>

                    <li>
                        <a href="index.html">Shirts</a>
                    </li>
                </ul>
            </aside>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Products/>} /> 
                    <Route path="orders" element={<Orders />}></Route>
                    <Route path="/order/:id" element={<OrderDetail />}></Route>
                    <Route path="payment" element={<PaymentScreen/>}></Route>      
                </Routes>
            </main>
            <footer> &copy; 2023 Project Vino </footer>
        </div>
    </div>
    </div> 
    </Router>
  );
}

export default App;
