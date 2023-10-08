import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/home";
import Products from "./Products/Products";
import Orders from './Orders/Orders';

function App() {
  const openMenu = () => {
    document.querySelector(".siderbar")?.classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".siderbar")?.classList.remove("open");
  }
    return (
    <Router>
        <div className="grid-container" />
        <link rel="stylesheet" href="style.css" />      
        <title>Project Vino</title>
    <body>
        <div>
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>&#9776;</button>
                    <a href="index.html">Project Vino</a>
                </div>
                <div className="header-links">
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/orders">Orders</Link>
                </div>
            </header>
            <aside className="sidebar">
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
                </Routes>
            </main>
            <footer>
                &copy; 2023 Project Vino
            </footer>
        </div>
    </body>   
    </Router>
  );
}

export default App;
