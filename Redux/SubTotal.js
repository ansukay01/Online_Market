import React from 'react';
import { useSelector } from 'react-redux';
import { getTotal } from './cartReducer';
import { Link } from 'react-router-dom';

function SubTotal () {
    const cart = useSelector(state=> state.cart)


    return (
        <div className='subCard'>
            <div className='totalCard'>
                <p>SubTotal ({cart.cart.length} items): ${getTotal(cart.cart)}</p>
                <Link to='/cardpaymentdetails'>
                <button className='Btn'> Proceed to Checkout </button>
                </Link>
            </div>
        </div>
    )
}

export default SubTotal;