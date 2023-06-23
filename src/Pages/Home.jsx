import React, {useState} from "react";
import { Link } from "react-router-dom";
export default function Home() {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Air Jordan True Blue",
            price: "375",
            image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-True-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1674026406&q=75",
        },
        {
            id: 2,
            title: "Air Jordan Dior",
            price: "14000",
            image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Dior-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607043976",
        },
        {
            id: 3,
            title: "Jordan 4",
            price: "500",
            image: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1652711257&q=75",
        },
        {
            id: 4,
            title: "Air Jordan Lost and Found",
            price: "350",
            image: "https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined/Images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined/Lv2/img01.jpg?fm=jpg&auto=compress&w=480&dpr=2&updated_at=1665692308&h=320&q=75",
        },
        {
            id: 5,
            title: "Air Jordan Dior",
            price: "14000",
            image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Dior-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607043976",
        },
        {
            id: 6,
            title: "Jordan 4",
            price: "500",
            image: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1652711257&q=75",
        },
        {
            id: 7,
            title: "Air Jordan True Blue",
            price: "375",
            image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-True-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1674026406&q=75",
        },
        {
            id: 8,
            title: "Air Jordan Dior",
            price: "14000",
            image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Dior-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607043976",
        },
        {
            id: 9,
            title: "Jordan 4",
            price: "500",
            image: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1652711257&q=75",
        }
    ])
    return (
        <div className="home">
            <div className="home-container">
                <h1>Welcome to our website!</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>Eius veritatis soluta voluptatibus corporis, at officia.</p>
                <Link to={"/products"}><button>Get Started Now</button></Link>
            </div>
            <div className="searching">
                <h3>Search Our Products Here.</h3>
                <input type="text" placeholder="Search product by name..." />
            </div>
            <div className="products-review">
                {
                    products.map(product => {
                        return (
                            <div className="product-display" key={product.id}>
                                <div className="product-display-image" style={{background: `url(${product.image}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center"}}>

                                </div>
                                <div className="product-display-content">
                                    <h1>{product.title}</h1>
                                    <p>${product.price}</p>
                                    <div className="view-cart">
                                        <button>Quick View</button>
                                        <button>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="view-more-products">
                <Link to={"/products"}>View more products &gt;&gt;</Link>
            </div>
        </div>
    )
}