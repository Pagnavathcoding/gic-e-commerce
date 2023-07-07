import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import QuickView from "../Components/QuickView";
export default function Home() {
    // const [products, setProducts] = useState([
    //     {
    //         id: 1,
    //         title: "Air Jordan True Blue",
    //         price: "375",
    //         image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-True-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1674026406&q=75",
    //     },
    //     {
    //         id: 2,
    //         title: "Air Jordan Dior",
    //         price: "14000",
    //         image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Dior-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607043976",
    //     },
    //     {
    //         id: 3,
    //         title: "Jordan 4",
    //         price: "500",
    //         image: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1652711257&q=75",
    //     },
    //     {
    //         id: 4,
    //         title: "Air Jordan Lost and Found",
    //         price: "350",
    //         image: "https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined/Images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined/Lv2/img01.jpg?fm=jpg&auto=compress&w=480&dpr=2&updated_at=1665692308&h=320&q=75",
    //     },
    //     {
    //         id: 5,
    //         title: "Air Jordan Dior",
    //         price: "14000",
    //         image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Dior-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607043976",
    //     },
    //     {
    //         id: 6,
    //         title: "Jordan 4",
    //         price: "500",
    //         image: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1652711257&q=75",
    //     },
    //     {
    //         id: 7,
    //         title: "Air Jordan True Blue",
    //         price: "375",
    //         image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-True-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1674026406&q=75",
    //     },
    //     {
    //         id: 8,
    //         title: "Air Jordan Dior",
    //         price: "14000",
    //         image: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Dior-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607043976",
    //     },
    //     {
    //         id: 9,
    //         title: "Jordan 4",
    //         price: "500",
    //         image: "https://images.stockx.com/images/Air-Jordan-4-Retro-Military-Black-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1652711257&q=75",
    //     }
    // ])
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/products`).then(data => {
            setProducts(data.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);
    const [quickView, setQuickView] = useState({});
    const getProductInfos = (index) => {
        const display = {
            title: products[index].title,
            brand: products[index].brand,
            price: products[index].price,
            image: products[index].image,
            description: products[index].description,
        };
        setQuickView(display);
    }
    const removeQuickViewFunction = () => {
        setQuickView({})
    };
    const [search, setSearch] = useState("");
    const productsSearch = products.filter(data => {
        return data.title.toLowerCase().includes(search.toLowerCase());
    })
    return (
        <div className="home">
            <div className="home-container">
                <h1>Welcome to our website!</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>Eius veritatis soluta voluptatibus corporis, at officia.</p>
                <Link to={"/products"}><button>Get Started Now</button></Link>
            </div>
            <div className="searching">
                <h3>Search Our Products Here.</h3>
                <input type="text" placeholder="Search product by name..." value={search} onChange={e => setSearch(e.target.value)} />
                {productsSearch.length === 0 && search.length > 0 && <p style={{marginTop: "20px"}}>Product Not Found!</p>}
            </div>
            {products.length === 0 && <div className="loading-products">
                <div className="circle"></div>
            </div>}
            <div className="popup" style={{display: JSON.stringify(quickView) === "{}" ? "none" : "flex"}}>
                <QuickView title={quickView.title} brand={quickView.brand} price={quickView.price} image={quickView.image} description={quickView.description} removeQuickView={removeQuickViewFunction} />
            </div>
            <div className="products-review">
                {
                    productsSearch.map((product, index) => {
                        return (
                            <div className="product-display" key={product._id}>
                                <div className="product-brand">
                                    <p>{product.brand}</p>
                                </div>
                                <div className="product-display-image" style={{background: `url(${product.image}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center"}}>
                                </div>
                                <div className="product-display-content">
                                    <h1>{product.title}</h1>
                                    <p>${product.price}</p>
                                    <div className="view-cart">
                                        <button onClick={() => getProductInfos(index)}>Quick View</button>
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