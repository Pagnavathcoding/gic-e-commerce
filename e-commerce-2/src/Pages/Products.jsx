import React, {useEffect, useState} from "react";
import axios from "axios";
function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const productsURL = process.env.REACT_APP_PRODUCTS_BACKEND;
        axios.get(productsURL).then(data => {
            setProducts(data.data);
        }).catch(err => err);
    }, []);
    function removeItem(id) {
        axios.delete(`${process.env.REACT_APP_PRODUCTS_BACKEND}/${id}`)
    }
    return (
        <div className="products">
            <div className="products-container">
                {
                    products.map(data => {
                        return (
                            <div className="product" key={data._id}>
                                <div className="product-image" style={{background: `url(${data.image}) no-repeat`, backgroundSize: "cover", backgroundPosition: "center"}}>
                                </div>
                                <h1>{data.title}</h1>
                                <p>${data.price}</p>
                                <button onClick={() => removeItem(data._id)}>remove</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product;