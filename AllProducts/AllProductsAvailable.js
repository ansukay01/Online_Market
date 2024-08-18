import React from "react";
import { Products } from "../products";
import { AllProducts } from "./AllProducts";
import './AllProductsAvailable.css';

export const ProductsAvailable = () => {

    return (
        <div className="">
            <h1 className="exploreFont">EXPLORE  YOUR  INTERESTS</h1>
        <div className="productsContainer">

        <div className="singleproduct"> 
        <AllProducts  
        {...Products[0]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[1]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[2]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[3]} />
        </div>
        
        <div className="singleproduct">
        <AllProducts  
        {...Products[4]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[5]} />
        </div> 

        <div className="singleproduct">
        <AllProducts  
        {...Products[6]} />
        </div>
        
        <div className="singleproduct">
        <AllProducts  
        {...Products[7]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[8]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[9]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[10]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[11]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[12]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[13]} />
        </div>
       
        <div className="singleproduct">
        <AllProducts  
        {...Products[14]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[15]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[16]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[17]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[18]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[19]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[20]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[21]} />
        </div>


        <div className="singleproduct">
        <AllProducts  
        {...Products[22]} />
        </div>

        <div className="singleproduct">
        <AllProducts  
        {...Products[23]} />
        </div>
        </div>

        </div>
    );
    }

