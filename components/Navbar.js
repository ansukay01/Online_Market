
import React  from "react";
import './Navbar.css';
import { Outlet, Link, } from 'react-router-dom';
import { useSelector } from "react-redux";



 function Navbar () {
    const cart = useSelector(state=> state.cart)
    
    return (
        <>
        <nav>
            <div className="topnav"> 
        
        <Link className="split" to='/'>
            <img className="Logo" src="./ImageBin/Logo.jpg"
             alt='logo' width="100" /> 
        </Link>
          
            <div className="seperate">
         <Link to='/freeshipping'>Free Shipping</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/login'>Log-In</Link>
        <Link to='/register'>Register</Link>
        <Link to='/checkout'>
        <img src="https://cdn-icons-png.flaticon.com/512/372/372823.png"  
        width="33.2" alt="" />{cart.cart.length} 
        </Link>
        </div>
        </div>
    
        </nav>
        <Outlet />
        </>
    );
}

export default Navbar