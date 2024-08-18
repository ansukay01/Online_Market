import React from "react";
import './AllProducts.css';
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/cartAction";



export const AllProducts = ({id, productName, productImage, price}) => {
    const dispatch = useDispatch();
    
    return (
    <>
                <div className="productsContainer">
                <div className="mainGrid">
                <div className="gridforAll">
                <div className="gridPosition">
                <div className="products">
                <img src={productImage} alt={productName}/>
                <h4 className="pName">{productName}</h4>
                <h5 className="pPrice">${price}</h5>
                <button className="Btn" 
                onClick={()=> dispatch(addtocart(id, productName, productImage, price))}>
                    Add To Cart
                </button>
                </div>
                </div>
                </div>
                </div>
                </div>
        
    </>
    );
}