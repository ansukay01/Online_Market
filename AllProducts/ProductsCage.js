import React from "react";
import { Products } from "../products";
import { ProductsAvailable } from "./AllProductsAvailable";


function ProductsCage () {
    return (
        <>
        {Products.map((product)=> (
        <ProductsAvailable data={product} />
        ))}
        </>
    );
};

export default ProductsCage;
