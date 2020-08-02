import react from "react";
import { SHOPIFY_STORE_URL,SHOPIFY_PRODUCTS,formUrl } from "../helpers";
import axio from "axios";
import { string } from "prop-types";

export const getShopifyProducts = () => {

    const url = formUrl();
    url.replace(/%20/g, "");
   
   
    const products = axio.get("http://localhost:3001/products");
    console.log(products);
    
    return {
        type : SHOPIFY_PRODUCTS,
        payload : products
    }
}

// ,{headers:{
//     "Access-Control-Allow-Origin":"*",
//     "X-Requested-With": "XMLHttpRequest"
// }}