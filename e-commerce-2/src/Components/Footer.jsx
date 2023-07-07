import React from "react";
import {Link} from "react-router-dom";
export default function Footer() {
    return (
        <footer>
            <div className="left-nav">
                <div className="logo">
                    <Link to={"/"}><h1>Latos</h1></Link>
                </div>
                <div className="menu">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/products"}>Products</Link></li>
                    <li><Link to={"/about-us"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </div>
            </div>
            <div className="right-nav">
                <p>Stay in touch! Join our newsletter.</p>
                <div className="form">
                    <input type="email" placeholder="Enter email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </footer>
    )
}