import React from "react";
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <header>
            <nav>
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
                    <Link to={"/login"}><button>Log In</button></Link>
                    <Link to={"/cart"}><button>Cart (0)</button></Link>
                </div>
            </nav>
        </header>
    )
}