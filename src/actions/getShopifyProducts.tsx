import React from "react";
import { getShopifyProducts ,postShopifyProducts} from "../services";
import {  POST_SHOPIFY_PRODUCTS} from "../helpers/constants";


export const getShopifyProductsAction  = () => {
    return getShopifyProducts();
}

export const postShopifyProductsData = (products : []) => {
    postShopifyProducts(products)
    return {type:POST_SHOPIFY_PRODUCTS,
    payload : true
    }
}