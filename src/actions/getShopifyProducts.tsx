import React from "react";
import { getShopifyProducts } from "../services";


export const getShopifyProductsAction  = () => {
    return getShopifyProducts();
}