import React from "react";

export default function QuickView({title, brand, price, image, description, removeQuickView}) {
    // const [quickView, setQuickView] = QuickViewInfo
    return (
        <div className="quick-view">
            <div className="quick-view-image">
                <img src={image} alt={title}/>
            </div>
            <div className="quick-view-content">
                <h1>{title}</h1>
                <b>${price}</b>
                <div className="desc">
                    <h3>Description</h3>
                    <p>{description}</p>
                </div>
                <div className="close-add">
                    <button onClick={removeQuickView}>Close</button>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}