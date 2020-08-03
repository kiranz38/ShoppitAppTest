import react from "react";
import { SHOPIFY_STORE_URL,SHOPIFY_PRODUCTS,formUrl } from "../helpers";
import axio from "axios";
import { string } from "prop-types";
import Moment from 'moment';

export const getShopifyProducts = () => {

    const products = axio.get("http://localhost:3001/products");
    return {
        type : SHOPIFY_PRODUCTS,
        payload : products
    }
}



