import React from "react";
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Products";
import Footer from "./Components/Footer";
function App() {
    return (
        <Router>
            <main>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/products" element={<Product/>} />
                </Routes>
                <Footer/>
            </main>
        </Router>
    )
}
export default App;