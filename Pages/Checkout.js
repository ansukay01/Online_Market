import React from "react";
import './Checkout.css';
import { useSelector } from "react-redux";
import SubTotal from "../Redux/SubTotal";
import { useDispatch } from "react-redux";
import { removefromcart } from "../Redux/cartAction";
import { Link } from "react-router-dom";


export const Checkout=()=>{
    const dispatch = useDispatch(); 
    const cart = useSelector(state=> state.cart)

 const EmptyCart=()=>{
    return (
        <div className="emptyContainer">
        <h3 className="">Your Cart is Empty</h3>
        <Link to='/shop'>
            <button className="Btn">Continue Shopping</button>
        </Link>
        </div>
    )
}
const ShowCart=()=>{
    return (
        <div>
        <div>
            <h3 className="itemsFont">Cart-Item(s)</h3>
        </div>
        <div className="cartitemsContainer">
        <div className="checkoutCard">
             {cart.cart.map(item => {
                return(
                    <div className="itemsInCard">
                    <div className="productImagePosition">
                        <img src={item.productImage} width="220" alt="" />
                        </div>
                        <div className="productInfo">
                            <h4>{item.productName}</h4>
                            <h4>${item.price}</h4>
                            <button className="signFont" 
                             onClick={()=>dispatch(removefromcart(item.id))}>
                                  -
                             </button>
                        </div>
                   </div>
                )
             })}
             </div>
             <div>
             <div className="shpFontCard">
             <h4 className="shpFnt">Shopping Total</h4>
             <div className="subTotalCard">
                <SubTotal />
                </div>
             </div>
             </div>
             </div>
        </div>
    ) 
            }
     
    return (
        <>
        {cart.cart.length ? <ShowCart /> : < EmptyCart /> }
        </>
    )

    
}

export default Checkout;


