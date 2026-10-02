import React from "react";
import "./Product.css";

function Product(props){
    return(
        <div className="product-card">
            <img src={props.image} />
            <div className="product-info">
            <h2>{props.feature}</h2>
            <h2>{props.name}</h2>
            <h3> {props.price}</h3>
            <p> Brand:{props.brand}</p>
        </div>
        </div>
    );
}
export default Product;
