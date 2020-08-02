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

export const postShopifyProducts = (products:any) => {

    // products.forEach((element : any) => {
    //     axio.post("http://localhost:3001/postProducts",
    //     element);
    // });
    axio.post("http://localhost:3001/postProducts",
    {title:products[0].title,vendor:products[0].vendor,
    created_at: Moment(products[0].created_at).toDate(),
    id:products[0].id,
    src: products[0].image.src,
    body_html:products[0].body_html,handle:products[0].handle
    },
    {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
        }
        );
}

